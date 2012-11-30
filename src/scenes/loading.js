//the loading screen that will display while our assets load
Crafty.scene("loading", function() {
console.log("loadin");

  Crafty.load([
		"resources/images/crossairs.png",
		"resources/images/character.png",
		"resources/images/wall.png",
		"resources/images/MGsoldier-sprites.png",
		"resources/images/RLsoldier-sprites.png",
		"resources/images/building.png",
		"resources/images/title.png",
		"resources/images/explosion.png",
		"resources/images/explosion2.png",
		"resources/images/bigexplosion.png",
		"resources/images/grenade.png",
		"resources/images/bullet.png",
		"resources/images/heavybullet.png"
		], function() {
		Crafty.scene("main"); //when everything is loaded, run the main scene
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
