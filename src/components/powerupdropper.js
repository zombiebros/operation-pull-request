Crafty.c("Powerupdropper", {
	types: ["Heal","Grenades"]
	,dropChance: 5

	,init: function(){
		this.requires("MoveByCenter");
		this.bind("DieAnimation", this.dropPowerup);
	}

	,dropPowerup: function(){
		if(Crafty.math.randomInt(0, 10) > 5){

    	var powerUp = this.types[Crafty.math.randomInt(0, this.types.length-1)];

    	Crafty.e(powerUp).attr({
    		x:this.centerX(),
    		y:this.y
    	});

    }
  }

});