import * as PIXI from "pixi.js";
import {Gui} from "./Gui";
import LoaderResource = PIXI.LoaderResource;
import Loader = PIXI.Loader;
import {Resources} from "./Resources";

window.onload = () => {
    var game = new ILoSGame();
    game.load();
};


export class ILoSGame {

    app: PIXI.Application;
    gui: Gui;
    CANVAS_HEIGHT: number = 650;
    CANVAS_WIDTH: number = window.innerWidth;


    load = () => {
        PIXI.Loader.shared
            .add('status', '/assets/img/json/status.json')
            .add('userInfo', '/assets/img/json/userInfo.json')
            .add('scroll', '/assets/img/json/scroll.json')
            .add('itemList', '/assets/img/json/itemList.json')
            .add('materials', '/assets/img/json/materials.json')
            .add('itemLayers', '/assets/img/json/itemLayers.json')
            .add('danges', '/assets/img/json/danges.json')
            .add('shop', '/assets/img/json/shop.json')
            .load(this.init);

    };

    init = (loader: Loader, resources: Partial<Record<string, LoaderResource>>) => {

        Resources.load(loader,resources);

        this.app = new PIXI.Application({
            width: this.CANVAS_WIDTH,
            height: this.CANVAS_HEIGHT
        });
        document.body.appendChild(this.app.view);

        this.gui = new Gui(this);

        this.update()
    };

    update = () => {
        this.app.renderer.render(this.app.stage);
        requestAnimationFrame(this.update);
    }
}