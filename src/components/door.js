Crafty.c("Door",{
  init: function() {
    this.requires("Collision").onHit("hero1",function(obj) {
      console.log("Door coolide");
    });
  }
});
