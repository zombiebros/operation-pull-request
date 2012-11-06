Crafty.c("Bullet",{

  init: function() {
    this.bind("EnterFrame", this.EnterFrame);
    this.originVector = Crafty.math.Vector2d(this.x, this.y);
    this.targetVector = Crafty.math.Vector2d(this.targetx, this.targety);
    this.direction = targetVector.subtract(originVector);
    if(!this.direction.isZero()){
    	this.direction = this.movment.normalize();
	}	
  }

  ,EnterFrame: function(e){
  	console.log("shoot",this);
  }
});
