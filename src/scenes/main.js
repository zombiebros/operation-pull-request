Crafty.scene("main",(function() { 
//Crafty.scene only takes a function parameter. I've wrapped an object for our scene in a closure.
//This gives us more state to work with. Returns an init function at the bottom.

	var scene = {
		level: 1
		,enemyspawnrate: 200
		,maxenemies: 5

		,gameoverHandler: function(){
			console.log("GAME OVER HANDLER");
			Crafty.pause();
			Crafty.audio.stop();
			Crafty.scene("main");
		}

		,enterFrameHandler: function(frame){
			if(frame.frame % this.enemyspawnrate == 0){
				console.log("spawning new enemy");
				this.spawnNewEnemy();
			}
		}

		,spawnNewEnemy: function(){
			if(Crafty("Enemy").length < this.maxenemies){
				var enemy = Crafty.e("Soldier")
				.color("Green")
				.attr({
					w:50,
					h:100,
					y: Crafty.math.randomInt(0, 200),
				});
			}
		}

		,init: function(){
			if(Crafty.isPaused()){Crafty.pause();}

			Crafty.background("#444");
			Crafty.bind("GAMEOVER", $.proxy(this.gameoverHandler, this));
			Crafty.bind("EnterFrame", $.proxy(this.enterFrameHandler, this));

			var player = Crafty.e("Player")
			.attr({
				h:200,
				w:100,
				x:Crafty.viewport.width/2-50,
				y:32*12.5,
				z: 2
			});

			var enemy = Crafty.e("Soldier")
			.color("Green")
			.attr({
				w:50,
				h:100,
				y: 150
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

			var playerCover = Crafty.e("Color, PlayerCover")
			.color("pink")
			.attr({
				h: 100,
				w: 200,
				y: player.y-player.h/2
			});

			var playerCover2 = Crafty.e("Color, PlayerCover")
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
				h:50,
				z: 900
			});

		}
	};

	return $.proxy(scene.init, scene); //Pass our scene.init function to crafty.scene
})());
