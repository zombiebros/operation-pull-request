Crafty.c("Bullet",{

  init: function() {
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

    originVector = new Crafty.math.Vector2D(this.centerX(), this.centerY());
    targetVector = new Crafty.math.Vector2D(this.targetx, this.targety);

    this.direction = targetVector.subtract(originVector);    

    if(!this.direction.isZero()){
      this.direction = this.direction.normalize();
    }

    console.log("this direction", this.direction, this.centerX(), this.centerY(), this.targetx, this.targety);
    
    var new_coords = {
      x: this.x + Math.ceil(this.direction.x)/*speed*/,
      y: this.y + Math.ceil(this.direction.y)/*speed*/
    };

    console.log("moving", new_coords, this.targetx, this.targety);

    this.moveByCenter(new_coords);

    if(this.x > Crafty.viewport.width || 
      this.x < 0 || 
      this.y > Crafty.viewport.height || 
      this.y < 0  ||
      (this.x == this.targetx && this.y == this.targety-5 )||
      (this.x == this.targetx && this.y == this.targety+5) ||
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