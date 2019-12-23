import {Top} from "./Top";
import {ILoSGame} from "./app";


export class Gui {

    top:Top;

    constructor(game: ILoSGame) {
        this.top = new Top(game);
        game.app.stage.addChild(this.top);

    }
}