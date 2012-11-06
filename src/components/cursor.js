Crafty.c("Cursor", {
  init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
  },

  position: function(e){
  	  console.log("mousemove", e, e.clientX, e.clientY, e.layerX, e.layerY);
      this.attr({x:e.layerX-25,y:e.layerY-25});
  }
});
