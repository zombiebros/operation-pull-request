Crafty.c("Cursor", {
  init: function(){
    Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this.position);
    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", this.shoot);
    Crafty.addEvent(this, Crafty.stage.elem, "mouseup", this.stopshoot);
    this.bind("EnterFrame", this.enterFrame);
  }

  ,position: function(e){
      this.attr({x:e.layerX-this.w/2,y:e.layerY-this.h/2});
  }

  ,shoot: function(e){
  	 this.shooting = true;
  }

  ,stopshooting: function(e){
  	this.shooting = false;
  }

  ,enterFrame: function(e){
  	if(this.shooting == true){
  		this.animate('Shooting',2,0,1)
  		.animate('Shooting', 15, -1);
    }else{
    	this.animate('Shooting', 0, 0, 0);
    }
  }

});
