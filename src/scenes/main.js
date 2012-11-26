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
			if((frame.frame % this.enemyspawnrate == 0 &&
			 (Crafty("Enemy").length < this.maxenemies) || Crafty("Enemy").length <= 0) &&
			Crafty.bosstime != true){
				//this.spawnNewEnemy();
			}
		}

		,spawnNewEnemy: function(){
			if(Crafty.math.randomInt(0, this.chancetospawntank) == this.chancetospawntank){
				Crafty.e("Tank").color("Green");
		    }else{
		    	Crafty.e("Soldier").color("Green");
		    }
		}

		,spawnBoss: function(){
			if(Crafty.bosstime == true){ return; }
			Crafty.bosstime = true;

			Crafty.e("Soldier, Boss")
			.attr({
				h:300,
				w: 150,
				life: 400
			})
			.color("Black");

			Crafty
		}

		,buildUI: function(){

			var enemyBarLabel = Crafty.e("2D, DOM, Text").attr({
				x: 20,
				y: Crafty.viewport.height - 45				
			}).text("Enemy Health")

			var enemyBar = Crafty.e("UI,Progressbar").attr({
				x: 100,
				y: Crafty.viewport.height - 50, 
				w: 200,
				h: 50,
				current_progress: 1
			})
			.trigger("Redraw")
			.bind("Empty", function(){				
				Crafty.trigger("SPAWNBOSS");
			});

			var doodsLabel = Crafty.e("2D, DOM, Text").attr({
				x: enemyBar.w+120,
				y: Crafty.viewport.height - 40,
			}).text("Lives")

		}

		,init: function(){
			Crafty.gameover = false;
			if(Crafty.isPaused()){Crafty.pause();}

			Crafty.background("#444");

			Crafty.bind("EnterFrame", $.proxy(this.enterFrameHandler, this));

			Crafty.bind("GAMEOVER", $.proxy(this.gameoverHandler, this));
			Crafty.bind("SPAWNBOSS", $.proxy(this.spawnBoss, this));



			this.buildUI();

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
