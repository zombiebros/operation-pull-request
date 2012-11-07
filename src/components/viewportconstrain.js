Crafty.c("ViewportConstrain", {
	init: function(){
		this.bind("Moved", this.movedHandler);
	}

	,movedHandler: function(from) {
		console.log("wtf x", this.x);
		if(this.x+this.w >= Crafty.viewport.width || this.x < 0){
			console.log("out of bounds");
			this.attr({x:from.x,y:from.y});
			if(this.has("Soldier")){
				this.direction = this.direction * -1;
			}
		}
	}
});