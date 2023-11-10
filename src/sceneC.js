class SceneC extends Phaser.Scene{
    constructor(){
        super({key: "sceneC",active:true});
    }
 preload(){
    this.load.image("barco","./assets/barco.png");

}

    create(){
      
        this.barco=this.add.image(150,50,"barco");
     
    }
   
   
    update(time,delta){

    }
}