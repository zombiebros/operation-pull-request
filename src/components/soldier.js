Crafty.c("Soldier", {
  life: 5
  ,direction: 1 
  ,killcount : 1
  ,moving: true

  ,init: function(){
    this.requires("2D, Canvas, Color, Enemy, Collision, ViewportConstrain, MoveByCenter, Destroyable")
    .bind("EnterFrame", this.enterFrameHandler);

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-200)
      ,h: 100
      ,w: 50})
    .collision([0,0],[50,0],[50,100])

console.log("setting soldier x", this.x, this.startingx);
    this.x = Crafty.math.randomInt(0+50, Crafty.viewport.width-50);

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

