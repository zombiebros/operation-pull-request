Crafty.c("Destroyable", {
  life: 1

  ,init: function(){    
    this.bind("Damage", this.damage);
  }

  ,damage: function(){
    this.life -= 1;
    if(this.life <= 0){
      this.destroy();
    }
  }

  ,

});