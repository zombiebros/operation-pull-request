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
  	
  	this.x += this.direction.x * 1;
  	this.y += this.direction.y * 1;
  }
});
