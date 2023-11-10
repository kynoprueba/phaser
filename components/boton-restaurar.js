export class BotonRestaurar {
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.spriteSheet('button','images/boton1.png',{frameWidth:100,frameHeight:30});
    }

    create(){
        this.startButton=this.relatedScene.add.sprite(250,450,'button').setInteractive();
        this.startButton.on('pointerover',() =>{
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout',() =>{
            this.startButton.setFrame(0);
        });

        this.startButton.on('pointerdown',()=> {
            this.relatedScene.scene.start('sceneA');
        })
    }
}