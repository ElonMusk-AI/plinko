class Ground{
    constructor(x,y,width,height){
        var options = {
            friction : 0,
            restitution: 0,
            density: 1.2,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}