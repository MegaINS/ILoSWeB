import * as PIXI from "pixi.js";
import {ILoSGame} from "./app";
import {Resources} from "./Resources";

export class PlayerList extends PIXI.Container {


    scrollingContainer;
    scrollingHeight:number = 5;

    playerList ={};

    constructor(game: ILoSGame) {
        super();
        let height = 263;
        let width = 274;

        this.scrollingContainer = new PIXI.UI.ScrollingContainer({
            width:  width,
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

        uiStage.addChild(this.scrollingContainer,scrollbar);

        this.addChild(uiStage)

    }




    loadPlayersList (data){
        this.scrollingContainer.innerContainer.removeChildren();
        this.scrollingHeight = 5;
        for (let i = 0; i < data.list.length; i++) {
            this.addPlayerInPlayersList(data.list[i]);
        }
    }
    addPlayerInPlayersList (player){
        let id = player.id;

        var name = '<font  color="#000000">' + player.name +'['+player.level+']'+ '</font> ';

        var container = new PIXI.UI.Container();
        let privat = new PIXI.UI.Sprite(Resources.userList.private);
        let info = new PIXI.UI.Sprite(Resources.userList.info);
        info.x  = privat.x + privat.width;


        let dynamicText = new PIXI.UI.DynamicText(name, {
            style: { fontSize: 12},
            allowTags: true,
        });
        dynamicText.x =info.x + info.width+3;
        dynamicText.y =2;
        container.y = this.scrollingHeight;
        container.x = 10;


        container.addChild(privat,dynamicText,info);
        this.scrollingContainer.addChild(container);

        this.scrollingHeight += 13;

        this.playerList[id] = container;
    }

    removePlayerWithPlayersList (player){
        this.scrollingContainer.removeChild(this.playerList[player.id]);

        delete this.playerList[player.id];
        this.rebuildPlayerList();

    }
    rebuildPlayerList(){
        this.scrollingHeight = 5;

       for(let id in this.playerList) {
           let player = this.playerList[id];
           player.y = this.scrollingHeight;
           this.scrollingHeight += 13;
       }

    }



}