Crafty.scene("main",function() {

	Crafty.background("#444");
  
	var player = Crafty.e("2D, Canvas, PlayerControls, player1, Color, ViewportConstrain, MoveByCenter")
	.color("blue")
	.attr({
		w:50,
		h:100,
		x:Crafty.viewport.width/2-25,
		y:32*15.6,
		z: 2
	});

	var enemy = Crafty.e("2D, Canvas, Color, Soldier, ViewportConstrain, MoveByCenter")
	.color("Green")
	.attr({
		w:50,
		h:100,
		y: 150,
	});

	var cover = Crafty.e("2D, Canvas, Color, Cover, EnemyCover")
	.color("purple")
	.attr({
	   h: 100,
	   w: 200,
	   y: 150,
	   x: 300	
	});

	var playerCover = Crafty.e("2D, Canvas, Color, PlayerCover")
	.color("pink")
	.attr({
	   h: 100,
	   w: 200,
	   y: player.y-player.h/2
	});

    var playerCover2 = Crafty.e("2D, Canvas, Color, PlayerCover")
	.color("pink")
	.attr({
	   h: 100,
	   w: 200,
	   y: player.y-player.h/2,
	   x: Crafty.viewport.width-200
	});

	var crossairs = Crafty.e("2D, SpriteAnimation, Canvas, crossairs1, Cursor, Mouse")
	.attr({
		w:50,
		h:50}
	)
	.bind('MouseDown', function() {
      this.animate('Shooting',0,0,3)
      .animate('Shooting', 25, -1);
	})
	.bind('MouseUp', function(){
			if(this.isPlaying('Shooting')){
				this.reset();
			}
	});

});
