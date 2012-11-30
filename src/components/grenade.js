Crafty.c("Grenade", {
	explosionsize: 100

	,init: function(){
		this.requires("Bullet");
		this.attr({
			z: 9000
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
						target.obj.trigger("Damage", 5)
					}
				});
			};
		}catch(ex){
		//
	  }
	}

	,whenToExplode: function(){
		if(this.exploding == true && this.w < this.explosionsize && this.h < this.explosionsize){
			this.w += 1;
			this.h += 1;
<<<<<<< HEAD
			this.y -= 1;
			this.requires("explosion2, SpriteAnimation");
			this.animate('Explosion2',0,0,17);
			this.animate('Explosion2',25,0);
=======
			this.x = this.x - (this.explosionsize/2);
			this.y = this.y - (this.explosionsize/2);
			this.requires("explosion, SpriteAnimation");
			this.color("transparent");
			this.animate('Explosion',[[0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11]]);
			this.animate('Explosion',25,0);
>>>>>>> 2fcf50466f18e00b59c21115fc9d66fa2a353aca
		}else if(this.exploding == true && this.w == this.explosionsize && this.h == this.explosionsize){
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