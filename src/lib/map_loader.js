function loadMap(file, callback) {
  $.get(file,function(data) {
    var level = [];
    // Split out each row
    $.each(data.split("\n"),function(y,row) {
      var columns = row.split("\t");
      level.push(columns);
      // Then split out each column
      $.each(columns,function(x,column) {
        console.log("colums", column);
        if(column == "F") {
          Crafty.e("2D, Canvas, floor, Floor").attr({x:x * 32, y: y * 32});
        } else if(column == "D") {
          Crafty.e("2D, Canvas, down, Down").attr({x:x * 32, y: y * 32});
        }else{
          Crafty.e("2D, Canvas, Solid, wall1, Wall").attr({x:x * 32, y: y * 32});
        }
      });

    });
    callback(level);
  });
}
