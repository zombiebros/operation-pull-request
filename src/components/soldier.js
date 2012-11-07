Crafty.c("Soldier", {

  init: function(){    
    this.bind("EnterFrame", this.EnterFrame);
    this.direction = 1;
    
    this.requires("Collision")
    .onhit("Cover", this.coverHit);
  }

  ,coverHit: function(cover){
  	this.iscovered = true;
  }

  ,EnterFrame: function(){
  	this.trigger("Moved", {x:this.x += this.direction*5, y:this.y});
  	this.x += this.direction * 2;
  	
  	if(Crafty.math.randomInt(0, 25) == 25 && this.iscoverd == false){
  		this.shoot();  	
    }
  }

  ,shoot: function(e){
  	var player = Crafty(Crafty("player1")[0]);
  	Crafty.e("2D, Canvas, Color, Bullet")
  	.color("red")
  	.attr({
  		w: 16,
  		h: 16,
  		x: this.centerX(),
  		y: this.centerY(),
  		targetx: player.centerX(),
  		targety: player.centerY()
  	});

  }
});