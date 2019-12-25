import * as PIXI from 'pixi.js'
import {Resources} from "../Resources";

export abstract class Location extends PIXI.Container{

    warps;
    abstract tileSize:number;
    dragging: boolean;
    pos: PIXI.Point;
    cursor;

    enemys = [];

    protected constructor(warps) {
        super();

        this.warps = warps;
        this.zIndex = -1;
        this.interactive = true;

        this.cursor = new PIXI.Sprite(/*Resources.cursor[1]*/);
        this.cursor.zIndex = 9;
    }

    click = (event) => {

        const pos = event.data.getLocalPosition(this);
        // sendPacket('action', {
        //     action: 'CLICK',
        //     data: [
        //         Math.floor(pos.x / this.sizeTile),
        //         Math.floor(pos.y / this.sizeTile)
        //     ]
        // });
    };

    rightup = () => {
        this.dragging = false;

    };

    rightdown = (event) => {
        this.dragging = true;
        this.pos = event.data.getLocalPosition(this.parent);
    };

    mousemove = (event) => {
        const pos = event.data.getLocalPosition(this);

        this.cursor.x = Math.floor(pos.x / this.tileSize) * this.tileSize;
        this.cursor.y = Math.floor(pos.y / this.tileSize) * this.tileSize;

        if (this.dragging) {
            const a = event.data.getLocalPosition(this.parent);
            this.x -= Math.round(this.pos.x - a.x);
            this.y -= Math.round(this.pos.y - a.y);
            this.pos = a;
        }
    };

    mouseover = () => {
        this.addChild(this.cursor);
    };

    mouseout = () => {
        this.removeChild(this.cursor);
    };

    spawn(player, x, y) {
        player.x = x * this.tileSize;
        player.y = y * this.tileSize;
        this.addChild(player);
    }

    move(player, x, y) {
        player.x = x * this.tileSize;
        player.y = y * this.tileSize;
    }


    spawnEnemy(id, x, y) {
        let enemy = new PIXI.Sprite(/*Resources.enemy*/);
        enemy.x = x * this.tileSize + 15;
        enemy.y = y * this.tileSize - 15;
        this.enemys[id] = enemy;
        this.addChild(enemy);
    }

    moveEnemy(id, x, y) {
        let enemy = this.enemys[id];
        enemy.x = x * this.tileSize + 15;
        enemy.y = y * this.tileSize - 15;
    }

    removeEnemy(id) {
        this.removeChild(this.enemys[id]);
        this.enemys[id] = null;
    }

    playerIsInWarp(player) {
        for (let i = 0; i < this.warps.length; i += 1) {
            const warp = this.warps[i];
            if (player.x / this.tileSize == warp.x && player.y / this.tileSize == warp.y) {
                return true;
            }
        }
        return false;
    }

}


