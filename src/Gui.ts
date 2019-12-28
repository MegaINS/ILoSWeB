import {Top} from "./Top";
import {ILoSGame} from "./app";
import {Status} from "./Status";
import {PlayerInfo} from "./playerInfo/PlayerInfo";


export class Gui {

    top:Top;
    status:Status;
    userInfo:PlayerInfo;

    constructor(game: ILoSGame) {
        this.top = new Top(game);
        this.userInfo = new PlayerInfo(game);
        this.status = new Status(game);
        this.status.y = 30;

        game.app.stage.addChild(this.top,this.status);

    }



    update() {
        this.status.update();
    }
}