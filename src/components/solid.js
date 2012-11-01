Crafty.c("Solid",{
  init: function() {
    this.requires("Collision").onHit("Wall",function(obj) {
      console.log("solid touch wall!");
      this.cancelSlide();
    });
  }
});
