Crafty.c("Player", {
    life: 100
    ,maxlife: 100
    ,grenades: 3
    ,maxgrenades: 5
	
	,init: function(){
     this.requires("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls, SpriteAnimation");

     var muzzleflash = Crafty.e("2D, Canvas, muzzleflash, color, SpriteAnimation")
     .attr({
        x: this.centerX(),
        y: this.centerY(),
        w: 70,
        h: 80,
        z: 9000
     })


     this.bind("Damage",function(damage){
        if(damage > 0){
            Crafty.audio.play('pain',1);
        }
     });
     this.bind("Dead", this.dieHandler2);
     this.bind("RestoreHP", this.RestoreHPHandler);
    }

    ,RestoreHPHandler: function(healvalue){
        console.log("player get hp", healvalue);
        if(this.life < this.maxlife){

            this.life += healvalue;
        }
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