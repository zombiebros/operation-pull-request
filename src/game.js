// Initialize Crafty
var global_state = {
  current_level: 0,
  loaded_maps: [],
};

$(function(){
	Crafty.init(700,600).canvas.init();
	Crafty.scene("loading");
	Crafty.modules({ 'crafty-debug-bar': 'DEV' }, function () {
		Crafty.debugBar.show();
	});
});
