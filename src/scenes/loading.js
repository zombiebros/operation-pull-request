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
		"resources/images/title.png"
		], function() {
		Crafty.scene("title"); //when everything is loaded, run the main scene
  });

  Crafty.audio.add({
		shoot: [
		"resources/sounds/cg1.wav",
		"resources/sounds/cg1.mp3",
		"resources/sounds/cg1.ogg"
		],
		mg: [
		"resources/sounds/Machine Gun.wmp3",
		"resources/sounds/Machine Gun.mp3",
		"resources/sounds/Machine Gun.ogg"
		],
		title: [
		"resources/sounds/titlesong.mp3"
		]
	});

});
