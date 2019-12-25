import {Top} from "./Top";
import {ILoSGame} from "./app";
import {Status} from "./Status";


export class Gui {

    top:Top;
    status:Status;

    constructor(game: ILoSGame) {
        this.top = new Top(game);
       // this.userInfo = new UserInfo();
        this.status = new Status(game.player);
        this.status.y = 30;

        game.app.stage.addChild(this.top,this.status);

    }



    update() {
        this.status.update();
    }
}