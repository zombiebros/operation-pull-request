Crafty.c("Bullet",{
  speed: 4

  ,init: function() {
    this.requires("MoveByCenter, 2D, Canvas");

    var player = Crafty(Crafty("player1")[0]);

    var targetx = player.centerX(),
    targety = player.centerY()

    if(this.has("Grenade")){
      console.log("this is a grenade");
      var cursor = Crafty(Crafty("Cursor")[0]);
      targetx = cursor.centerX();
      targety = cursor.centerY();
    }

    this.attr({
      w: 16,
      h: 16,
      targetx: targetx,
      targety: targety
    });

    this.requires("Collision, Color")
    .color("red")
    .onHit("Destroyable", this.hitDestroyableHandler)
    .bind("EnterFrame", this.EnterFrame);

  }

  ,setOrigin: function(x,y){
    console.log("setting origin");
    this.x = x;
    this.y = y;    
    originVector = new Crafty.math.Vector2D(x, y);
    targetVector = new Crafty.math.Vector2D(this.targetx, this.targety);

    this.direction = targetVector.subtract(originVector); 

    if(!this.direction.isZero()){
      this.direction = this.direction.normalize();
    }   

    console.log("bullet init");
    console.log("origin", this.x, this.y);
    console.log("target", this.targetx, this.targety);
    console.log("trajectory",this.direction);
  }

  ,hitDestroyableHandler: function(destroyable){
    var destroyable = destroyable[0].obj
    //only damage players
    if(!this.has("Grenade") && (destroyable.__c["player1"] || destroyable.__c["PlayerCover"])){
      console.log("kill it");
      this.destroy();
      destroyable.trigger("Damage");
    }
  }

  ,EnterFrame: function(e){ 
    if(this.dying == true || this.dead == true){return false;}

    // originVector = new Crafty.math.Vector2D(this.x, this.y);
    // targetVector = new Crafty.math.Vector2D(this.targetx, this.targety);

    // this.direction = targetVector.subtract(originVector);    

    // if(!this.direction.isZero()){
    //   this.direction = this.direction.normalize();
    // }

    // console.log("moving bullet", this.direction);
    if((this.x <= this.targetx+2 && this.x >= this.targetx-2 ) && 
      (this.y >= this.targety+2 && this.y >= this.targety-2)){
      return;
    }
    
    this.origin("center");
    this.x += (this.direction.x * this.speed);
    this.y += (this.direction.y * this.speed);

      // var new_coords = {
      //   x: this.x + this.direction.x * this.speed,
      //   y: this.y + this.direction.y * this.speed
      // };

      // this.moveByCenter(new_coords);

    // }

    if(this.x > Crafty.viewport.width || 
      this.x < 0 || 
      this.y > Crafty.viewport.height || 
      this.y < 0  ||
      (!this.has("Grenade") && this.y >= this.targety-20)) {
      this.destroy();
    }
  }
});


Crafty.c("BigBullet", {
  init: function(){
    this.color("Blue");
    this.attr({
      w: 20,
      h: 20,
      life: 2
    });
    this.requires("Destroyable");
    this.bind("Dead", function(){this.destroy();});
  }
});