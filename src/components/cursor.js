Crafty.c("Cursor", {
  init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
  },

  position: function(e){
      console.log("mousan", e.x, e.y);
      this.attr({x:e.x - 395,y:e.y - 30});
  }
});
