Crafty.c("ViewportConstrain", {
	init: function(){
		this.bind("Moved", this.movedHandler);
	}

	,movedHandler: function(from) {
		console.log("moved", this, from);
		if(this.x+this.w > Crafty.viewport.width || this.x+this.w < this.w){
			this.attr({x:from.x,y:from.y});
		}
		console.log("end of move handler");
	}
});