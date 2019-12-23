import * as PIXI from "pixi.js";
import Loader = PIXI.Loader;
import LoaderResource = PIXI.LoaderResource;


export class Resources {

    static top;

    static load(loader: Loader, resources: Partial<Record<string, LoaderResource>>) {

        let status = resources["status"];
        let userInfo = resources["userInfo"];
        let scroll = resources['scroll'];
        let itemList = resources['itemList'];
        let materials = resources['materials'];
        let itemLayers = resources['itemLayers'];
        let danges = resources['danges'];
        let shop = resources['shop'];

        const basePath = '/assets/img/';
        this.top = {
            bg: PIXI.Texture.from(basePath + 'gui/top/bg.png'),
            bg_title_1: PIXI.Texture.from(basePath + 'gui/top/bg_title_1.png'),
            bg_title_2: PIXI.Texture.from(basePath + 'gui/top/bg_title_2.png'),
            bg_title_3: PIXI.Texture.from(basePath + 'gui/top/bg_title_3.png'),

            info: {
                btn: PIXI.Texture.from(basePath + 'gui/top/btn_info.png'),
                over: PIXI.Texture.from(basePath + 'gui/top/over_info.png'),
                sel: PIXI.Texture.from(basePath + 'gui/top/sel_info.png'),
                dis: PIXI.Texture.from(basePath + 'gui/top/dis_info.png')
            },
            inventory: {
                btn: PIXI.Texture.from(basePath + 'gui/top/btn_inventory.png'),
                over: PIXI.Texture.from(basePath + 'gui/top/over_inventory.png'),
                sel: PIXI.Texture.from(basePath + 'gui/top/sel_inventory.png'),
                dis: PIXI.Texture.from(basePath + 'gui/top/dis_inventory.png')
            },
            profile: {
                btn: PIXI.Texture.from(basePath + 'gui/top/btn_profile.png'),
                over: PIXI.Texture.from(basePath + 'gui/top/over_profile.png'),
                sel: PIXI.Texture.from(basePath + 'gui/top/sel_profile.png'),
                dis: PIXI.Texture.from(basePath + 'gui/top/dis_profile.png')
            },
            log: {
                btn: PIXI.Texture.from(basePath + 'gui/top/btn_log.png'),
                over: PIXI.Texture.from(basePath + 'gui/top/over_log.png'),
                sel: PIXI.Texture.from(basePath + 'gui/top/sel_log.png'),
                dis: PIXI.Texture.from(basePath + 'gui/top/dis_log.png')
            },
            close: {
                btn: PIXI.Texture.from(basePath + 'gui/top/btn_close.png'),
                over: PIXI.Texture.from(basePath + 'gui/top/over_close.png'),
                sel: PIXI.Texture.from(basePath + 'gui/top/sel_close.png'),
                dis: PIXI.Texture.from(basePath + 'gui/top/dis_close.png')
            },


        }


    }


}