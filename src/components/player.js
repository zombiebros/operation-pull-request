Crafty.c("Player", {
	
	init: function(){
    	this.requires("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls, SpriteAnimation");
    	this.bind("Die", this.dieHandler2);
    }

    ,dieHandler2: function(){
    	console.log("player die");

        if(Crafty.gameover != true){
          Crafty.gameover = true;
    	  Crafty.trigger("GAMEOVER");
        }
    }

});