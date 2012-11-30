Crafty.c("Powerupdropper", {
	types: ["Heal"]
	,dropChance: 5

	,init: function(){
		this.requires("MoveByCenter");
		this.bind("DieAnimation", this.dropPowerup);
	}

	,dropPowerup: function(){
		if(Crafty.math.randomInt(0, 100) > 10){

    	var powerUp = this.types[Crafty.math.randomInt(0, this.types.length-1)];

    	Crafty.e(powerUp).attr({
    		x:this.centerX(),
    		y:this.y
    	});

    }
  }

});