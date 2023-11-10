class SceneA extends Phaser.Scene{
    constructor(){
        super({key: "sceneA"});
    }
 preload(){
  this.load.image("pajaro","./assets/pajaro.png");
  this.load.audio("explosion","./assets/boom.mp3");
}

    create(){
      
        this.pajaro=this.add.image(60,50,"pajaro");
        this.input.keyboard.on("keydown-RIGHT", () => {
         //inserto sonido
         this.sonido1=this.sound.add("explosion");
         this.pajaro.x++;
         this,this.sonido1.play();
        });
         this.inputkeyboard.on("keydown-RIGHT",()=>{
     
             this.pajaro.setVelocity(0);
             explosion.play();
            
         });   
 this.scene.add("SceneC",new SceneC);
 this.scene.start("SceneC")

    }
   
   
    update(time,delta){

    }
}