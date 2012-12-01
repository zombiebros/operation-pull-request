Crafty.c("Enemy", {
  moving: true
  ,enteredviewport: false
  ,bulletType: "Bullet"
  ,fireRate: 200

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
      //}
    }

  }

  ,decrementKillCount: function(){
    this.destroy();
      //decrement kill count
    if(typeof this.killcount != 'undefined'){ //if this entity has kill count lower the global strength counter
      Crafty(Crafty('EnemyHealthBar')[0]).trigger("updateCount", (this.killcount * 8) * -1);
    }
  }

  ,enterFrameHandler: function(frame){
    if(this.dying == true || this.dead == true){return true;}

    if(this.enteredviewport == true && (this.x >= (Crafty.viewport.width+this.w) * 2  || this.x <= (0-this.w) * 2)){ //way out of bounds
      if(this.has("Boss")){
        this.x = 20
      }else{
        this.destroy();
      }
    }

    if(this.hit("EnemyCover") != false){
      
      var maxz = _.max(this.hit("EnemyCover"), function(coverhit){
        return coverhit.obj._z;
      });

      if((this.y + this.h) <= (maxz.obj.y + maxz.obj.h)){
        this.z = maxz.obj.z - 5;
      }else{
        this.z = maxz.obj.z + 5;
      }

    }

    if(this.enteredviewport == true && this.has("Tank") && (this.x > Crafty.viewport.width || this.x < 0)){
      this.destroy();
    }

    if((this.x > 0 && this.x < Crafty.viewport.width) && Crafty.math.randomInt(0, this.fireRate) == this.fireRate && Crafty("Player").length > 0 &&
      (this.hit("EnemyCover") == false || 
        (this.hit("EnemyCover") != false && this.z >= _.max(this.hit("EnemyCover"), function(collision){ return collision.obj.z;}).obj.z ))){
      this.shoot();

    if(!this.has("Boss")){
      this.moving = false;
      this.timeout(function(){
        this.moving = true;
      }, 500);
    }
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
