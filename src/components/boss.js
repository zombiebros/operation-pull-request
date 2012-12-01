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
    .collision([0,0],[400,0],[400,308],[0,308])
    .color("transparent")

    this.bulletType = this.bulletType + ", BigBullet";
    this.requires("Enemy, boss1");
    this.animate('Movingleft',0,0,0);
    this.animate('Movingright',1,0,1);
    this.bind("Shoot", this.shootHandler);
    this.bind("Moved", this.movingAnimation);
  }

  ,shootHandler: function(){
    Crafty.audio.play('shoot',1);
  }

  ,movingAnimation: function(movedata){
    if(this.direction == 1){
      this.animate('Movingright',25,0);
  }else{
      this.animate('Movingleft',25,0);
      }
  }

});

