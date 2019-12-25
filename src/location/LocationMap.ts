import {Location} from "./Location";
import {Resources} from "../Resources";


export class LocationMap extends Location {

    tileSize: number = 100;
    constructor(scr, warps) {
        super(warps);

        let loc;// = Resources.location.get(scr);

        let locSpr = new PIXI.Sprite(loc);

        this.addChild(locSpr);

    }


}