Crafty.c("Grenade", {
	explosionsize: 100

	,init: function(){
		this.requires("Bullet, explosion");
		this.attr({
			z: 9000
			,w: 16
			,h: 16
		});
		this.bind("EnterFrame", this.whenToExplode)
		.color("red")
		.onHit("Destroyable", this.explosionDestroy);

	}

	,explosionDestroy: function(destroyable){
		try{
			if (this.exploding == true) {
				_.each(destroyable, function(target){
					if(!target.obj.has("Player") && !target.obj.has("PlayerCover")){
						target.obj.trigger("Damage", 1)
					}
				});
			};
		}catch(ex){
		//
	  }
	}

	,whenToExplode: function(){
		if(this.exploding == true && this.w < this.explosionsize && this.h < this.explosionsize){
			this.w = this.explosionsize;
			this.h = this.explosionsize;
			this.x = this.x - (this.explosionsize/2);
			this.y = this.y - (this.explosionsize/2);
			this.color("transparent");
    	Crafty.audio.play('grenade',1);
    	this.animate('Explosion',0,0,12);
			this.animate('Explosion',25,0);
		}else if(this.exploding == true && this.w == this.explosionsize && this.h == this.explosionsize && !this.isPlaying("Explosion")){
			this.exploding = false;
			this.destroy();
		}

    if(this.y <= this.targety ||
    	((this.x <= this.targetx+2 && this.x >= this.targetx-2 ) && 
    	(this.y >= this.targety+2 && this.y >= this.targety-2))){
      this.dying = true;
    	this.exploding = true;
    }
	}

});