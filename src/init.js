import { Game } from "./game.js";

const config={
    width:500,
    height:500,
    parent:"container",
    type:Phaser.AUTO,
    scene:[Game]
    
 
}
var game=new Phaser.Game(config);

