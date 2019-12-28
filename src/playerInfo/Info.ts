import {Resources} from "../Resources";
import {Button} from "../Button";

export class Info extends PIXI.Container {
    constructor() {
        super();

        var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 400, 440);
        bgScroll.x = 15;
        bgScroll.y = 10;


        var scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 400,
            height: 440,
            scrollX: false,
            scrollY: true,
        });

        var scrollbar = new PIXI.UI.ScrollBar({
            track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 1,13),
            handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13,1),
            scrollingContainer: scrollingContainer,
            vertical: true,
            autohide: false
        });


        var uiStage = new PIXI.UI.Stage(400, 440);
        uiStage.x = 15;
        uiStage.y = 10;


        scrollbar.anchorRight = 0;


        uiStage.addChild(scrollingContainer, scrollbar);

        var bLogfull = new Button(Resources.userInfo.info.buttonSave, () => {

        });
        bLogfull.x = 170;

        bLogfull.y = 460;


        this.addChild(bgScroll, uiStage, bLogfull);


    }
}