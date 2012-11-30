Crafty.c("PlayerControls", {

  init: function() {

    this.requires("Twoway, ViewportConstrain, MoveByCenter")
    .attr({enteredviewport: true})
    .twoway(10,[0])     // twoway movement for now
    .bind("NewDirection", this.changeDirection);
  }

  ,changeDirection: function(direction){
    this.animate('RunningRight',5,0,8);
    this.animate('RunningLeft',3,0,0);

    if (direction.x < 0) {
      if (!this.isPlaying("RunningLeft"))
        this.stop().animate("RunningLeft", 25, -1);
    }

    if (direction.x > 0) {
      if (!this.isPlaying("RunningRight"))
        this.stop().animate("RunningRight", 25, -1);
    }

    if(!direction.x){
      this.stop().animate("standing",4,0,4).animate("standing",25,0);
    }  
  }

});

