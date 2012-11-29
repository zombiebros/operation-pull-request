Crafty.scene("title",(function() { 
	
	var scene = {

		init: function(){
			
			Crafty.background("#000");

			var title = Crafty.e("2D, DOM, Text")
			.text("OPERATION: PULL REQUEST")
			.css({
				color: 'red',
				'font-family': "arial, sans-serif",
				"font-size": "100px"
			})
			.attr({x: 0, y: 0, w: Crafty.viewport.width});

			var start = Crafty.e("2D, DOM, Text, Collision")
			.text("Start")
			.css({
				color: "red",
				"font-size": "50px",
				"font-family": "arial, sans-serif"
			})
			.attr({x: 0, y: 400, w: 200, h: 200})
			.bind("EnterFrame", function(){
				if(this.hit("Cursor")){
					this.css({color: "white"});
				}else{
					this.css({color: "red"});
				}
			});

			var story = Crafty.e("2D, DOM, Text")
			.text("Story")
			.css({
				color: "red",
				"font-size": "50px",
				"font-family": "arial, sans-serif"
			})
			.attr({x: 0, y: 450, w: 200});
			
			var crossairs = Crafty.e("2D, SpriteAnimation, Canvas, crossairs1, Cursor, Mouse")
			.attr({
				w:50,
				h:50,
				z: 900
			});			

			Crafty.audio.play("title");

		}
	};

	return $.proxy(scene.init, scene); //Pass our scene.init function to crafty.scene
})());
