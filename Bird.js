class Bird extends Base{
    constructor(x,y){
   super(x,y,50,50)
   this.image=loadImage("bird.png")
    this.smokeImage=loadImage("smoke.png")
    this.smoke=[]
    }
    display(){
    //this.body.position.x=mouseX
    //this.body.position.y=mouseY
    super.display()
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]
    this.smoke.push(position)
    }
    for(var i=0;i<this.smoke.length;i++){
    image(this.smokeImage,this.smoke[i][0],this.smoke[i][1])
    }
    }
    }   