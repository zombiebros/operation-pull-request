Crafty.scene("title",(function() { 
	
	var scene = {

		init: function(){
			
			Crafty.background('url("resources/images/title.png")');

			var start = Crafty.e("2D, Canvas, Text, Button")
			.text("Start")
			.textFont({size: "100px", family: "Arial"})
			.attr({x: 340, y: 560, h: 20, w: 100})
			.requires("Collision, Destroyable")
			.collision([0,-50], [200,-50], [200,20], [0,20])
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
