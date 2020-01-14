import {Resources} from "./Resources";
import {Button} from "./Button";
import {Network} from "./Network";


export class Question extends PIXI.Container{

    value;
    act;

    constructor(text:string,value,parent) {
        super();
        this.interactive = true;
        this.value = value;
        let bg2 = new PIXI.TilingSprite(Resources.bg, 250, 150);


        this.addChild(  bg2);

        const style = new PIXI.TextStyle({
            fill: "black",
            fontFamily: "Helvetica",
            fontSize: 14,
            align: "center"
        });
        let textC = new PIXI.Text(text, style);
        textC.anchor.x = 0.5;
        textC.x = 100;
        textC.y = 10;
        this.addChild(textC);




        let bEnter = new Button(Resources.status.enter, () => {parent.removeChild(this)});
        bEnter.setTransform(190, 100);
        this.addChild(bEnter);

        let text2 = new PIXI.Text("Количество", style);
        text2.x = 10;
        text2.y = 50;
        this.addChild(text2);


        let input = new PIXI.UI.TextInput({value:this.value,width:100});

        let uiStage = new PIXI.UI.Stage(100, 100);
        uiStage.setTransform(100,40);
        uiStage.addChild(input);
        this.addChild(uiStage);

        let bBuy = new Button(Resources.shop.buttonBuy, () => {
            this.value = input.value;
            this.act();
            parent.removeChild(this)
        });
        bBuy.x = 10;
        bBuy.y = 100;
        this.addChild(bBuy);
    }
}