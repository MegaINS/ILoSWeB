import {Resources} from "../Resources";
import {Location} from "./Location";


export class LocationHab extends Location {

    tileSize:number = 102;

    constructor(weight, height, warps) {
        super(warps);

        for (let i = 0; i < weight; i ++) {
            for (let j = 0; j < height; j ++) {
                let sprite = new PIXI.Sprite(/*Resources.danges[area][0].paths[15]*/);
                sprite.setTransform( i * this.tileSize,j * this.tileSize);
                this.addChild(sprite);

            }
        }

        for (let i = 0; i < warps.length; i ++) {
            let warp = warps[i];
            let sprite = new PIXI.Sprite(/*Resources.warp*/);
            sprite.setTransform( warp.x * this.tileSize,warp.y * this.tileSize);
            this.addChild(sprite);
        }

    }
}