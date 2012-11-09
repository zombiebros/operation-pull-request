Crafty.c("Horizonable", {

	init: function(){
		this.bind("EnterFrame", this.enterFrameHandler);
	}

	,enterFrameHandler: function(frame){
		this.h = this.h - (this.y / 10);
		this.w = this.w - (this.y / 10);
	}

});