Crafty.c("MoveByCenter", {
  init: function() {

  }

  ,moveByCenter: function(coords_obj){
    //console.log("center coords", coords_obj.x, coords_obj.y, coords_obj.x + this.w/2, coords_obj.y - this.h/2);
    if(coords_obj.x){
      this.x = coords_obj.x - this.w/2;
    }

    if(coords_obj.y){
      this.y = coords_obj.y + this.h/2;
    }
  }

  ,centerX: function(){
    return Math.floor(this.x + (this.w/2));
  }

  ,centerY: function(){
    return Math.floor(this.y + (this.h/2));
  }

});