import * as PIXI from "pixi.js";
import {ILoSGame} from "./app";
import {Resources} from "./Resources";


export class Chat extends PIXI.Container {

    constructor(game: ILoSGame) {
        super();

        const beatifulRect = new PIXI.Graphics();


        beatifulRect.beginFill(0xAA0000);
        beatifulRect.drawRect(0, 0, game.CANVAS_WIDTH-270, 300);
        beatifulRect.endFill();
        this.addChild(beatifulRect);


        let bg1 = new PIXI.TilingSprite(Resources.chat.bg,42, 300);
        this.addChild(bg1);

        let input = new PIXI.UI.TextInput({value:'12111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113',width:1000,height:50});

        input.x =50;
        input.y =240;
        var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 230);


        var scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 370,
            height: 240,
            scrollX: false,
            scrollY: true,
        });

        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13,1),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13,1),
            scrollingContainer: scrollingContainer,
            vertical: true,
            autohide: false
        });
        const style = new PIXI.TextStyle({
            fill: "black",
            fontFamily: "Helvetica",
            fontSize: 14,
            align: "center"
        });
        var text = new PIXI.Text("МОЙ ИНВЕНТАРЬ", style);
        text.anchor.x = 0.5;
        text.x = 215;

        // scrollingContainer.addChild(text);

        var uiStage = new PIXI.UI.Stage(game.CANVAS_WIDTH-270-50, 300);

        uiStage.x = 50;

        // scrollbar.anchorTop = 0;
        scrollbar.anchorRight = 0;


        uiStage.addChild(scrollingContainer, scrollbar,input);


        this.addChild(uiStage)

    }


}