Crafty.c("Boss", {
  life: 400
  ,direction: 1 
  ,killcount : 1
  ,speed: 2

  ,init: function(){
    this.requires("2D, Canvas, SpriteAnimation, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable")

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 308
      ,w: 400
      ,y: 150
    })
    .collision([0,0],[400,0],[400,308],[0,308])
    .color("transparent")

    this.bulletType = this.bulletType + ", BigBullet";
    this.requires("Enemy");
    this.bind("Shoot", this.shootHandler);
    this.bind("Moved", this.movingAnimation);
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

