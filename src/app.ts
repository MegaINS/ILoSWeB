import '../lib/pixi-ui'
import {Gui} from "./Gui";
import LoaderResource = PIXI.LoaderResource;
import Loader = PIXI.Loader;
import {Resources} from "./Resources";
import {Network} from "./Network";
import {Player} from "./Player";



window.onload = () => {
    let game = new ILoSGame();
    game.load();
};


export class ILoSGame {

    app: PIXI.Application;
    gui: Gui;
    CANVAS_HEIGHT: number = window.innerHeight;
    CANVAS_WIDTH: number = window.innerWidth;
    player: Player;

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
            .add('top', '/assets/img/json/top.json')
            .add('chat', '/assets/img/json/chat.json')
            .add('bottom', '/assets/img/json/bottom.json')
            .add('userList', '/assets/img/json/userList.json')
            .add('cursors', '/assets/img/json/cursors.json')
            .add('player', '/assets/img/json/player.json')
            .add('books', '/assets/img/json/books.json')
            .add('items', '/assets/img/json/items.json')
            .load(this.init);

    };

    init = (loader: Loader, resources: Partial<Record<string, LoaderResource>>) => {

        Resources.load(loader,resources);

        this.app = new PIXI.Application({
            width: this.CANVAS_WIDTH,
            height: this.CANVAS_HEIGHT
        });
        this.app.stage.sortableChildren = true;
        document.body.appendChild(this.app.view);

        this.player = new Player();

        this.gui = new Gui(this);

        Network.connect(this);

        this.update()
    };

    update = () => {
        this.app.renderer.render(this.app.stage);
        requestAnimationFrame(this.update);
    }


}