import {Resources} from "../Resources";

export class Skill extends PIXI.UI.Container {

    constructor(data) {
        super();

        var texture;
        switch (data.skillType) {
            case "production":
                texture = Resources.userInfo.profile.skillList.orange.bg_1;
                break;
            case "mine":
                texture = Resources.userInfo.profile.skillList.green.bg_1;
                break;
            case "attack":
                texture = Resources.userInfo.profile.skillList.red.bg_1;
                break;
            default:
                texture = Resources.userInfo.profile.skillList.blue.bg_1;
                break;
        }


        var greenBg_1 = new PIXI.UI.Sprite(texture);
        this.addChild(greenBg_1);


        const style = new PIXI.TextStyle({
            fill: "yellow",
            fontFamily: "Helvetica",
            fontSize: 16,
            wordWrapWidth: 400
        });
        var name = new PIXI.UI.Text(data.name + " " + data.exp + "/" + data.expMax, style);
        name.x = 50;
        name.y = 18;

        var level = new PIXI.UI.Text(data.level, style);
        level.x = 345;
        level.y = 18;

        this.addChild(name, level);


        var a = 70;
        var bg_bar = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.bg_bar);
        var bar = new PIXI.UI.TilingSprite(Resources.userInfo.profile.skillList.bar, (a * data.exp+1) / data.expMax, 7);

        bg_bar.x = 250;
        bg_bar.y = 22;

        bar.x = 252;
        bar.y = 24;
        this.addChild(bg_bar, bar);


    }
}