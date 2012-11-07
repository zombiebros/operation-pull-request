Crafty.c("Bullet",{

  init: function() {    
	this.bind("EnterFrame", this.EnterFrame);
	this.requires("MoveByCenter");

	//collisions
	this.requires("Collision")
    .onHit("PlayerCover", this.playerCoverHit)
    .onHit("player1", this.playerHit);
  }

  ,playerHit: function(player){

  }

  ,playerCoverHit: function(player_cover){
  	console.log("hit player cover", player_cover);
  	this.destroy();
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
