import {Resources} from "../Resources";
import {ILoSGame} from "../app";
import {Button} from "../Button";
import {Groups} from "./Groups";
import {Network} from "../Network";
import {Item} from "../Item";


export  class Shop  extends PIXI.Container{


    currentGroup;
    groups;
    containerShop;
    scrollingContainer;
    itemSelected;
    constructor(game:ILoSGame,data) {
        super();
        this.groups ={};
        for(let i in data.groups){
           let group = data.groups[i];
            this.groups[group.src] = new Groups(group.name, group.types)
        }

        this.y= 25;

        let bg2 = new PIXI.TilingSprite(Resources.bg, 425, 530);
        bg2.width = game.CANVAS_WIDTH;
        bg2.height =  game.CANVAS_HEIGHT;
        this.addChild(  bg2);

        this.initMyInventory();
        this.initShopInventory();


        game.app.stage.addChild(this);

    }

    initMyInventory(){
        let bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 420);
        bgScroll.x = 31;
        bgScroll.y = 21;


        this.scrollingContainer = new PIXI.UI.ScrollingContainer({
            width: 370,
            height: 420,
            scrollX: false,
            scrollY: true,
        });

        let scrollbar = new PIXI.UI.ScrollBar({
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
        let text = new PIXI.Text("МОЙ ИНВЕНТАРЬ", style);
        text.anchor.x = 0.5;
        text.x = 215;


        let uiStage = new PIXI.UI.Stage(370, 420);
        uiStage.x = 30;
        uiStage.y = 20;


        scrollbar.anchorRight = 0;


        uiStage.addChild(this.scrollingContainer, scrollbar);



        let bDrop = new Button(Resources.shop.buttonSell, () => {

        });
        bDrop.x = 240;
        bDrop.y = 450;


        this.addChild(text, bgScroll, uiStage,  bDrop);
    }

    initShopInventory=()=>{


        this.containerShop = new PIXI.Container();
        this.containerShop.x = 400;

        const style = new PIXI.TextStyle({
            fill: "black",
            fontFamily: "Helvetica",
            fontSize: 14,
            align: "center"
        });

        let text = new PIXI.Text("ВСЕ ТОВАРЫ", style);
        text.anchor.x = 0.5;
        text.x = 215;

        let bBuy = new Button(Resources.shop.buttonBuy, () => {
            if(this.currentGroup.currentType.itemSelected!=null){
                Network.sendPacket('action', {
                    action: 'BUY_ITEM',
                    data: [
                        this.currentGroup.currentType.itemSelected.id,
                        (Math.random() * 5) + 1]
                });
            }
        });
        bBuy.x = 40;
        bBuy.y = 580;



        let buttonContainer = new PIXI.Container();
        buttonContainer.y = 20;
        buttonContainer.x = 100;


        let bg_group1 = new PIXI.Sprite(Resources.shop.bg_group1);
        let bg_group2 = new PIXI.Sprite(Resources.shop.bg_group2);

        let bAll = new Button(Resources.shop.classAll, () => {

        });
        bAll.x = 3;
        bg_group2.x = 219;
        buttonContainer.addChild(bg_group1,bAll);




        for (let i = 1; i < 8; i++) {
            let bClass= new Button(Resources.shop['class'+i], () => {

            });
            bClass.x =3+ i*27;
            buttonContainer.addChild(bClass);

        }
        buttonContainer.addChild(bg_group2);


        this.containerShop.addChild(text,  bBuy,buttonContainer);


        this.addChild(this.containerShop);





        let groupsButtonContainer = new PIXI.Container();
        groupsButtonContainer.y = 55;
        groupsButtonContainer.x = 100;


        let bg_group3 = new PIXI.Sprite(Resources.shop.bg_group1);
        let bg_group4 = new PIXI.Sprite(Resources.shop.bg_group2);



        bg_group4.x = bg_group3.width;


        let first = true;
        for (let i in this.groups) {
            let bGroup= new Button(Resources.shop.groups[i], () => {
                this.showGroup(i);
            });
            bGroup.x =bg_group4.x;
            bg_group4.x+=bGroup.width;
            groupsButtonContainer.addChild(bGroup);
            this.groups[i].y =85;

            if(first){
                this.showGroup(i);
                first = !first;
            }

        }
        groupsButtonContainer.addChild(bg_group3,bg_group4);



        this.containerShop.addChild(groupsButtonContainer);




    }


    showGroup=(name:string)=>{
        if(this.currentGroup != null){
            this.containerShop.removeChild(this.currentGroup)
        }
        this.currentGroup =this.groups[name];
        this.containerShop.addChild(this.currentGroup);
    };

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