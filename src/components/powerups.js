Crafty.c("PowerUp",{
    speed: 2
    ,init:function(){
        this.requires("2D,Canvas,Collision,MoveByCenter")
        .onHit("Player",function(ent){
            console.log("powerup hit player", this.effect, this.value);
            ent[0].obj.trigger(this.effect,this.value);
            this.destroy();
        })
        .bind("EnterFrame",function(){
            //this.moveByCenter({x: this.x, y: this.y+=this.speed})
            this.y+=2;
        });
    }
});

Crafty.c("Heal",{
    effect:"Damage",
    value:-5,
    init:function(){
        this.requires("PowerUp,heal");
    }
});

Crafty.c("Grenades",{
    init:function(){
        this.requires("PowerUp,grenades");
    }
});