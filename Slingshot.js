class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
attach(body)
{
    this.sling.bodyA=body;

}
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4)
            line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        }
  
       }
   
    }

