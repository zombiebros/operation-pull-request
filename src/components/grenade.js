Crafty.c("Grenade", {
	explosionsize: 100

	,init: function(){
		this.requires("Bullet");
		this.attr({z: 9000});
		this.bind("EnterFrame", this.whenToExplode)
		.onHit("Destroyable", this.explosionDestroy);
	}

	,explosionDestroy: function(destroyable){
		try{
			if (this.exploding == true) {
				_.each(destroyable, function(target){
					target.obj.trigger("Damage", 5);
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
		}else if(this.exploding == true && this.w == this.explosionsize && this.h == this.explosionsize){
			this.exploding = false;
			this.destroy();
		}

    if(this.y <= this.targety ||
    	((this.x <= this.targetx+2 && this.x >= this.targetx-2 ) && 
    	(this.y >= this.targety+2 && this.y >= this.targety-2))){
    	console.log("exploding");
      this.dying = true;
    	this.exploding = true;
    }
	}

});