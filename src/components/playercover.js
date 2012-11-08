Crafty.c("PlayerCover", {
	life: 10
	
	,init: function(){
    	this.requires("Destroyable,Collision")
    	.onHit("Bullet", this.bulletHit);

    	this.bind("Die", this.dieHandler); 
    }


    ,bulletHit: function(bullet){
    	this.trigger("Damage")
    }

    // ,damageHandler: function(){
    // 	console.log("PlayerCover damageHandler");
    // }

    ,dieHandler: function(){
    	console.log("PlayerCover die handler");
    	Crafty.pause();
    	while(this.h >0){
    		this.h -= 1;
    	}

    	this.destroy();
    	alert("GAME OVER FAGGOT");
    }


});