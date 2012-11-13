// Initialize Crafty
var global_state = {
  current_level: 0,
  loaded_maps: [],
};

$(function(){
	Crafty.init().canvas.init();
	Crafty.scene("loading");
});
