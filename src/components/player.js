Crafty.c("Player", {
	
	init: function(){
    	this.requires("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls")
    	.bind("Die", this.dieHandler);
    }

    ,dieHandler: function(){
    	console.log("player die");
    	while(this.h >0){
    		this.h -= 1;
    	}

    	Crafty.trigger("GAMEOVER");
    	this.destroy();
    }

});