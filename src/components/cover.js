Crafty.c("Cover", {
  life: 10

  ,init: function(){    
    
  }

  ,damage: function(){
    this.life -= 1;
    if(this.life <= 0){
      this.destroy();
    }
  }

});