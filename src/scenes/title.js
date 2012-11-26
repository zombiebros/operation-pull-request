Crafty.scene("Title",(function() { 
	
	var scene = {

		init: function(){
			
			Crafty.background("#444");
			
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
