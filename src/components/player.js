Crafty.c("Player", {
	
	init: function(){
    	this.requires("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls");
    	this.bind("Die", this.dieHandler);
    }

    ,dieHandler: function(){
    	while(this.h >0){
    		this.h -= 1;
    	}

    	this.destroy();
    	Crafty.trigger("GAMEOVER");
    }

});