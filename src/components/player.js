Crafty.c("Player", {
    life: 100
    ,maxlife: 100
    ,grenades: 3
    ,maxgrenades: 5
	
	,init: function(){
     this.requires("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls, SpriteAnimation");

     this.bind("Damage",function(damage){
        if(damage > 0){
            Crafty.audio.play('pain',1);
        }
     });
     this.bind("Dead", this.dieHandler2);
     this.bind("RestoreHP", this.RestoreHPHandler);
     this.bind("Grenadecount", this.grenadeCount);
     this.enteredviewport = true;
    }

    ,grenadeCount: function(count){
        if(this.grenades < this.maxgrenades){
            this.grenades += count;
        }
        Crafty(Crafty("GrenadeCount")[0]).text("Grenades " + this.grenades);
    }

    ,RestoreHPHandler: function(healvalue){
        console.log("player get hp", healvalue);
        if(this.life < this.maxlife){

            this.life += healvalue;
        }
    }

    ,dieHandler2: function(){
        if(Crafty.gameover != true){
          Crafty.gameover = true;
          Crafty.trigger("GAMEOVER");
      }

    }

});