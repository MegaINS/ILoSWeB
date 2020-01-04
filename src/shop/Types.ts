import {Resources} from "../Resources";
import {Item} from "../Item";


export   class Types extends PIXI.Container{

    items;
    itemSelected;
    constructor(name,items) {
        super();
        this.items = items;


        var bgScroll = new PIXI.UI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 420);


        let scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 370,
            height: 420,
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



        var uiStage = new PIXI.UI.Stage(370, 420);
        uiStage.x = 30;


        scrollbar.anchorRight = 0;

        uiStage.addChild(bgScroll,scrollingContainer, scrollbar);
        const style = new PIXI.TextStyle({
            fill: "yellow",
            fontFamily: "Helvetica",
            fontSize: 20,
            wordWrapWidth: 400
        });
        var text = new PIXI.UI.Text(name, style);
        text.align = "center";


        scrollingContainer.addChild(text);

        this.addChild(uiStage);

        scrollingContainer.innerContainer.removeChildren();
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


            scrollingContainer.addChild(itemSprite)

        }

    }



}