import {Resources} from "./Resources";

export class Item extends PIXI.UI.Container{

    bgClass;
    textureBg;
    id;
    constructor(item) {
        super(360,58);
        this.id = item.id;
        this.interactive = true;
        this.textureBg = Resources.itemList.bg_class[item.itemClass];





        var bg = new PIXI.UI.Sprite(Resources.itemList.item_bg);
        bg.x = 2;
        bg.y = 1;

        this.bgClass = new PIXI.UI.TilingSprite(this.textureBg.ord,262,58);
        this.bgClass.x = 92;
        this.bgClass.y = 1;

        var bg_right = new PIXI.UI.Sprite(Resources.itemList.bg_right);
        bg_right.x = 354;
        bg_right.y = 1;
        var bg_item_weight = new PIXI.UI.Sprite(Resources.itemList.bg_item_weight);
        bg_item_weight.x = 305;
        bg_item_weight.y = 20;

        const style = new PIXI.TextStyle({
            fill: "white",
            fontFamily: "Helvetica",
            fontSize: 12,
            align: "center"
        });

        var textWeight = new PIXI.UI.Text((item.weight/10).toFixed(1), style);
        textWeight.anchorRight = 25;
        textWeight.y = 30;

        var textAmount = new PIXI.UI.Text(item.amount+" шт", style);
        textAmount.anchorRight = 15;
        textAmount.y = 4;

        console.log(item.itemType)
        var material;
        switch (item.itemType) {
            case "material":
                material = new PIXI.UI.Sprite(Resources.materials[item.scr]);
                break;
            case "book":
                material = new PIXI.UI.Sprite(Resources.books[item.scr]);
                break;
            default:
                material = new PIXI.UI.Sprite(Resources.materials[" materials-10"]);

        }
        material.x = 2;
        material.y = 1;


        var itemLayers = new PIXI.UI.Sprite(Resources.itemLayers[item.itemClass]);
        itemLayers.x = 2;
        itemLayers.y = 1;

        var name = new PIXI.UI.Text(item.name, style);
        name.x = 100;
        name.y = 4;

        var textClass = new PIXI.UI.Text('КЛАСС ' +item.itemClass, style);
        textClass.x = 100;
        textClass.y = 24;

        this.addChild(itemLayers);
        this.addChild(material);
        this.addChild(bg);
        this.addChild( this.bgClass);
        this.addChild(bg_right);
        this.addChild(bg_item_weight);
        this.addChild(textClass);

        this.addChild(name);

        this.addChild(textAmount);
        this.addChild(textWeight);
    }

    selection(val) {
        this.bgClass.sprite.texture = val ? this.textureBg.sel :this.textureBg.ord;
    }
}