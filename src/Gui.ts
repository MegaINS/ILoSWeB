import {Top} from "./Top";
import {ILoSGame} from "./app";
import {Status} from "./Status";
import {PlayerInfo} from "./playerInfo/PlayerInfo";
import {Shop} from "./shop/Shop";
import {Question} from "./Question";


export class Gui {

    top:Top;
    status:Status;
    userInfo:PlayerInfo;
    shop:Shop;
    game:ILoSGame;
    location;
    constructor(game: ILoSGame) {
        this.game = game;
        this.top = new Top(game);
        this.userInfo = new PlayerInfo(game);
        this.status = new Status(game);
        this.status.y = 30;
        game.app.stage.addChild(this.top,this.status);
        this.status.setShow(true);
    }



    update() {

        this.status.update();
    }

    openShop =(shop: Shop)=> {
        this.shop = shop;
        if( this.location != null) {
            this.game.app.stage.removeChild(this.location);
            this.location.destroy();
            this.location = null;
        }
        this.status.setShow(false);
        this.game.app.stage.addChild(this.shop);
    };

    setLocation(location){
        if(this.shop!= null){
            this.game.app.stage.removeChild(this.shop);
            this.shop.destroy();
            this.shop = null;
        }
        this.status.setShow(true);
        this.location = location;
        this.game.app.stage.addChild(location);
    }
}