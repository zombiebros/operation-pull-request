Crafty.c("Enemy", {
    moving: true
    ,enteredviewport: false
	
	,init: function(){
      this.bind("EnterFrame", this.enterFrameHandler);

      //create the entity off screen and let it run in using this.enteredviewport as a flag to start limiting its bounds.
      this.enteredviewport = false;
      this.requires("Horizonable"); //add Horizonable first because it adjusts the entites height and width which is need for the x
      this.x = Crafty.math.randomElementOfArray([0-this.w, Crafty.viewport.width+this.w]);
      this.direction = (this.x < Crafty.viewport.width / 2) ? 1 : -1;
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