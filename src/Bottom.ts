import * as PIXI from "pixi.js";
import {ILoSGame} from "./app";
import {Chat} from "./Chat";
import {PlayerList} from "./PlayerList";
import {Resources} from "./Resources";
import {Button} from "./Button";
import {Network} from "./Network";


export class Bottom extends PIXI.Container {


    chat;
    playerList;
    constructor(game: ILoSGame) {
        super();

        let bottom = new PIXI.Container();


        const beatifulRect = new PIXI.Graphics();
        beatifulRect.beginFill(0xb3b3b3);
        beatifulRect.drawRect(0, 0, game.CANVAS_WIDTH, 300);
        beatifulRect.endFill();
        this.addChild(beatifulRect);



        let bg_left = new PIXI.Sprite(Resources.bottom.bg_left);
        let bg_right = new PIXI.Sprite(Resources.bottom.bg_right);
        let bg_blue = new PIXI.TilingSprite(Resources.bottom.bg_blue,38,37);
        bg_right.x = game.CANVAS_WIDTH - bg_right.width;
        bg_blue.width = game.CANVAS_WIDTH ;
        bottom.addChild(bg_blue,bg_left,bg_right);
        bottom.y = 300- bg_blue.height ;

        this.addChild(bottom);

        var input;




        let buttonClear = new Button(Resources.bottom.buttonClear,()=>{
            this.chat.clearChat();
        });
        let buttonSets = new Button(Resources.bottom.buttonSets,()=>{});
        let buttonMinimize = new Button(Resources.bottom.buttonMinimize,()=>{});

        let buttonEnter = new Button(Resources.bottom.buttonEnter,()=>{
            Network.sendPacket('chatevent', {message: input.text})
            input.text = "";
        });
        let buttonSmile = new Button(Resources.bottom.buttonSmile,()=>{});
        let buttonMe = new Button(Resources.bottom.buttonMe,()=>{});


        buttonClear.setTransform(15,5);
        buttonSets.setTransform(bg_right.x+17,5);
        buttonMinimize.setTransform(bg_right.x+57,5);

        buttonEnter.setTransform(bg_right.x-140,5);
        buttonSmile.setTransform(bg_right.x-100,5);
        buttonMe.setTransform(bg_right.x-60,5);



        let filter = new PIXI.UI.CheckBox({
            background:new PIXI.UI.Sprite(Resources.bottom.buttonFilter.btn),
            checkmark:new PIXI.UI.Sprite(Resources.bottom.buttonFilter.sel),
        });

        let uiStage = new PIXI.UI.Stage(filter.width,filter.height);

        uiStage.addChild(filter);
        uiStage.x = bg_right.x - uiStage.width;

       input = new PIXI.UI.TextInput({
            style: { fontSize: 12, fill: 0xdde1d4 },
            paddingTop: 5,
            paddingLeft: 5,
            value:'Привет',
            width: buttonEnter.x - bg_left.width - 30,
            height:25,
        });


        const blue = new PIXI.Graphics();


        blue.beginFill(0x00264d);
        blue.drawRect(0, 0, input.width,input.height);
        blue.endFill();
        bottom.addChild(blue);
        blue.x =bg_left.width+10;
        blue.y = 5;


        let uiStage2 = new PIXI.UI.Stage(input.width,input.height);

        uiStage2.addChild(input);
        uiStage2.x = bg_left.width+10;
        uiStage2.y = 5;
        bottom.addChild(buttonClear,buttonSets,buttonMinimize,uiStage,buttonEnter,buttonSmile,buttonMe,uiStage2);



        this.chat = new Chat(game);
        this.addChild(this.chat);


         this.playerList = new PlayerList(game);
         this.playerList.x =  game.CANVAS_WIDTH-287;
         this.addChild(this.playerList)

    }


}