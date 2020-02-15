import * as PIXI from "pixi.js";
import {ILoSGame} from "./app";
import {Resources} from "./Resources";


export class Chat extends PIXI.Container {

    scrollingContainer;
    scrollingHeight:number = 5;
    constructor(game: ILoSGame) {
        super();
        let height = 263;
        let bg1 = new PIXI.TilingSprite(Resources.chat.bg,42, 263);
        this.addChild(bg1);


        this.scrollingContainer = new PIXI.UI.ScrollingContainer({
            width:   game.CANVAS_WIDTH - bg1.width - 300,
            height: height,
            scrollX: false,
            scrollY: true,
        });




        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13,1),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13,1),
            scrollingContainer: this.scrollingContainer,
            vertical: true,
            autohide: false
        });
        scrollbar.anchorRight = 0;

        var uiStage = new PIXI.UI.Stage(this.scrollingContainer.width+scrollbar.width,this.scrollingContainer.height);

        uiStage.x = bg1.width;
        uiStage.addChild(this.scrollingContainer,scrollbar);


        this.addChild(uiStage);

    }


    addMessage(text){


        let dynamicText = new PIXI.UI.DynamicText(text, {
            style: { fontSize: 18},
            allowTags: true,
            width: '100%',
        });
        dynamicText.y = this.scrollingHeight;
        dynamicText.x = 5;
        this.scrollingHeight += 20;
        this.scrollingContainer.addChild(dynamicText);
    }

}