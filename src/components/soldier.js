Crafty.c("Soldier", {
  life: 5
  ,direction: 1 
  ,killcount : 1
  ,speed: 2

  ,init: function(){
    this.requires("2D, Canvas, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable")


    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 100
      ,w: 50
    })
    .collision([0,0],[50,0],[50,100])

    this.requires("Enemy");
    this.bind("Shoot", this.shootHandler);
  }

  ,shootHandler: function(){
    //Crafty.audio.play('shoot',1);
  }

});

