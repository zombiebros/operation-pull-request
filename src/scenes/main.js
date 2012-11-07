Crafty.scene("main",function() {

  Crafty.background("#444");
  
    var player = Crafty.e("2D, Canvas, PlayerControls, player1, Color")
      .color("blue")
			.attr({w:50,h:100,x:Crafty.viewport.width/2-25,y:32*15.6})
			.bind("Moved", function(from) {
				if(this.x+this.w > Crafty.viewport.width || this.x+this.w < this.w){
					this.attr({x:from.x,y:from.y});
				}
			});

    var corssairs = Crafty.e("2D, SpriteAnimation, Canvas, crossairs1, Cursor")
      .attr({w:50,h:50})
      .animate('Shooting',2,0,1)
      .animate('Shooting', 15, -1);


});
