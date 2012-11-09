Crafty.c("Soldier", {
  life: 4
  ,direction: 1

  ,init: function(){    
    this.requires("Collision")
    .bind("EnterFrame", this.enterFrameHandler);
  }


  ,enterFrameHandler: function(){
  	this.trigger("Moved", {x:this.x += this.direction*5, y:this.y});
  	this.x += this.direction * 2;

  	if(Crafty.math.randomInt(0, 25) == 25 && this.hit("EnemyCover") == false){
  		this.shoot();  	
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