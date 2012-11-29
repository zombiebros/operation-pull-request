Crafty.c("Player", {
    lives: 3
    ,grenades: 3
    ,maxgrenades: 999
	
	,init: function(){
    	this.requires("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls, SpriteAnimation");
    	this.bind("Dead", this.dieHandler2);
    }

    ,dieHandler2: function(){
        this.lives -= 1;

        if(this.lives <= 0){
            if(Crafty.gameover != true){
              Crafty.gameover = true;
              Crafty.trigger("GAMEOVER");
          }
        }
    }

});