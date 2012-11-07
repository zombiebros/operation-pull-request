Crafty.c("Soldier", {

  init: function(){    
    this.requires("Twoway").twoway(10);
    this.bind("EnterFrame", this.EnterFrame);
  }

  ,EnterFrame: function(){
  	this.move('e', 10);
  	//this.shoot();  	
  }

  ,shoot: function(e){
  	Crafty.e("2D, Canvas, Color, Bullet")
  	.color("red")
  	.attr({
  		w: 16,
  		h: 16,
  		x: this.x,
  		y: this.y,
  		targetx: Crafty(Crafty("player1")[0]).x,
  		targety: Crafty(Crafty("player1")[0]).y
  	});

  }
});