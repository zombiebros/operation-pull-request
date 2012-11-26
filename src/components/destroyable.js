Crafty.c("Destroyable", {
  dead: false
  
  ,init: function(){
    if(!this.has("Sprite")){
      this.requires("Color,Tint");
    }

    if(typeof this.life == "undefined"){
      this.life = 1;
    }

    this.bind("Damage", this.damageHandler)
    .bind("DieAnimation", this.dieAnimation)
    .bind("DamageAnimation", this.damageAnimationHandler)
    .bind("EnterFrame", this.dieAnimation)
    ;
  }

  ,damageHandler: function(){
    if(this.dying == true || this.dead == true){return true;}

    this.life -= 1;
        
    if(this.life <= 0 && this.dying != true){      
      //this.trigger("DieAnimation");
      this.dying = true;
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


  ,dieAnimation: function(){
    if(this.h <= 0){ 
      this.dead = true;
      this.trigger("Dead");
    }

    if(this.dying == true && this.dead == false){
      this.h -= 1;
      this.y += 1;
    }
  }

});