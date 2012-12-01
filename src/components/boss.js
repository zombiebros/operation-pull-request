Crafty.c("Boss", {
  life: 400
  ,direction: 1 
  ,killcount : 1
  ,speed: 2

  ,init: function(){
    this.requires("2D, Canvas, SpriteAnimation, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable, WiredHitBox")

    this.attr({
      h: 200
      ,w: 200
      ,y: 20
    })
    .collision([0,0],[400,0],[400,308],[0,308])
    .color("transparent")

    this.bulletType = this.bulletType + ", BigBullet";
    this.requires("Enemy");
    this.fireRate = 25;
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

