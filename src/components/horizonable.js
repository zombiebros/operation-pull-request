//add this component after the entities height and width have been set

Crafty.c("Horizonable", {

	init: function(){
       this.attr({
       	z: (this.has("Cover")) ? this.y+10 : this.y
       	,h: this.h + (this.y) /10
       	,w: this.w + (this.y) /10
       });

	}

});