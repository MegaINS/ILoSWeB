import * as PIXI from "pixi.js";
import {ILoSGame} from "./app";

export class PlayerList extends PIXI.Container {

    constructor(game: ILoSGame) {
        super();

        const beatifulRect = new PIXI.Graphics();


        beatifulRect.beginFill(0xAAFF00);
        beatifulRect.drawRect(0, 0, game.CANVAS_WIDTH-270, 300);
        beatifulRect.endFill();
        this.addChild(beatifulRect)


    }


}