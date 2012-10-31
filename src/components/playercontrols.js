/*Crafty.c("PlayerControls", {
    init: function() {
        this.requires('Multiway');
    },
    
    playerControls: function(speed) {
        this.multiway(speed, {W: -90, S: 90, D: 0, A: 180});
        return this;
    }
    
});*/
Crafty.c("PlayerControls", {
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
});


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
    this.requires("Collision").onHit("Solid",function(obj) {
      this.cancelSlide();
/*    this.bind('Moved', function(from) {
        if(this.hit('Solid')){
          this.attr({x: from.x, y:from.y});
        }
    });*/
    });
  }
});

Crafty.c("Camera",{
    init: function() {  },
    camera: function(obj) {
      this.set(obj);
      var that = this;
      obj.bind("Moved",function(location) { that.set(location); });
    },
    set: function(obj) {
      Crafty.viewport.x = -obj.x + Crafty.viewport.width / 2;
      Crafty.viewport.y = -obj.y + Crafty.viewport.height / 2;
    }
  });