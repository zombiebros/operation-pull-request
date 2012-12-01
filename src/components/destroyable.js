Crafty.c("Destroyable", {
  dead: false
  
  ,init: function(){
    if(typeof this.life == "undefined"){
      this.life = 1;
    }

    this.bind("Damage", this.damageHandler)
    .bind("DamageAnimation", this.damageAnimationHandler)
    .bind("EnterFrame", this.dieAnimation)
    ;
  }

  ,damageHandler: function(damageamount){
    if(this.dying == true || this.dead == true){return true;}

    if(typeof damageamount == 'undefined'){
      this.life -= 1;
    }else{
      if(damageamount < 0 && typeof this.maxlife != "undefined"){
        if((damageamount * -1) > this.maxlife - this.life){ //don't heal over max
          this.life = this.maxlife;
          return;
        }
      } //healing

      this.life -= damageamount;
    }

    if(this.life <= 0 && this.dying != true){      
      this.dying = true;
      this.trigger("DieAnimation")
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
      this.h -= 5;
      this.y += 5;
    }
  }

});