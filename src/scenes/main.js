Crafty.scene("main",function() {

  Crafty.background("#444");
  
    var player = Crafty.e("2D, Canvas, PlayerControls, player1, Solid, Color")
      .color("blue")
      .attr({w:50,h:100,x:32*10,y:32*15.6});

    var corssairs = Crafty.e("2D, Canvas, crossairs1, Cursor")
      .attr({w:50,h:50});
});
