class SceneB extends Phaser.Scene{
    constructor(){
        super({key: "SceneB", active:true});
    }
 preload(){
    this.load.image("arbol","./assets/arbol.png");

}

    create(){
      
        this.arbol=this.add.image(100,50,"arbol");
     
    }
   
   
    update(time,delta){

    }
}