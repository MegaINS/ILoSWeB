import * as PIXI from 'pixi.js'
import {Resources} from "./Resources";
import {Button} from "./Button";
import {Player} from "./Player";
import {ILoSGame} from "./app";
import {Network} from "./Network";


export class Status extends PIXI.Container {

    dragging: boolean;
    show:boolean = false;
    pos: PIXI.Point;
    game:ILoSGame;
    textFields:PIXI.Text[] = [];
    bEnter;
    constructor(game:ILoSGame) {
        super();
        this.game = game;
        this.interactive = true;

        let bg_attrs = new PIXI.Sprite(Resources.status.bg_attrs);
        let bg_items2 = new PIXI.Sprite(Resources.status.bg_items2);
        let bg_stats = new PIXI.Sprite(Resources.status.bg_stats);

        bg_stats.setTransform(0, bg_attrs.height - 2);
        bg_items2.setTransform(0, bg_stats.y + bg_stats.height);

        this.addChild(bg_attrs, bg_stats, bg_items2);


        let bRest = new Button(Resources.status.rest, () => {
        });
        bRest.setTransform(120, 230);

        let bCenter = new Button(Resources.status.center, () => {
        });
        bCenter.setTransform(70, 235);

        this.bEnter = new Button(Resources.status.enter, () => {Network.sendPacket('action', {action: 'ENTER'})
        });
        this.bEnter.setTransform(8, 230);

        this.addChild(this.bEnter, bRest, bCenter);


        const style = new PIXI.TextStyle({
            fill: "#e4f297",
            fontSize: 12,
            fontVariant: "small-caps"
        });


        let name = new PIXI.Text('', style);
        name.setTransform(70, 8);

        let level = new PIXI.Text('', style);
        level.setTransform(134, 41);

        let money = new PIXI.Text('', style);
        money.setTransform(125, 83);

        let power = new PIXI.Text('', style);
        power.setTransform(14, 163);

        let stamina = new PIXI.Text('', style);
        stamina.setTransform(56, 163);

        let concentration = new PIXI.Text('', style);
        concentration.setTransform(100, 163);

        let intellect = new PIXI.Text('', style);
        intellect.setTransform(142, 163);

        let health = new PIXI.Text('', style);
        health.setTransform(52, 109);

        let healthLine = new PIXI.Text('/', style);
        healthLine.setTransform(75, 109);

        let healthMax = new PIXI.Text('', style);
        healthMax.setTransform(80, 109);

        let energy = new PIXI.Text('', style);
        energy.setTransform(52, 129);

        let energyLine = new PIXI.Text('/', style);
        energyLine.setTransform(75, 129);

        let energyMax = new PIXI.Text('', style);
        energyMax.setTransform(80, 129);

        this.textFields['name'] = name;
        this.textFields['level'] = level;
        this.textFields['health'] = health;
        this.textFields['healthMax'] = healthMax;
        this.textFields['energy'] = energy;
        this.textFields['energyMax'] = energyMax;
        this.textFields['money'] = money;
        this.textFields['power'] = power;
        this.textFields['intellect'] = intellect;
        this.textFields['concentration'] = concentration;
        this.textFields['stamina'] = stamina;

        this.addChild(name, level, money, power, stamina, concentration, intellect, health, healthLine, healthMax, energy, energyLine, energyMax);


    }

    setShow(value){
        this.show = value;
    }

    update() {

        if(this.show){
            for (let i in this.textFields) {
                this.textFields[i].text = this.game.player[i]
            }

            this.bEnter.state(this.game.gui.location.playerIsInWarp(this.game.player))
        }

    }


    mouseup = () => {
        this.dragging = false;
    };

    mousedown = (event) => {
        this.dragging = true;
        this.pos = event.data.getLocalPosition(this.parent);
    };

    mousemove = (event) => {
        if (this.dragging) {
            const newPos = event.data.getLocalPosition(this.parent);
            this.x -= Math.round(this.pos.x - newPos.x);
            this.y -= Math.round(this.pos.y - newPos.y);
            this.pos = newPos;
        }
    };
}