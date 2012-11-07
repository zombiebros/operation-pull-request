Crafty.c("Cursor", {
  init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
  },

  position: function(e){
      this.attr({x:e.layerX-this.w/2,y:e.layerY-this.h/2});
  }
});
