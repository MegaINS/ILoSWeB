import * as PIXI from "pixi.js";

window.onload = () => {
    var game = new ILoSGame();
    game.load();
};


class ILoSGame {

    app:PIXI.Application;
    CANVAS_HEIGHT: number = 650;
    CANVAS_WIDTH: number = window.innerWidth - 4;


    load =()=>{
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

    init =()=>{
        this.app = new PIXI.Application({
            width: this.CANVAS_WIDTH,
            height: this.CANVAS_HEIGHT
        });
        document.body.appendChild(this.app.view);

        this.update()
    };

    update = () => {
        this.app.renderer.render(this.app.stage);
        requestAnimationFrame(this.update);
    }
}