Crafty.c("Cursor", {
  firerate: 10

  ,init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", this.mouseDownHandler);
    Crafty.addEvent(this, Crafty.stage.elem, "mouseup", this.mouseUpHandler);
    
    this.requires("Collision, MoveByCenter")
    .bind("EnterFrame", this.enterFrameHandler)
    .onHit("Destroyable", this.attackTimeout)
    ;

  }

  ,position: function(e){
    this.attr({
      x:e.layerX-this.w/2,
      y:e.layerY-this.h/2
    });
  }

  ,attackTimeout: function(destroyable){
    try{
    if(this.shooting == true && Crafty.frame() % this.firerate == 0){
      var destroyable = destroyable[0].obj;

      if(destroyable.__c["Enemy"] || 
        destroyable.__c["EnemyCover"] || 
        destroyable.__c["BigBullet"]){
        destroyable.trigger("Damage");
      }
    }
  }catch(ex){
    //console.log(ex);
  }
  }

  ,enterFrameHandler: function(frame){
    if(frame.frame % this.firerate == 0){
      this.attackTimeout();
    }
  }

  ,mouseDownHandler: function(mouseEvent) {
    if(mouseEvent.mouseButton === Crafty.mouseButtons.LEFT){
      this.shooting = true;
      this.animate('Shooting',0,0,1)
      .animate('Shooting', 5 , -1);

      Crafty.audio.play('mg', -1);
    }
    if(mouseEvent.mouseButton === Crafty.mouseButtons.RIGHT){
      this.launchGrenade();
    }
  }

  ,launchGrenade: function(){
    console.log("launchGrenade()", this.centerX(), this.centerY());
    var player = Crafty(Crafty("player1")[0]);
    console.log(player.grenades);
    if(player.grenades > 0){

      console.log(player.centerY(), player.centerX(), this.centerX(), this.centerY());

      Crafty.e("Bullet, Grenade")
      .moveByCenter({
        x: player.centerX(),
        y: player.centerY(),
        targetx: this.centerX(),
        targety: this.centerY()
      });
      player.grenades -= 1;
    }
  }

  ,mouseUpHandler: function() {
    this.shooting = false;
    if(this.isPlaying('Shooting')){
      this.reset();
      Crafty.audio.stop('mg');
    }
  }

});