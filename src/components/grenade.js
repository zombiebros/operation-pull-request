Crafty.c("Grenade", {
	explosionsize: 100

	,init: function(){
		this.requires("Bullet");
		this.attr({z: 9000});
		this.bind("EnterFrame", this.whenToExplode)
		.color("transparent")
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
			this.x -= 1;
			this.h += 1;
			this.y -= 1;
			this.requires("explosion, SpriteAnimation");
			this.animate('Explosion',[[0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11]]);
			this.animate('Explosion',25,0);
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