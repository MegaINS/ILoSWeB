import * as PIXI from "pixi.js";
import {Resources} from "../Resources";
import {Button} from "../Button";
import {ILoSGame} from "../app";
import {Inventory} from "./Inventory";
import {Profile} from "./Profile";
import {Log} from "./Log";
import {Info} from "./Info";

export class PlayerInfo extends PIXI.Container {

    sections;
    dragging: boolean;
    pos: PIXI.Point;
    active: boolean = false;
    game: ILoSGame;

    constructor(game) {
        super();

        this.game = game;
        this.sections = {
            active: null,
            profile: new Profile(),
            inventory: new Inventory(),
            log: new Log(),
            info: new Info()
        };


        //  this.x = 50;
        // this.y = 100;

        this.interactive = true;


        let bg = new PIXI.TilingSprite(Resources.userInfo.bg, 168, 355);

        bg.y = 175;





        let bg2 = new PIXI.TilingSprite(Resources.bg, 425, 530);

        bg2.x = 168;
        bg2.interactive = true;

        bg2.on("mouseup", () => {
            this.dragging = false;
        });
        bg2.on("mousedown", (event) => {
            this.dragging = true;
            this.pos = event.data.getLocalPosition(this.parent);
        });
        bg2.on("mousemove", (event) => {
            if (this.dragging) {
                const newPos = event.data.getLocalPosition(this.parent);
                this.x -= Math.round(this.pos.x - newPos.x);
                this.y -= Math.round(this.pos.y - newPos.y);
                this.pos = newPos;
            }
        });

        let bg_attrs = new PIXI.Sprite(Resources.userInfo.bg_attrs);
        let bg_items = new PIXI.Sprite(Resources.userInfo.bg_items);
        let bg_stats = new PIXI.Sprite(Resources.userInfo.bg_stats);

        let bg_frame = new PIXI.Sprite(Resources.userInfo.bg_frame);

        bg_frame.x = 593;
        bg_stats.y = 145;
        bg_items.y = 180;




        let buttons = new PIXI.Container();
        buttons.y = 10;
        buttons.x = 188;


        let bg_group1 = new PIXI.Sprite(Resources.userInfo.bg_group1);

        let bProfile = new Button(Resources.userInfo.buttonProfile, () => {
            this.setSection('profile')
        });
        bProfile.x = 3;
        let bInventory = new Button(Resources.userInfo.buttonInventory, () => {
            this.setSection('inventory')
        });
        bInventory.x = 123;

        let bLog = new Button(Resources.userInfo.buttonLog, () => {
            this.setSection('log')
        });
        bLog.x = 199;

        let bInfo = new Button(Resources.userInfo.buttonInfo, () => {
            this.setSection('info')
        });
        bInfo.x = 305;

        let bg_group2 = new PIXI.Sprite(Resources.userInfo.bg_group2);
        bg_group2.x = 381;


        buttons.addChild(bg_group1, bInfo, bProfile, bLog, bInventory, bg_group2);


        this.addChild(bg, bg2, buttons, bg_attrs, bg_items, bg_stats, bg_frame);


        this.sections.profile.x = this.sections.inventory.x = this.sections.log.x = this.sections.info.x = 168;
        this.sections.profile.y = this.sections.inventory.y = this.sections.log.y = this.sections.info.y = 40;
        const style = new PIXI.TextStyle({
            fill: "#e4f297",
            fontFamily: "Helvetica",
            fontSize: 12,
            align: "center"
        });

        let nick = new PIXI.Text('Test', style);
        nick.x = 70;
        nick.y = 5;
        this.addChild(nick);


        let level = new PIXI.Text('2', style);

        level.x = 131;
        level.y = 37;
        this.addChild(level);


        let money = new PIXI.Text('123.2', style);

        money.x = 125;
        money.y = 78;
        this.addChild(money);


        let power = new PIXI.Text('22', style);

        power.x = 13;
        power.y = 159;
        this.addChild(power);


        let stamina = new PIXI.Text('33', style);

        stamina.x = 55;
        stamina.y = 159;
        this.addChild(stamina);

        let concentration = new PIXI.Text('44', style);

        concentration.x = 99;
        concentration.y = 159;
        this.addChild(concentration);

        let intellect = new PIXI.Text('55', style);
        intellect.x = 141;
        intellect.y = 159;
        this.addChild(intellect);


    }




    setSection(name) {
        const section = this.sections[name];
        if (this.sections.active !== section) {
            if (this.sections.active != null) {
                this.removeChild(this.sections.active);
            }
            this.sections.active = section;
            if (section != null) {
                this.addChild(section);
            }
        }
    }


    show(name) {

        if (this.active) {
            if (this.sections.active !== this.sections[name]) {
                this.setSection(name);
            } else {
                this.game.app.stage.removeChild(this);
                this.active = false;
            }
        } else {
            this.setSection(name);
            this.game.app.stage.addChild(this);
            this.active = true;
        }


    }


}