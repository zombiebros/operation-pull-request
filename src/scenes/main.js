Crafty.scene("main",function() {
	if(Crafty.isPaused()){Crafty.pause();}

	Crafty.background("#444");
  
	var player = Crafty.e("2D, Canvas, player1, ViewportConstrain, MoveByCenter, Destroyable, PlayerControls")
	.attr({
		h:200,
		w:100,
		x:Crafty.viewport.width/2-50,
		y:32*12.5,
		z: 2
	});

	var enemy = Crafty.e("2D, Canvas, Color, Enemy, Soldier, ViewportConstrain, MoveByCenter, Destroyable")
	.color("Green")
	.attr({
		w:50,
		h:100,
		y: 150,
	});

	var cover = Crafty.e("2D, Canvas, Color, EnemyCover, Destroyable")
	.color("purple")
	.attr({
	   h: 100,
	   w: 200,
	   y: 150,
	   x: 300,
	   life: 10	
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
		h:50
	});

});
