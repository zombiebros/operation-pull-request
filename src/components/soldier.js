Crafty.c("Soldier", {

  init: function(){    
    this.bind("EnterFrame", this.EnterFrame);
  }

  ,EnterFrame: function(){
  	//this.trigger("Moved", {x:this.x, y:this.y});
  	//this.x += 10;
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