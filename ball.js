class ball{

    constructor(x,y){
    
     var option = {
       
        isStatic:false
    }
    
    this.body=Bodies.rectangle(x,y,100,100,option);
    
    this.image=loadImage("sprites/ball2.png")
    World.add(world,this.body);
    
    }    
    display(){
    
    var pos=this.body.position
   
   
 
    imageMode(CENTER)
    fill("yellow")
    image(this.image,pos.x,pos.y,100,100)
   
    }
    }