export class Game extends Phaser.Scene{

constructor(){
    super({key:'game'});
}
preload(){

    this.load.image('fondo','./assets/fondo.jpg');
    this.load.atlas('ninja', './assets/ninja.png','./assets/ninja.json');
    this.load.spritesheet('diamante','./assets/diamante.png',{ frameWidth: 48, frameHeight: 48 }
    );

    this.load.spritesheet('rambo','./assets/luchador2.png',{frameWidth:54,frameHeight:90});


  
    //gemas
    this.load.animation('gemData', './assets/gems2.json');
    this.load.atlas('gems', './assets/gems.png', './assets/gems.json');

}
create(){
this.add.image(250,250,'fondo');
//ninja
this.ninja=this.add.sprite(120,140,'ninja');
//luchador


//diamante
this.mysprite=this.add.sprite(200, 40, 'diamante');
//rambo
this.spriteRambo=this.add.sprite(150,100,'rambo');



var frameNames=this.textures.get('luchador').getFrameNames();
console.log(frameNames);


this.anims.create({
    key: 'pelea',
    frames: [
        { key: 'luchador',frame:"luchador instancia 10000.png" },
        { key: 'luchador',frame:"luchador instancia 10001.png" },
        { key: 'luchador',frame:"luchador instancia 10002.png" },
        { key: 'luchador',frame:"luchador instancia 10004.png" },
        { key: 'luchador',frame:"luchador instancia 10005.png" },
  
    ],
    frameRate: 8,
    repeat: -1
});








//gemas
this.add.sprite(400, 100, 'gems').play('diamond');
        this.add.sprite(400, 200, 'gems').play('prism');
        this.add.sprite(400, 300, 'gems').play('ruby');
        this.add.sprite(400, 400, 'gems').play('square');



var frameNames=this.textures.get('ninja').getFrameNames();
console.log(frameNames);
this.anims.create({
    key: 'atake',
    frames: [
        { key: 'ninja',frame:"Attack__000.png" },
        { key: 'ninja',frame:"Attack__001.png" },
        { key: 'ninja',frame:"Attack__002.png" },
        { key: 'ninja',frame:"Attack__003.png" },
        { key: 'ninja',frame:"Attack__004.png" },
        { key: 'ninja',frame:"Attack__005.png" },
        { key: 'ninja',frame:"Attack__006.png" },
        { key: 'ninja',frame:"Attack__007.png" },
        { key: 'ninja',frame:"Attack__008.png" },
        { key: 'ninja',frame:"Attack__009.png" },
    ],
    frameRate: 8,
    repeat: -1
});


this.anims.create({
    key: 'bluediamondanimation',
    frames: this.anims.generateFrameNumbers('diamante', { start: 0, end: 7 }),
    frameRate: 16,
    repeat: -1,
    yoyo: true,
});


this.anims.create({
    key: 'animacionRambo',
    frames: this.anims.generateFrameNumbers('rambo', { start: 0, end: 3}),
    frameRate: 10,
    repeat: -1,
    yoyo: true,
});





this.ninja.play('atake');

this.mysprite.anims.play('bluediamondanimation');
this.mysprite.anims.play('animacionRambo');



}
update(){

}
}

