Crafty.c("ViewportConstrain", {
	init: function(){
		this.bind("Moved", this.movedHandler);
	}

	,movedHandler: function(from) {
		if(this.x+this.w >= Crafty.viewport.width || this.x < 0){
			this.attr({x:from.x,y:from.y});
			if(this.has("Soldier")){
				this.direction = this.direction * -1;
			}
		}
	}
});