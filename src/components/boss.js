Crafty.c("Boss", {
  life: 300
  ,direction: 1 
  ,killcount : 1
  ,speed: 2

  ,init: function(){
    this.requires("2D, Canvas, SpriteAnimation, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable")

    this.attr({
      h: 154
      ,w: 200
      ,y: 80
      ,z: 9999
    })
    .collision([0,0],[200,0],[200,154],[0,154])
    .color("transparent")

    this.bulletType = this.bulletType + ", BigBullet";
    this.requires("Enemy, boss1");
    this.animate('Movingleft',0,0,0);
    this.animate('Movingright',1,0,1);
    this.fireRate = 20;
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

