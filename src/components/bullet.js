Crafty.c("Bullet",{

  init: function() {
    this.bind("EnterFrame", this.EnterFrame);
    this.target = Crafty.math.Vector2D(x, y);
  }

  ,EnterFrame: function(e){
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
});
