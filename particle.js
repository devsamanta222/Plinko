class Particle{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
        this.color=color(random(0,255), random(0,255), random(0,255))

    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
       fill(this.color)
       ellipse(0,0,this.radius,this.radius)
       pop()
       
    }
}