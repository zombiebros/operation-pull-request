Crafty.scene("main",function() {

  Crafty.background("#444");
  
    var player = Crafty.e("2D, Canvas, PlayerControls, player1, Color, ViewportConstrain")
      .color("blue")
      .attr({w:50,h:100,x:Crafty.viewport.width/2-25,y:32*15.6});

      var corssairs = Crafty.e("2D, Canvas, crossairs1, Cursor")
      .attr({w:50,h:50});

      var enemy = Crafty.e("2D, Canvas, Color, Soldier, ViewportConstrain")
      .color("Green")
      .attr({
      	w:50,
      	h:100,
      });
});
