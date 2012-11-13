Crafty.c("Tank", {
  life: 20
  ,direction: 1
  ,startingx: Crafty.math.randomElementOfArray([0+50, 700-50])
  ,killcount : 2
  ,moving: true

  ,init: function(){
    this.requires("2D, Canvas, Color, Enemy, Collision, ViewportConstrain, MoveByCenter, Destroyable, Horizonable")
    .bind("EnterFrame", this.enterFrameHandler);


    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 50
      ,w: 100
    })
    .collision([0,0],[100,0],[100,50]);

    this.x = Crafty.math.randomElementOfArray([0+50, Crafty.viewport.width-100]);
    this.addComponent("Horizonable");
  }

  ,enterFrameHandler: function(frame){
  	if(Crafty.math.randomInt(0, 1000) == 1000 && this.hit("EnemyCover") == false){
  		this.shoot();
      this.moving = false;
      this.timeout(function(){
        this.moving = true;
      }, 500);
    }

    if(this.moving == true){
      this.trigger("Moved", {x:this.x += this.direction*2, y:this.y});
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

