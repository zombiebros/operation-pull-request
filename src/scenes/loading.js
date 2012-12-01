//the loading screen that will display while our assets load
Crafty.scene("loading", function() {

		var start = Crafty.e("2D, DOM, Text, Button")
			.text("Pull Request Noun: <br />(1) An act of submitting new code for merge in a git repository \n\
			 <br /> <br /> (2) A covert United States military action that took place Oct 1983, soley lead by Cpt Jackman S Branches.\
			 Against a undisclosed foreign nation experimenting with illegal military cloning applications")
			.css({"font-size": "25px", "font-family": "Arial"})
			.attr({x: 40, y: 40, h: Crafty.viewport.height-100, w: Crafty.viewport.width-100})
			.textColor("#FFFFFF");

			var progressBar = Crafty.e("UI,Progressbar").attr({
				x: 0,
				y: 0,
				w: Crafty.viewport.width,
				h: 20,
				current_progress: 0
			})
			.trigger("Redraw");

			var enemyBarLabel = Crafty.e("2D, DOM, Text").attr({
				x: 400,
				y: -3,
				w: 300
			}).text("Loading...")
			.css({"font-size": "20px", "font-family": "Arial"})
			//.textFont({size: "10px", family: "Arial"})

  Crafty.load([
		"resources/images/crossairs.png",
		"resources/images/character.png",
		"resources/images/wall.png",
		"resources/images/MGsoldier-sprites.png",
		"resources/images/RLsoldier-sprites.png",
		"resources/images/building.png",
		"resources/images/title.png",
		"resources/images/field.png",
		"resources/images/explosion.png",
		"resources/images/explosion2.png",
		"resources/images/bigexplosion.png",
		"resources/images/grenade.png",
		"resources/images/bullet.png",
		"resources/images/heavybullet.png",
		"resources/images/muzzelflash.png"
		], function() {
			window.setTimeout(function(){
		     Crafty.scene("title"); //when everything is loaded, run the main scene
		   }, 3000);
	}, function(e){
		progressBar.updateCount(e.percent);
	});

  Crafty.audio.add({
		shoot: [
		"resources/sounds/cg1.wav",
		"resources/sounds/cg1.mp3",
		"resources/sounds/cg1.ogg"
		],
		mg: [
		"resources/sounds/Machine Gun.wav",
		"resources/sounds/Machine Gun.mp3",
		"resources/sounds/Machine Gun.ogg"
		],
		pain: [
		"resources/sounds/pain.wav",
		"resources/sounds/pain.mp3",
		"resources/sounds/pain.ogg"
		],
		grenade: [
		"resources/sounds/grenade.wav",
		"resources/sounds/grenade.mp3",
		"resources/sounds/grenade.ogg"
		],
		crumbling: [
		"resources/sounds/crumbling.wav",
		"resources/sounds/crumbling.mp3",
		"resources/sounds/crumbling.ogg"
		],
		title: [
		"resources/sounds/titlesong.mp3",
		"resources/sounds/titlesong.wav",
		"resources/sounds/titlesong.ogg"
		]
	});

});
