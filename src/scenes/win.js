Crafty.scene("win",(function() { 
	
	var scene = {

		init: function(){
			
			Crafty.background('url("resources/images/title.png")');

			var start = Crafty.e("2D, Canvas, Text, Button")
			.text("Based on a true story")
			.textFont({size: "50px", family: "Arial"})
			.attr({x: 340, y: 560, h: 20, w: 100})
			.requires("Collision, Destroyable")
			.textColor("#FFFFFF")
			.bind("EnterFrame", function(){
				if(this.hit("Cursor")){
					this.textColor("#FFFFFF");
				}else{
				 this.textColor("#ff1600");
				}
			})
		}
	};

	return $.proxy(scene.init, scene); //Pass our scene.init function to crafty.scene
})());
