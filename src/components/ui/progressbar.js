Crafty.c("Progressbar", {
	current_progress: 0
	,total_progress: 100
	,padding: 0
	,h: 25
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
			x: this.x+ (this.padding/2)
			,y: this.y+ (this.padding/2)
			,w: this.calculateInnerWidth()
			,h: this.h - this.padding
			,z: 900
		}).color("Red");

		this.attach(this.inner);
		this.bind("Redraw", this.redrawInner);
		this.bind('updateCount', this.updateCount);

		this.trigger("Redraw");
	}

	,bindToDestroyable: function(destroyable){
		var _self = this;
		this.current_progress = destroyable.life;
		_self.redrawInner();
		
		destroyable.bind("Damage", function(){
			if(this.has("Boss")){
				_self.current_progress = this.life / 3;
      }else{
      	_self.current_progress = this.life;
      }
      _self.redrawInner();
		});

		return this;
	}

	,calculateInnerWidth: function(){
		return (this.current_progress/this.total_progress*this.w) - (this.padding/2);
	}

	,redrawInner: function(){
		this.inner.w = this.calculateInnerWidth();
	}

	,updateCount: function(value){
		this.current_progress += value;		
		this.trigger("Redraw");


		if(this.current_progress <= 0){
			this.trigger("Empty");
		}

		if(this.current_progress >= this.total_progress){
			this.trigger("Full");
		}

	}

});