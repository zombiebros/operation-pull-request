Crafty.c("Bullet",{

  init: function() {    
  	console.log(this.x, this.y, this.targetx, this.targety);
    this.originVector = Crafty.math.Vector2D(this.x, this.y);
    this.targetVector = Crafty.math.Vector2D(this.targetx, this.targety);

    console.log("vecotrs", this.originVector, this.targetVector);
    this.direction = this.targetVector.subtract(this.originVector);
    if(!this.direction.isZero()){
    	this.direction = this.movment.normalize();
	}	
	this.bind("EnterFrame", this.EnterFrame);
  }

  ,EnterFrame: function(e){
  	console.log("shoot",this);
  }
});
