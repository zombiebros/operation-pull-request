Crafty.c("Progressbar", {
	current_progress: 0
	,total_progress: 100
	,border: 1
	,height: 50
	,w: 200
	,label: "Progress:"

	,init: function(){
		this.requires("2D, Canvas");
		this.x = 0;
		this.y = 0;

		this.inner = Crafty.e("2D, Canvas")
		.attr({
			x: this.x+1
			,y: this.y-1
			h: this.h - 2
		});

		this.bind("Redraw", this.redrawInner);
	}

	,redrawInner: function(){
		this.inner.w = ((this.current_progress/total_progress*this.w) - border*2
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