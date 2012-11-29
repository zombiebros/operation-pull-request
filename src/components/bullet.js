Crafty.c("Bullet",{
  speed: 4

  ,init: function() {
    this.requires("MoveByCenter, 2D, Canvas");

    var player = Crafty(Crafty("player1")[0]);

    var targetx = player.centerX(),
    targety = player.centerY();

        var cursor = Crafty(Crafty("Cursor")[0]);
    targetx = cursor.centerX();
    targety = cursor.centerY();

    this.attr({
      w: 16,
      h: 16,
    });

    this.requires("Collision, Color")
    .color("red")
    .onHit("Destroyable", this.hitDestroyableHandler)
  }

  ,checkForBind: function(){
    console.log("checking if bullet is ready", this.targetx, this.targety, this.x, this.y);
    if(typeof this.targetx != 'undefined' &&
       typeof this.targety != 'undefined' &&
       (typeof this.x != 'undefined' && this.x != 0) &&
       (typeof this.y != 'undefined' && this.x != 0)){
      this.calcDirection();
    }
  }

  ,setTarget: function(x, y){
    this.targetx = x;
    this.targety = y;
    this.checkForBind();
    return this;
  }

  ,setOrigin: function(x,y){
    this.x = x;
    this.y = y;
    this.checkForBind();
    return this;
  }

  ,calcDirection: function(){
    originVector = new Crafty.math.Vector2D(this.x, this.y);    
    targetVector = new Crafty.math.Vector2D(this.targetx, this.targety);

    this.direction = targetVector.subtract(originVector); 

    if(!this.direction.isZero()){
      this.direction = this.direction.normalize();
    }

    console.log("calc direction", this.direction, this.x, this.y, this.targetx, this.targety);

    if(typeof this.moveBound == 'undefined'){
      this.moveBound = true;
      this.bind("EnterFrame", this.EnterFrame);      
    }
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
    
    this.x += (this.direction.x * this.speed);
    this.y += (this.direction.y * this.speed);


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