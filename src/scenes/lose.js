Crafty.scene("lose",(function() { 
	
	var scene = {

		init: function(){
			Crafty.audio.stop();
			Crafty.background('#000000');
			var start = Crafty.e("2D, DOM, Text")
			.text("You Died! The future refused to change.")
			.css({"font-size": "50px", "font-family": "Arial"})
			.attr({x: 40, y: 40, h: Crafty.viewport.height-100, w: Crafty.viewport.width-100})
			.textColor("#FFFFFF");
		
			var crossairs = Crafty.e("2D, SpriteAnimation, Canvas, crossairs1, Cursor, Mouse")
			.attr({
				w:50,
				h:50,
				z: 900
			});		

		var start = Crafty.e("2D, DOM, Text, Button")
			.text("Play Again?")
			.css({"font-size": "50px", "font-family": "Arial"})
			.attr({x: 340, y: 300, h: 20, w: 200})
			.requires("Collision, Destroyable")
			.textColor("#FFFFFF")
			.bind("EnterFrame", function(){
				if(this.hit("Cursor")){
					this.textColor("#ff1600");
				}else{
					this.textColor("#FFFFFF");
				}
			})
			.bind("Damage", function(){
				Crafty.scene("main");
			});

		}

	};

	return $.proxy(scene.init, scene); //Pass our scene.init function to crafty.scene
})());
