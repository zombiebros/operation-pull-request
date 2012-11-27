Crafty.c("Tank", {
  life: 20
  ,direction: 1
  ,killcount : 2
  ,speed: 1

  ,init: function(){
    this.requires("2D, Canvas, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable");

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 100
      ,w: 150
    })
    .collision([0,0],[150,0],[150,100]);

    this.requires("Enemy");
    this.bulletType = this.bulletType + ", BigBullet";
  }
  
});

