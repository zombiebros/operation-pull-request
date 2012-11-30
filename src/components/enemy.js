Crafty.c("Enemy", {
  moving: true
  ,enteredviewport: false
  ,bulletType: "Bullet"

  ,init: function(){
    this.bind("EnterFrame", this.enterFrameHandler);
    this.bind("Dead", this.decrementKillCount);
    this.requires("Powerupdropper");

  //spawn at a spawner
  if(Crafty("Spawner").length > 0 && (Crafty.frame() % 2) == 0){
        //get random spawner
        random_spawner = Crafty(Crafty.math.randomElementOfArray(Crafty("Spawner")));
        this.enteredviewport = true;
        this.requires("Horizonable");
        this.x = random_spawner.x;
        this.z = random_spawner.z - 50;
        this.direction = Crafty.math.randomElementOfArray([-1, 1]);
      }else{
      //create the entity off screen and let it run in using this.enteredviewport as a flag to start limiting its bounds.
      this.enteredviewport = false;
      this.requires("Horizonable"); //add Horizonable first because it adjusts the entites height and width which is need for the x
      this.x = Crafty.math.randomElementOfArray([0-this.w, Crafty.viewport.width+this.w]);
      this.direction = (this.x < Crafty.viewport.width / 2) ? 1 : -1;
    }

  }

  ,decrementKillCount: function(){
    this.destroy();
      //decrement kill count
    if(typeof this.killcount != 'undefined'){ //if this entity has kill count lower the global strength counter
      Crafty(Crafty('EnemyHealthBar')[0]).trigger("updateCount", (this.killcount * 10) * -1);
    }
  }

  ,enterFrameHandler: function(frame){
    if(this.dying == true || this.dead == true){return true;}

    if(Crafty.math.randomInt(0, 200) == 200 && 
      (this.hit("EnemyCover") == false || 
        (this.hit("EnemyCover") == true && this.z >= _.max(this.hit("EnemyCover"), function(collision){ return collision.obj.z;}) ))){
      this.shoot();
    this.moving = false;
    this.timeout(function(){
      this.moving = true;
    }, 500);
  }

  if(this.moving == true){
    this.trigger("Moved", {x:this.x += this.direction*this.speed, y:this.y, direction: this.direction});
    this.x += this.direction * this.speed;
  }

}

,shoot: function(e){    
  this.trigger("Shoot");
  var player = Crafty(Crafty("player1")[0]);
  Crafty.e(this.bulletType)
  .setOrigin(this.centerX(), this.centerY())
  .setTarget(player.centerX(), player.centerY())
}


});
