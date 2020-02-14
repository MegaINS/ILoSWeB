import * as PIXI from "pixi.js";
import {ILoSGame} from "./app";
import {Chat} from "./Chat";
import {PlayerList} from "./PlayerList";


export class Bottom extends PIXI.Container {


    chat;
    playerList;
    constructor(game: ILoSGame) {
        super();

        const beatifulRect = new PIXI.Graphics();


        beatifulRect.beginFill(0xaaaaaa);
        beatifulRect.drawRect(0, 0, game.CANVAS_WIDTH, 300);
        beatifulRect.endFill();
        this.addChild(beatifulRect);

        this.chat = new Chat(game);
        this.addChild(this.chat);

        this.playerList = new PlayerList(game);
        this.playerList.x =  game.CANVAS_WIDTH-270;
        this.addChild(this.playerList)


    }


}