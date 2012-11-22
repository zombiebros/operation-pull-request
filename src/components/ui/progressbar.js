Crafty.c("Progressbar", {
	current_progress: 0
	,total_progress: 100
	,border: 1
	,h: 50
	,w: 200
	,label: "Progress:"

	,init: function(){
		this.requires("2D, Canvas, Color");
		this.x = 0;
		this.y = 0;
		this.color("Black");
		this.z = 850;

		console.log(this.x, this.y, this.w, this.h);

		this.inner = Crafty.e("2D, Canvas, Color, Inner")
		.attr({
			x: this.x+2
			,y: this.y-2
			,w: this.w - 4
			,h: this.h - 4
			,z: 900
		}).color("Red");

		this.bind("Redraw", this.redrawInner);
		this.bind('updateCount', this.updateCount);
	}

	,redrawInner: function(){
		this.inner.w = (this.current_progress/this.total_progress*this.w) - this.border*2;
	}

	,updateCount: function(value){
		this.current_progress += value;		

		switch (this.current_progress){
			case 0:
			this.trigger("Empty");
			case 1:
			this.trigger("Full");
			default:
			this.trigger("Redraw");
		}
	}

});