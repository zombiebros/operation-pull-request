Crafty.c("Solid",{
  init: function() {
    this.requires("Collision")
    .onHit("Solid", this.stopSlide)
    .onHit("Wall", this.stopSlide)
    .onHit("DownStairs",function(obj) {
      MapLoader.nextLevel();
    });
  }

  ,stopSlide: function(from){
    console.log("solid hit solid");
    this.attr({x: from.x, y:from.y});
    this.cancelSlide();
  }
});
