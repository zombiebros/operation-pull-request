Crafty.c("Solid",{
  init: function() {
    this.requires("Collision")
    .onHit("Solid", this.stopSlide)
    .onHit("DownStairs",function(obj) {
      MapLoader.nextLevel();
    });
  }

  ,stopSlide: function(from){

    if(this.has("Slide")){
      this.attr({x: from.x, y:from.y});
      this.cancelSlide();
    }
  }
});
