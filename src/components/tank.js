Crafty.c("Tank", {
  life: 20
  ,direction: 1
  ,killcount : 2
  ,speed: 1

  ,init: function(){
    this.requires("2D, Canvas, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable");

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 50
      ,w: 100
    })
    .collision([0,0],[100,0],[100,50]);

    this.requires("Enemy");
  }
  
});

