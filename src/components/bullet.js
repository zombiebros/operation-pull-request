Crafty.c("Bullet",{

  init: function() {    
	this.bind("EnterFrame", this.EnterFrame);
	this.requires("MoveByCenter");

	this.requires("Collision")
    .origin("center")
    .onHit("Destroyable", this.hitDestroyableHandler);
  }

  ,hitDestroyableHandler: function(destroyable){
    var destroyable = destroyable[0].obj
    //only damage players
    if(destroyable.__c["player1"] || destroyable.__c["PlayerCover"]){
      this.destroy();
      destroyable.trigger("Damage");
    }
  }

  ,EnterFrame: function(e){  	
  	originVector = new Crafty.math.Vector2D(this.centerX(), this.centerY());
  	targetVector = new Crafty.math.Vector2D(this.targetx, this.targety);

  	this.direction = targetVector.subtract(originVector);
  	if(!this.direction.isZero()){
  		this.direction = this.direction.normalize();
  	}
  	
  	var new_coords = {
  		x: this.x + this.direction.x * 4/*speed*/,
  		y: this.y + this.direction.y * 4/*speed*/
  	};

  	this.moveByCenter(new_coords);

  	//console.log(this.targety, this.y);

    if(this.x > Crafty.viewport.width || this.x < 0 || this.y > Crafty.viewport.height || this.y < 0  || this.y >= this.targety-20) {
      this.destroy();
    }
  }
});
