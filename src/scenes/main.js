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
				this.spawnNewEnemy();
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

			var boss = Crafty.e("Soldier, Boss")
			.attr({
				y: 200,
				h:300,
				w: 150,
				life: 400
			})
			.color("Black");
			boss.bulletType = boss.bulletType + ",BigBullet";
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
				current_progress: 100
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
			Crafty.audio.stop('title');
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

			var cover = Crafty.e("building1, 2D, Canvas, Cover, EnemyCover, Spawner, Destroyable, SpriteAnimation")
			.attr({
				h: 187,
				w: 286,
				y: 80,
				x: 200,
				life: 10
			}).addComponent("Horizonable").bind("Dead", function(){
				console.log("destroying cover entity", this);
				this.destroy();
				console.log(Crafty("Spawner").length);
			})
			.bind("Damage",function(){
				if(this.life == 9){
					this.animate('Building1Damage',0,1,0);
					this.animate('Building1Damage',15,0);
				}
				else if(this.life <=8 && this.life >6){
					this.animate('Building2Damage',0,2,0);
					this.animate('Building2Damage',15,0);
				}
				else if(this.life <=6 && this.life >4){
					this.animate('Building3Damage',0,3,0);
					this.animate('Building3Damage',15,0);
				}
				else if(this.life <=4 && this.life >1){
					this.animate('Building3Damage',0,4,0);
					this.animate('Building3Damage',15,0);
				}
				else if(this.life == 1){
					this.animate('Building3Damage',0,5,0);
					this.animate('Building3Damage',15,0);
				}
			});

			var playerCover = Crafty.e("playerwall, Cover, PlayerCover, SpriteAnimation")
			.attr({
				h: 170,
				w: 340,
				y: player.y-player.h/8,
				x: 0
			})
			.bind("Damage",function(){
				if(this.life <=8 && this.life >6){
					this.animate('Wall1Damage',0,1,0);
					this.animate('Wall1Damage',15,0);
				}
				else if(this.life <=6 && this.life >3){
					this.animate('Wall2Damage',0,2,0);
					this.animate('Wall2Damage',15,0);
				}
				else if(this.life <=3 && this.life >0){
					this.animate('Wall3Damage',0,3,0);
					this.animate('Wall3Damage',15,0);
				}
			});

			var playerCover2 = Crafty.e("playerwall, Cover, PlayerCover, SpriteAnimation")
			.attr({
				h: 170,
				w: 340,
				y: player.y-player.h/8,
				x: Crafty.viewport.width-343
			})
			.bind("Damage",function(){
				if(this.life <=8 && this.life >6){
					this.animate('Wall1Damage',0,1,0);
					this.animate('Wall1Damage',15,0);
				}
				else if(this.life <=6 && this.life >3){
					this.animate('Wall2Damage',0,2,0);
					this.animate('Wall2Damage',15,0);
				}
				else if(this.life <=3 && this.life >0){
					this.animate('Wall3Damage',0,3,0);
					this.animate('Wall3Damage',15,0);
				}
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
