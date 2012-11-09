Crafty.c("Cursor", {
  firerate: 50

  ,init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
    Crafty.addEvent(this, Crafty.stage.elem, "mouseown", this.shoot);
    Crafty.addEvent(this, Crafty.stage.elem, "mouseup", this.stopshoot);
    
    this.requires("Collision")
    .bind("EnterFrame", this.enterFrame)
    .bind('MouseDown', this.mouseDownHandler)
    .bind('MouseUp', this.mouseUpHandler);

    this.fireInterval = window.setInterval($.proxy(this.attackTimeout,this), this.firerate);
  }

  ,position: function(e){
    this.attr({x:e.layerX-this.w/2,y:e.layerY-this.h/2});
  }

  ,attackTimeout: function(){
    console.log("attackTimeout", this.shooting, this.hit("Destroyable"));
    if(this.shooting == true && this.hit("Destroyable")){
      var destroyable = this.hit("Destroyable")[0].obj;
      if(destroyable.__c["Enemy"] || destroyable.__c["EnemyCover"]){
        destroyable.trigger("Damage");
      }
    }
  }

  ,mouseDownHandler: function() {
    this.shooting = true;
    this.animate('Shooting',0,0,1)
    .animate('Shooting', 5 , -1);

    Crafty.audio.play('mg', -1);
  }

  ,mouseUpHandler: function() {
    this.shooting = false;
    if(this.isPlaying('Shooting')){
      this.reset();
      Crafty.audio.stop('mg');
    }
  }

});