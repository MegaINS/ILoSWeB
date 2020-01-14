import {Resources} from "./Resources";
import * as PIXI from 'pixi.js'

export class Player extends PIXI.Sprite{

    items;

    constructor() {
        super(Resources.player);
    }

}