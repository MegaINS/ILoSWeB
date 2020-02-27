import {Location} from "./Location";
import {Resources} from "../Resources";
import * as PIXI from 'pixi.js'


export class LocationMine extends Location {

    tileSize: number = 102;
    resources ;
    sprites;
    area ;

    constructor(game, width, height, warps, tileMap, resources, area) {
        super(game, warps, width, height, tileMap);

        this.resources = resources;
        this.area = area;
        this.sprites = [];

        const style = new PIXI.TextStyle({
            fill: "white",
            fontFamily: "Helvetica",
            fontSize: 12,
            align: "center"
        });

        for (let i = 0; i < width; i ++) {
            for (let j = 0; j < height; j ++) {

                let sprite = new PIXI.Sprite();
                this.sprites[i + j * height] = sprite;

                this.setSpriteTex(i, j);
                sprite.setTransform(i * 102,j * 102);

                let textWeight = new PIXI.Text(i+" | "+j, style);
                textWeight.setTransform(40+ i * 102,30+ j * 102);

                this.addChild(sprite,textWeight);
            }
        }

        for (let i = 0; i < this.warps.length; i += 1) {
            let warp = this.warps[i];
            let sprite = new PIXI.Sprite(Resources.warp);
            sprite.setTransform(warp.x * 102,warp.y * 102);
            this.addChild(sprite);

        }

        for (let i = 0; i < this.resources.length; i += 1) {
            let resource = this.resources[i];
            let sprite = new PIXI.Sprite(Resources.resources[resource.scr]);
            sprite.setTransform(resource.x * 102,resource.y * 102);
            resource.sprite = sprite;
            this.addChild(sprite);
        }

    }

    update(x, y) {

        this.tileMap[x + y * this.heightLoc] = 0;

        this.setSpriteTex(x, y);
        if (x - 1 > -1 && this.tileMap[x-1 + y * this.heightLoc] === 0 ) this.setSpriteTex(x - 1, y);

        if (x + 1 < this.widthLoc && this.tileMap[x+1 + y * this.heightLoc] === 0) this.setSpriteTex(x + 1, y);
        if (y - 1 > -1 && this.tileMap[x + (y-1) * this.heightLoc] === 0) this.setSpriteTex(x, y - 1);
        if (y + 1 < this.heightLoc && this.tileMap[x + (y+1) * this.heightLoc] === 0) this.setSpriteTex(x, y + 1);

        let resource = this.resources.find(r => r.x === x && r.y === y);
        if (resource != null) {
            this.removeChild(resource.sprite);
            this.resources.splice(this.resources.indexOf(resource),1);
        }


    }

    setSpriteTex = (x, y)=> {
        let isFullCenter = this.tileMap[x + y * this.heightLoc] > 0;
        let tex;
        if (isFullCenter) {
            tex = Resources.danges[this.area][0].full[this.getRandomInt(0, Resources.danges[this.area][0].full.length)];
        } else {
            let isFullUp = this.tileMap[x + (y - 1) * this.heightLoc] == 0;
            let isFullDown = this.tileMap[x + (y + 1) * this.heightLoc] == 0;
            let isFullLeft = this.tileMap[(x - 1) + y * this.heightLoc] == 0;
            let isFullRight = this.tileMap[(x + 1) + y * this.heightLoc] == 0;

            let index = (isFullUp ? 8 : 0) + (isFullDown ? 4 : 0) + (isFullLeft ? 2 : 0) + (isFullRight ? 1 : 0);

            tex = Resources.danges[this.area][0].paths[index];
        }
        this.sprites[x + y * this.heightLoc].texture = tex;
    };
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}