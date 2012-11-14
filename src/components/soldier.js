Crafty.c("Soldier", {
  life: 5
  ,direction: 1 
  ,killcount : 1
  ,moving: true
  ,speed: 2

  ,init: function(){
    this.spawned == false;
    this.requires("2D, Canvas, Color, Enemy, Collision, ViewportConstrain, MoveByCenter, Destroyable")
    .bind("EnterFrame", this.enterFrameHandler);

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 100
      ,w: 50
    })
    .collision([0,0],[50,0],[50,100])


    //create the entity off screen and let it run in using this.spawned as a flag to start limiting its bounds.
    this.spawned = false;
    this.addComponent("Horizonable"); //add Horizonable first because it adjusts the entites height and width which is need for the x
    this.x = Crafty.math.randomElementOfArray([0-this.w, Crafty.viewport.width+this.w]);
    
  }

  ,enterFrameHandler: function(frame){
  	if(Crafty.math.randomInt(0, 200) == 200 && this.hit("EnemyCover") == false){
  		this.shoot();
      this.moving = false;
      this.timeout(function(){
        this.moving = true;
      }, 500);
    }

    if(this.moving == true){
      this.trigger("Moved", {x:this.x += this.direction*this.speed, y:this.y});
      this.x += this.direction * this.speed;
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

