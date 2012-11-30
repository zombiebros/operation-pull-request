Crafty.c("PowerUp",{
    init:function(){
        this.requires("2D,Canvas,Collision")
        .onHit("Player",function(ent){
            console.log("powerup hit player", this.effect, this.value);
            ent[0].obj.trigger(this.effect,this.value);
            this.destroy();
        })
        .bind("EnterFrame",function(){
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