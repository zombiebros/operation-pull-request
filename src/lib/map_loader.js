
function mapRows(y, row){
  var columns = row.split("\t");
//  level.push(columns);
  // Then split out each column
  $.each(columns,function(x,column) {
    console.log("checking for column", column);
    switch(column){
    case "F":
      Crafty.e("2D, Canvas, floor, Floor").attr({x:x * 32, y: y * 32});
      break;
    case "D":
      Crafty.e("2D, Canvas, down, Down").attr({x:x * 32, y: y * 32});
      break;
    default:
      Crafty.e("2D, Canvas, wall1, Wall").attr({x:x * 32, y: y * 32});
    }
  });

}


function loadMap(file, callback) {
  $.get(file,function(data) {
    var level = [];
    // Split out each row
    $.each(data.split("\n"), mapRows);
    callback(/*level*/);
  });
}
