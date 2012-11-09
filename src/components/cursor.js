Crafty.c("Cursor", {
  init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
    Crafty.addEvent(this, Crafty.stage.elem, "mouseown", this.shoot);
    Crafty.addEvent(this, Crafty.stage.elem, "mouseup", this.stopshoot);
    this.bind("EnterFrame", this.enterFrame)
    .bind('MouseDown', this.mouseDownHandler)
    .bind('MouseUp', this.mouseUpHandler);
  }

  ,position: function(e){
    this.attr({x:e.layerX-this.w/2,y:e.layerY-this.h/2});
  }


  ,mouseDownHandler: function() {
    this.animate('Shooting',0,0,1)
    .animate('Shooting', 5 , -1);
    Crafty.audio.play('mg', -1);
  }

  ,mouseUpHandler: function() {
    if(this.isPlaying('Shooting')){
      this.reset();
      Crafty.audio.stop('mg');
    }
  }

});