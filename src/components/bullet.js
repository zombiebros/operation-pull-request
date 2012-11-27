Crafty.c("Bullet",{

  init: function() {
    this.requires("MoveByCenter, 2D, Canvas");

    var player = Crafty(Crafty("player1")[0]);

    this.attr({
      w: 16,
      h: 16,
      targetx: player.centerX(),
      targety: player.centerY() 
    });

    this.requires("Collision, Color")
    .color("red")
    .onHit("Destroyable", this.hitDestroyableHandler)
    .bind("EnterFrame", this.EnterFrame);
  }

  ,hitDestroyableHandler: function(destroyable){
    var destroyable = destroyable[0].obj
    //only damage players
    if(destroyable.__c["player1"] || destroyable.__c["PlayerCover"]){
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
    
    var new_coords = {
      x: this.x + this.direction.x * 4/*speed*/,
      y: this.y + this.direction.y * 4/*speed*/
    };

    this.moveByCenter(new_coords);

    if(this.x > Crafty.viewport.width || this.x < 0 || this.y > Crafty.viewport.height || this.y < 0  || this.y >= this.targety-20) {
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