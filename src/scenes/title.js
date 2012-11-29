Crafty.scene("title",(function() { 
	
	var scene = {

		init: function(){
			
			Crafty.background("#000");

			var title = Crafty.e("2D, Canvas, Text")
			.text("OPERATION: PULL REQUEST")
			.textFont({size: "100", family: "Arial"})
			.attr({x: 0, y: 0, w: Crafty.viewport.width, h: 100})
			.textColor("#987675");

			var start = Crafty.e("2D, Canvas, Text, Button")
			.text("Start")
			.textFont({size: "20px", family: "Arial"})
			.attr({x: 20, y: 300, h: 20, w: 100})
			.requires("Collision, Destroyable")
			.textColor("#FFFFFF")
			.bind("EnterFrame", function(){
				if(this.hit("Cursor")){
					this.textColor("#FFFFFF");
				}else{
				 this.textColor("#ff1600");
				}
			})
			.bind("Damage", function(){
				Crafty.scene("main");
			});
			
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
