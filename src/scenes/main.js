Crafty.scene("main",(function() { 
	//Crafty.scene only takes a function parameter. I've wrapped an object for our scene in a closure.
	//This gives us more state to work with. Returns an init function at the bottom.

	Crafty.viewport.horizonx = Crafty.viewport.height / 4;


	var scene = {
		level: 1
		,enemyspawnrate: 200
		,chancetospawntank: 2
		,maxenemies: 5		

		,gameoverHandler: function(){
			console.log("GAME OVER HANDLER");
			Crafty.pause();
			Crafty.audio.stop();
			Crafty.scene("main");
		}

		,enterFrameHandler: function(frame){
			if((frame.frame % this.enemyspawnrate == 0 && Crafty("Enemy").length < this.maxenemies) || Crafty("Enemy").length <= 0){
				this.spawnNewEnemy();
			}
		}

		,spawnNewEnemy: function(){
			if(Crafty.math.randomInt(0, this.chancetospawntank) == this.chancetospawntank){
				console.log("spawning tank");
				Crafty.e("Tank").color("Green");
		    }else{
		    	Crafty.e("Soldier").color("Green");
		    }
		}

		,spawnBoss: function(){
			Crafty.e("Soldier Boss")
			.attr({
				h:300,
				w: 150
			})
			.color("Black");
		}

		,init: function(){
			Crafty.gameover = false;
			if(Crafty.isPaused()){Crafty.pause();}

			Crafty.background("#444");
			Crafty.bind("GAMEOVER", $.proxy(this.gameoverHandler, this));
			Crafty.bind("EnterFrame", $.proxy(this.enterFrameHandler, this));
			Crafty.bind("SPAWNBOSS", $.proxy(this.spawnBoss, this));

			var enemyBar = Crafty.e("Progressbar").attr({x: 0, y: 0});

			var player = Crafty.e("Player, Collision")
			.attr({
				x:Crafty.viewport.width/2-50,
				y: Crafty.viewport.height - 200,
				z: 2
			})
			.collision([50,0], [150,0], [116,200]);

			var cover = Crafty.e("2D, Canvas, Color, Cover, EnemyCover, Destroyable")
			.color("purple")
			.attr({
				h: 100,
				w: 200,
				y: 150,
				x: 300,
				life: 10
			}).addComponent("Horizonable");

			var playerCover = Crafty.e("Color, Cover, PlayerCover")
			.color("pink")
			.attr({
				h: player.h,
				w: 200,
				y: player.y-player.h/4
			});

			var playerCover2 = Crafty.e("Color, Cover, PlayerCover")
			.color("pink")
			.attr({
				h: player.h,
				w: 200,
				y: player.y-player.h/4,
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
