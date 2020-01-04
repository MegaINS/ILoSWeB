import {Resources} from "../Resources";
import {Button} from "../Button";
import {Types} from "./Types";
import * as PIXI from "pixi.js";


export class Groups extends PIXI.Container {

    currentType;
    types;
    name;

    constructor(name, types) {
        super();
        this.types = {};
        for (let i in types) {
            let type = types[i];
            this.types[type.src] = new Types(type.name, type.items)
        }


        this.name = name;
        var buttonContainer = new PIXI.Container();
        buttonContainer.x = 100;


        var bg_type1 = new PIXI.Sprite(Resources.shop.bg_type1);
        var bg_type2 = new PIXI.Sprite(Resources.shop.bg_type2);

        bg_type2.x = bg_type1.width;

        const style = new PIXI.TextStyle({
            fill: "#e4f297",
            fontFamily: "Helvetica",
            fontSize: 12,
            align: "center"
        });

        let first = true;
        for (let i in this.types) {

            let bTypes = new Button(Resources.shop.types[i], () => {this.showType(i);});

            let bg_type_count = new PIXI.Sprite(Resources.shop.bg_type_count);
            bg_type_count.y = 45;
            bg_type_count.x = 5 + bg_type2.x;
            bTypes.x = bg_type2.x;
            bg_type2.x += bTypes.width;


            let text = new PIXI.Text(this.types[i].items.length, style);
            text.x =  bg_type_count.x+12;
            text.y =  bg_type_count.y;
            this.addChild(text);
            buttonContainer.addChild(bTypes, bg_type_count,text);
            this.types[i].y = 65;
            if (first) {
                this.showType(i);
                first = !first;
            }
        }


        buttonContainer.addChild(bg_type1, bg_type2);


        this.addChild(buttonContainer);


    }

    showType=(name:string)=>{
        if(this.currentType != null){
            this.removeChild(this.currentType)
        }
        this.currentType =this.types[name];
        this.addChild(this.currentType);
    }
}