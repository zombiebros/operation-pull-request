var MapLoader = {
  current_level: 0
  ,cached_maps: {}
  ,maps_path: "src/levels/"

  ,getMapFile: function(level_num, callback) {
    var file = this.maps_path+"map"+level_num+".tsv";
    var _self = this;

    $.get(file, function(data) {      
      _self.cached_maps[level_num] = data; //cache the map for faster lookup
      _self.renderMapData(data, callback);
    });
  }

  ,getMapData: function(level_num, callback){
    if(typeof this.cached_maps[level_num] != 'undefined'){
      //use cached data
      this.renderMapData(this.cahed_maps[level_num], callback);
    }else{
      this.getMapFile(level_num, callback);
    }
  }

  ,getLevel: function(level_num, callback){
    this.current_level = level_num;
    this.getMapData(level_num, callback);
  }
  
   ,nextLevel: function(){
     this.current_level += 1;
     Crafty.scene("main");
   }

   ,prevLevel: function(){
     if(this.current_level > 0){
       this.current_level -= 1;
       Crafty.scene("main");
     }
   }

  ,renderMapData: function(map_data, callback){
      // Split out each row
      $.each(map_data.split("\n"), this.mapRows);
      callback(/*level*/);
  }

  ,mapRows: function(y, row){
    var columns = row.split("\t");
    // Then split out each column
    $.each(columns,function(x,column) {
      switch(column){
      case "F":
        Crafty.e("2D, Canvas, floor, Floor").attr({x:x * 32, y: y * 32});
        break;
      case "D":
         Crafty.e("2D, Canvas, down, DownStairs").attr({x:x * 32, y: y * 32});
        break;
      case "CD":
         Crafty.e("2D, Canvas, closed, Door").attr({x:x * 32, y: y * 32});
        break;
      default:
        Crafty.e("2D, Canvas, wall1, Wall, Solid").attr({x:x * 32, y: y * 32});
      }
    });
  }

};

