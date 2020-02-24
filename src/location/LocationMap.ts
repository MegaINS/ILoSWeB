import {Location} from "./Location";
import {Resources} from "../Resources";
import * as PIXI from 'pixi.js'

export class LocationMap extends Location {

    tileSize: number = 100;
    constructor(scr, warps,width, height) {
        super(warps,width, height);

        let loc = Resources.location.get(scr);

        let locSpr = new PIXI.Sprite(loc);

        this.addChild(locSpr);

    }


}