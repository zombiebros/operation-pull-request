Crafty.c("Solid",{
  init: function() {
    this.requires("Collision").onHit("Wall",function(obj) {
      console.log("solid touch wall!");
      this.cancelSlide();
    });
    this.requires("Collision").onHit("Solid",function(from) {
			if(this.hit("Solid")) {
				console.log("solid hit solid");
				this.attr({x: from.x, y:from.y});
				this.cancelSlide();
		}
    });
  }
});
