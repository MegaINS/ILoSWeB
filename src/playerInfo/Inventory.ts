import {Resources} from "../Resources";
import {Button} from "../Button";
import {Item} from "../Item";
import {Network} from "../Network";



export  class Inventory extends PIXI.Container {
    itemSelected;
    scrollingContainer;
    bWear;
    bTakeoff;
    bUse;
    bDrop;

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

        this.bWear = new Button(Resources.userInfo.inventory.wear, () => {
            Network.sendPacket("inventoryAction",{action:"TAKE",id:this.itemSelected.id})
        });

        this.bWear.x = 25;

        this.bTakeoff = new Button(Resources.userInfo.inventory.takeoff, () => {
            Network.sendPacket("inventoryAction",{action:"TAKEOFF",id:this.itemSelected.id})
        });

        this.bTakeoff.x = 100;

        this.bUse = new Button(Resources.userInfo.inventory.use, () => {
            Network.sendPacket("inventoryAction",{action:"USE",id:this.itemSelected.id})
        });

        this.bUse.x = 180;

        this.bDrop = new Button(Resources.userInfo.inventory.drop, () => {
            Network.sendPacket("inventoryAction",{action:"DROP",id:this.itemSelected.id})
        });

        this.bDrop.x = 305;
        this.bWear.y = this.bTakeoff.y = this.bUse.y = this.bDrop.y = 450;

        this.bWear.state(false);
        this.bTakeoff.state(false);
        this.bUse.state(false);
        this.bDrop.state(false);

        this.addChild(text, bgScroll, uiStage, this.bWear, this.bTakeoff, this.bUse, this.bDrop);

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

                    this.bWear.state(false);
                    this.bTakeoff.state(false);
                    this.bUse.state(false);
                    this.bDrop.state(false);
                }else {
                    if(this.itemSelected != null){
                        this.itemSelected.selection(false);
                    }
                    itemSprite.selection(true);
                    this.itemSelected = itemSprite;

                    switch (item.itemAction) {
                        case "use":
                            this.bUse.state(true);
                            this.bWear.state(false);
                            this.bTakeoff.state(false);
                            break;
                        case 'take':
                            this.bUse.state(false);
                            this.bWear.state(true);
                            this.bTakeoff.state(false);
                            break;
                        default:
                            this.bUse.state(false);
                            this.bWear.state(false);
                            this.bTakeoff.state(false);
                            break;
                    }


                    this.bDrop.state(true);
                }
            };


            this.scrollingContainer.addChild(itemSprite)

        }
    }
}