Crafty.c("ViewportConstrain", {
	init: function(){
		this.bind("Moved", this.movedHandler);
	}

	,movedHandler: function(from) {
		//most enemies will spawn off screen. we don't want them blocked by the bounds of the view port until fully on.
		//console.log("checking for spawn", this.enteredviewport, this.x);
		if(this.enteredviewport == false && this.x > 0+this.w && this.x < Crafty.viewport.width-this.w){
			this.enteredviewport = true;
		}

		if(this.enteredviewport == true && (this.x+this.w >= Crafty.viewport.width || this.x < 0)){
			this.attr({x:from.x,y:from.y});
			if(this.has("Soldier")){
				this.direction = this.direction * -1;
			}
		}
	}
});