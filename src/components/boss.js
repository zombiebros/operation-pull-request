Crafty.c("Boss", {
  life: 400
  ,direction: 1 
  ,killcount : 1
  ,speed: 2

  ,init: function(){
    this.requires("2D, Canvas, SpriteAnimation, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable")

    this.attr({
      h: 308
      ,w: 400
      ,y: 20
    })
    .collision([30,20],[60,20],[60,100],[30,100])
    .color("transparent")

    this.bulletType = this.bulletType + ", BigBullet";
    this.requires("Enemy");
    this.bind("Shoot", this.shootHandler);
    this.bind("EnterFrame", this.movingAnimation);
  }

  ,shootHandler: function(){
    Crafty.audio.play('shoot',1);
  }

  ,movingAnimation: function(movedata){
    if(this.direction == 1){
      this.requires('boss1right');
    }else{
      this.requires('boss1left');
    }
  }

});

