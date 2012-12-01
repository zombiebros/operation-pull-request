Crafty.c("Bullet",{
  speed: 8
  ,damage: 10

  ,init: function() {
    this.requires("bullet1, SpriteAnimation, MoveByCenter, 2D, Canvas");

    var player = Crafty(Crafty("player1")[0]);

    try{
    var targetx = player.centerX(),
    targety = player.centerY();
  }catch(ex){
    throw ex;
  }

        var cursor = Crafty(Crafty("Cursor")[0]);
    targetx = cursor.centerX();
    targety = cursor.centerY();

    this.attr({
      w: 16,
      h: 16,
    });

    this.requires("Collision, Color")
    .color("transparent")
    .onHit("Destroyable", this.hitDestroyableHandler)
  }

  ,checkForBind: function(){
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


    if(typeof this.moveBound == 'undefined'){
      this.moveBound = true;
      this.bind("EnterFrame", this.EnterFrame);      
    }
  }

  ,hitDestroyableHandler: function(destroyable){
    var destroyable = destroyable[0].obj
    //only damage players
    if(!this.has("Grenade") && (destroyable.__c["Player"] || destroyable.__c["PlayerCover"])){
      this.destroy();
      destroyable.trigger("Damage", this.damage);
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
    this.color("transparent");
    this.attr({
      w: 20,
      h: 20,
      life: 2,
      damage: 20
    });
    this.requires("Destroyable, bullet2");
    this.bind("Dead", function(){this.destroy();});
  }
});