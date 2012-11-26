Crafty.c("Powerupdropper", {
	types: ["Heal"]
	,dropChance: 5

	,init: function(){
		this.bind("Dead", this.dropPowerup);
	}

	,dropPowerup: function(){
		if(Crafty.math.randomInt(0, 100) > 10){

    	var powerUp = this.types[Crafty.math.randomInt(0, this.types.length-1)];

    	Crafty.e(powerUp).attr({
    		x:this.x,
    		y:this.y
    	});
    }

});