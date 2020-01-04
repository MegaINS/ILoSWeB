import {Top} from "./Top";
import {ILoSGame} from "./app";
import {Status} from "./Status";
import {PlayerInfo} from "./playerInfo/PlayerInfo";
import {Shop} from "./shop/Shop";


export class Gui {

    top:Top;
    status:Status;
    userInfo:PlayerInfo;
    shop:Shop;
    game:ILoSGame;
    constructor(game: ILoSGame) {
        this.game = game;
        this.top = new Top(game);
        this.userInfo = new PlayerInfo(game);
        this.status = new Status(game);
        this.status.y = 30;
        game.app.stage.addChild(this.top,this.status);

    }



    update() {
        this.status.update();
    }

    openShop =(shop: Shop)=> {
        this.shop = shop;
        this.game.app.stage.addChild(this.shop);
    }
}