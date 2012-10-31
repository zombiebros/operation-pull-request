Crafty.c("PlayerControls", {
    init: function() {
        this.requires('Multiway');
    },
    
    playerControls: function(speed) {
        this.multiway(speed, {W: -90, S: 90, D: 0, A: 180});
        return this;
    }
    
});
/*Crafty.c("PlayerControls", {
  _keys: {
  UP_ARROW: [0,-1],
  DOWN_ARROW: [0,1],
  RIGHT_ARROW: [1,0],
  LEFT_ARROW: [-1,0],
  W: [0,-1],
  S: [0,1],
  D: [1,0],
  A: [-1,0]
  },

  init: function() {
    for(var k in this._keys) {
      var keyCode = Crafty.keys[k] || k;
      this._keys[keyCode] = this._keys[k];
    }

    this.bind("KeyDown",function(e) {
      if(this._keys[e.key]) {
        var direction = this._keys[e.key];
        this.trigger('Slide',direction);
        Crafty.trigger('Turn');
      }
    });
  }
});*/


Crafty.c("AI",{
  _directions:  [[0,-1], [0,1], [1,0], [-1,0]],
  init: function() {
    this._moveChance = 0.5;
    this.requires('Slide');

    this.bind("Turn",function() {
      if(Math.random() < this._moveChance) {
        this.trigger("Slide", this._randomDirection());
      }
    });
  },

  moveChance: function(val) {
    this._moveChance = val;

  },
  _randomDirection: function() {
    return this._directions[Math.floor(Math.random()*4)];
  }

});

Crafty.c("Solid",{
  init: function() {
    this.requires("Collision").onHit("Wall",function(obj) {
    this.bind('Moved', function(from) {
        if(this.hit('Wall')){
          this.attr({x: from.x, y:from.y});
        }
    });
      //    this.cancelSlide();
    });
  }
});
