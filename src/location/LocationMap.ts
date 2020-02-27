import {Location} from "./Location";
import {Resources} from "../Resources";
import * as PIXI from 'pixi.js'

export class LocationMap extends Location {

    tileSize: number = 100;
    constructor(game, scr, warps,width, height) {
        super(game, warps,width, height,new Array<number>(width * height).fill(0));

        let loc = Resources.location.get(scr);

        let locSpr = new PIXI.Sprite(loc);

        this.addChild(locSpr);

    }


}