import {Resources} from "../Resources";
import {Button} from "../Button";
import {Item} from "../Item";



export  class Inventory extends PIXI.Container {
    itemSelected;
    scrollingContainer;
    constructor() {
        super();


        this.itemSelected = null;

        var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 420);
        bgScroll.x = 30;
        bgScroll.y = 20;

        this.scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 370,
            height: 420,
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

        var uiStage = new PIXI.UI.Stage(370, 420);
        uiStage.x = 30;
        uiStage.y = 20;


        // scrollbar.anchorTop = 0;
        scrollbar.anchorRight = 0;


        uiStage.addChild(this.scrollingContainer, scrollbar);

        var bWear = new Button(Resources.userInfo.inventory.wear, () => {

        });
        bWear.x = 25;

        var bTakeoff = new Button(Resources.userInfo.inventory.takeoff, () => {

        });
        bTakeoff.x = 100;

        var bUse = new Button(Resources.userInfo.inventory.use, () => {

        });
        bUse.x = 180;

        var bDrop = new Button(Resources.userInfo.inventory.drop, () => {

        });
        bDrop.x = 305;
        bWear.y = bTakeoff.y = bUse.y = bDrop.y = 450;


        this.addChild(text, bgScroll, uiStage, bWear, bTakeoff, bUse, bDrop);

    }

    loadItems(items) {
        this.scrollingContainer.innerContainer.removeChildren();
        let y = 0;
        for (let i = 0;i<items.length;i++) {
            let item = items[i];
            let itemSprite = new Item(item);
            itemSprite.y = y;
            y+=60;

            itemSprite.container.mouseup = () => {
                if(this.itemSelected === itemSprite){
                    itemSprite.selection(false);
                    this.itemSelected = null;
                }else {
                    if(this.itemSelected != null){
                        this.itemSelected.selection(false);
                    }
                    itemSprite.selection(true);
                    this.itemSelected = itemSprite;
                }
            };


            this.scrollingContainer.addChild(itemSprite)

        }
    }
}