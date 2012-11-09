Crafty.c("Destroyable", {
  
  init: function(){
    if(!this.has("Sprite")){
      this.requires("Color,Tint");
    }
  
    if(typeof this.life == "undefined"){
      this.life = 1;
    }

    this.bind("Damage", this.damageHandler);
    this.bind("Die", this.dieHandler);    
  }

  ,damageHandler: function(){
    this.life -= 1;

    if(this.life <= 0 && this.dying != true){
      this.trigger("Die");
    }else{

    }
  }

  ,dieHandler: function(){
    this.dying = true;
    while(this.h > 0){
      this.h -= 1;
    }
    this.destroy();
  }

});