var powerUps = ["Heal"];
Crafty.c("Destroyable", {
  
  init: function(){
    if(!this.has("Sprite")){
      this.requires("Color,Tint");
    }

    if(typeof this.life == "undefined"){
      this.life = 1;
    }

    this.bind("Damage", this.damageHandler)
    .bind("Die", this.dieHandler)
    .bind("DamageAnimation", this.damageAnimationHandler)
    ;
  }

  ,damageHandler: function(){
    this.life -= 1;

    if(this.life <= 0 && this.dying != true){
      this.trigger("Die");
    }else{
      this.trigger("DamageAnimation");      
    }
  }

  ,damageAnimationHandler: function(){
    if(this.has("Color") && this.color() != "white"){
      this.baseColor = this.color();
      this.timeout(function(){
        this.color(this.baseColor);
      }, 40);
      this.color("white");
    }
  }


  ,dieHandler: function(){
    this.dying = true;
    while(this.h > 0){
      this.h -= 1;
    }
    this.destroy();
    if(Crafty.math.randomInt(0, 100) > 70){
      var powerUp = powerUps[Crafty.math.randomInt(0, powerUps.length-1)];
      Crafty.e(powerUp).attr({
        x:this.x,
        y:this.y
      });
    }
  }

});