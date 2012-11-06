Crafty.c("Bullet",{

  init: function() {    
	this.bind("EnterFrame", this.EnterFrame);
  }

  ,EnterFrame: function(e){  	
  	originVector = new Crafty.math.Vector2D(this.x, this.y);
  	targetVector = new Crafty.math.Vector2D(this.targetx, this.targety);

  	this.direction = targetVector.subtract(originVector);
  	if(!this.direction.isZero()){
  		this.direction = this.direction.normalize();
  	}
  	
  	this.x += this.direction.x * 4/*speed*/;
  	this.y += this.direction.y * 4/*speed*/;

    if(this.x > Crafty.viewport.width || this.x < 0 || this.y > Crafty.viewport.height || this.y < 0) {
      this.destroy();
    }
  }
});
