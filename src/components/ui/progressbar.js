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

		this.inner = Crafty.e("2D, Canvas, Color, Inner")
		.attr({
			x: this.x+1
			,y: this.y-1
			,w: this.calculateInnerWidth()
			,h: this.h - 4
			,z: 900
		}).color("Red");

		this.attach(this.inner);
		this.bind("Redraw", this.redrawInner);
		this.bind('updateCount', this.updateCount);

		this.trigger("Redraw");
	}

	,calculateInnerWidth: function(){
		return (this.current_progress/this.total_progress*this.w) - this.border*2;
	}

	,redrawInner: function(){
		this.inner.w = this.calculateInnerWidth();
	}

	,updateCount: function(value){
		this.current_progress += value;		
		this.trigger("Redraw");


		if(this.current_progress <= 0){
			console.log("OMG EMPTY");
			this.trigger("Empty");
		}

		if(this.current_progress >= this.total_progress){
			this.trigger("Full");
		}

	}

});