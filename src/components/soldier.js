Crafty.c("Soldier", {
  life: 10
  ,direction: 1 
  ,killcount : 1
  ,speed: 2

  ,init: function(){
    this.requires("2D, Canvas, mgsoldier1, SpriteAnimation, Color, Collision, ViewportConstrain, MoveByCenter, Destroyable")

    this.attr({
      y: Crafty.math.randomInt(Crafty.viewport.horizonx, Crafty.viewport.height-400)
      ,h: 100
      ,w: 100
    })
    .collision([30,20],[60,20],[60,100],[30,100])
    .color("transparent")

    this.animate('RunningRight',4,0,7);
    this.animate('RunningLeft',11,0,8);
    this.animate('Shooting',17,0,18);
    this.animate('DeathWhileShooting',19,0,21);
    this.animate('DeathWhileRunningRight',27,0,25);
    this.animate('DeathWhileRunningLeft',22,0,24);

    this.requires("Enemy");
    this.fireRate = 60;
    this.bind("Shoot", this.shootHandler);
    this.bind("Moved", this.movingAnimation);
  }

  ,shootHandler: function(){
    this.animate("Shooting",25, 3);
    Crafty.audio.play('shoot',1);
  }

  ,movingAnimation: function(movedata){
    if(this.direction == 1){
      this.animate('RunningRight',25,-1);
    }else{
      this.animate("RunningLeft", 25,-1);
    }
  }

});

