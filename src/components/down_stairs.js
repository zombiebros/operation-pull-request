Crafty.c("Down_Stairs",{
  init: function() {
    this.requires("Collision").onHit("hero1",function(obj) {
      MapLoader.nextLevel();
    });
  }
});
