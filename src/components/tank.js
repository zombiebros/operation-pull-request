Crafty.c("Tank", {
  life: 35
  ,direction: 1
  ,killcount : 2
  ,speed: 1

  ,init: function(){
    this.requires("2D, Canvas, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable, SpriteAnimation");

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 72
      ,w: 332
    })
    .collision([0,0],[332,0],[332,72],[72,72])
    .color("transparent")

    this.requires("Enemy");
    this.fireRate = 80;
    this.bulletType = this.bulletType + ", BigBullet";
    this.bind("Shoot", this.shootHandler);
    this.bind("Moved", this.movingAnimation);
    // this.bind("Moved", function(previous){
    //   if(this.enteredviewport == true && (this.x + this.w) > Crafty.viewport.width || (this.x-this.w) < 0){
    //     this.destroy(); //destroy tanks once they've moved off screen
    //   }
    // })
  }

  ,shootHandler: function(){
    Crafty.audio.play('tank',1);
  }

  ,movingAnimation: function(movedata){
    if(this.direction == 1){
      this.requires('tankright');
      this.animate('MovingRight',[[0,2],[0,3]]);
      this.animate('MovingRight', 25,-1);
    }else{
      this.requires('tankleft');
      this.animate('MovingLeft',[[0,0],[0,1]]);
      this.animate('MovingLeft',25,-1);
    }
  }
  
});

