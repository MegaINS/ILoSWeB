import {ILoSGame} from "./app";
import {Resources} from "./Resources";
import {Button} from "./Button";
import * as PIXI from "pixi.js";

export class Top extends PIXI.Container {


    constructor(game: ILoSGame) {
        super();

        let bg = new PIXI.TilingSprite(Resources.top.bg, game.CANVAS_WIDTH, 25);

        let bg_title = new PIXI.Container();

        bg_title.x = game.CANVAS_WIDTH / 2 - 126;

        let bg_title_1 = new PIXI.Sprite(Resources.top.bg_title_1);
        let bg_title_2 = new PIXI.TilingSprite(Resources.top.bg_title_2, 200, 25);
        let bg_title_3 = new PIXI.Sprite(Resources.top.bg_title_3);

        bg_title_2.x = 26;
        bg_title_3.x = bg_title_2.x + bg_title_2.width;


        let buttons = new PIXI.Container();
        buttons.y = 3;
        buttons.x = 3;

        let bProfile = new Button(Resources.top.profile, () => {
            game.gui.userInfo.show('profile')
        });
        let bInventory = new Button(Resources.top.inventory, () => {
            game.gui.userInfo.show('inventory')
        });
        let bLog = new Button(Resources.top.log, () => {
            game.gui.userInfo.show('log')
        });
        let bInfo = new Button(Resources.top.info, () => {
            game.gui.userInfo.show('info')
        });
        let bClose = new Button(Resources.top.close, () => {
            document.location.href = "/logout.php";
        });


        bInventory.x = 89;
        bLog.x = bInventory.x + 63;
        bInfo.x = bLog.x + 81;
        bClose.x = game.CANVAS_WIDTH - 90;


        bg_title.addChild(bg_title_1, bg_title_2, bg_title_3);

        buttons.addChild(bInfo, bProfile, bLog, bInventory, bClose);

        this.addChild(bg, bg_title, buttons);

    }
}