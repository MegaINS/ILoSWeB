import {Resources} from "../Resources";
import {Location} from "./Location";
import * as PIXI from 'pixi.js'

export class LocationHab extends Location {

    tileSize:number = 102;

    constructor(game, width, height, warps,area) {
        super(game, warps,width, height, new Array<number>(width * height).fill(0));

        for (let i = 0; i < width; i ++) {
            for (let j = 0; j < height; j ++) {
                let sprite = new PIXI.Sprite(Resources.danges[area][0].paths[15]);
                sprite.setTransform( i * this.tileSize,j * this.tileSize);
                this.addChild(sprite);

            }
        }

        for (let i = 0; i < warps.length; i ++) {
            let warp = warps[i];
            let sprite = new PIXI.Sprite(Resources.warp);
            sprite.setTransform( warp.x * this.tileSize,warp.y * this.tileSize);
            this.addChild(sprite);
        }

    }


}