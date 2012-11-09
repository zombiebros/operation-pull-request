Crafty.c("Soldier", {
  life: 10
  ,direction: 1
  ,firerate: 50
  ,moving: true

  ,init: function(){    
    this.requires("2D, Canvas, Color, Enemy, Collision, ViewportConstrain, MoveByCenter, Destroyable, Horizonable")
    .bind("EnterFrame", this.enterFrameHandler);
  }

  ,enterFrameHandler: function(frame){
  	if(frame.frame % this.firerate == 0 && this.hit("EnemyCover") == false){
  		this.shoot();
      this.moving = false;
      this.timeout(function(){
        this.moving = true;
      }, 500);
    }

    if(this.moving == true){
      this.trigger("Moved", {x:this.x += this.direction*5, y:this.y});
      this.x += this.direction * 2;
    }

  }

  ,shoot: function(e){
  	var player = Crafty(Crafty("player1")[0]);

    if(player[0] != 0){
     Crafty.e("2D, Canvas, Color, Bullet")
     .color("red")
     .attr({
      w: 16,
      h: 16,
      x: this.centerX(),
      y: this.centerY(),
      targetx: player.centerX(),
      targety: player.centerY()
    });
   }

  }
});