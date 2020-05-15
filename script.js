let paintbox=document.getElementById("paintbox")
let pen=paintbox.getContext('2d')

let gameOn=true
let pspeed=5


class Box{
constructor(size,color){
    this.size=size
    this.color=color
    this.x=0
    this.y=0
}

}

class Player extends Box{
constructor(){
    super(50,'red')
    this.x=0
    this.y=225
    this.speed=0
    //this.moving=false
}


move(){
    this.x+=this.speed
       /* if(this.x+this.speed>500){
            this.speed=-(Math.abs(this.speed))
        }if(this.x<0){
            this.speed=(Math.abs(this.speed))
        }*/
    //this.x+=this.speed
}

}


class Enemy extends Box{
    constructor(speed){
        super(50,'blue')
        this.speed=speed
    }
    move(){
        this.y+=this.speed
        if(this.y+this.speed>500){
            this.speed=-(Math.abs(this.speed))
        }if(this.y<0){
            this.speed=(Math.abs(this.speed))
        }
    }
    
    }

    let p1=new Player()
    let e1=new Enemy(4)
    let e2=new Enemy(8)
    let e3=new Enemy(12)


    e1.x=100
    e2.x=220
    e3.x=375


    function drawBox(box){
        pen.fillStyle=box.color
        pen.fillRect(box.x,box.y,box.size,box.size)


    }
function isCollided(box1,box2){
if(Math.abs(box1.x-box2.x)<50 && Math.abs(box1.y-box2.y)<50 ){
    return true
}
}


paintbox.addEventListener('mousedown',()=>{
p1.speed=pspeed
    console.log("mousedown")
  /*if(this.x+this.speed>500){
       // this.speed=-(Math.abs(this.speed))
       p1.speed=-(Math.abs(pspeed))
    }if(this.x<0){
       // this.speed=(Math.abs(this.speed))
       p1.speed=pspeed
    }    */


})

paintbox.addEventListener('mouseup',()=>{
p1.speed=0
    
    //console.log("mouseup")
    
    
    })
    /*setInterval(()=>{
pspeed= 5+ parseInt(Math.random()*10)

    },2000)*/
    
    function gameLoop() {
        if (!gameOn) {
            return  
        }
        console.log('frame update')
        pen.clearRect(0, 0, 500, 500)
        e1.move()
        e2.move()
        e3.move()
        p1.move()
      
       if (isCollided(e1, p1) || isCollided(e2, p1) || isCollided(e3, p1)) {
          gameOn = false  
          window.alert('Game Over')
        }
      
        drawBox(p1)
        drawBox(e1)
        drawBox(e2)
        drawBox(e3)
      
      
        window.requestAnimationFrame(gameLoop)
      }
      
      gameLoop()