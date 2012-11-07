Crafty.c("PlayerCover", {
	init: function(){    
    	this.requires("Cover,Collision")
    	.onHit("Bullet", this.bulletHit);
    }


    ,bulletHit: function(bullet){
    	this.damage();
    }


});