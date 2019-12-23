import * as PIXI from "pixi.js";


export class Button extends PIXI.Sprite {

    func;
    textureArray;
    isActive:boolean;

    constructor(textureArray, func:()=>void) {
        super(textureArray.btn);
        this.func = func;
        this.textureArray = textureArray;

        this.state(true);
    }

    state(active){

        if(active !== this.isActive){
            this.isActive = active;
            this.texture = active ? this.textureArray.btn : this.textureArray.dis;
            this.interactive = active;

        }

    }

    mouseup = () => {
        if (this.isActive) {
            this.texture = this.textureArray.over;
            this.func();
        }
    };

    mousedown = () => {
        if (this.isActive) {
            this.texture = this.textureArray.sel;
        }
    };

    mouseover = () => {

        if (this.isActive) {
            this.texture = this.textureArray.over;
        }
    };
    mouseout = () => {
        if (this.isActive) {
            this.texture = this.textureArray.btn;
        }
    };



}