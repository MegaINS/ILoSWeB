import * as PIXI from "pixi.js";
import Loader = PIXI.Loader;
import LoaderResource = PIXI.LoaderResource;


export abstract class Resources {

    static top;
    static status;

    static load(loader: Loader, resources: Partial<Record<string, LoaderResource>>) {

        let status = resources["status"];
        let userInfo = resources["userInfo"];
        let scroll = resources['scroll'];
        let itemList = resources['itemList'];
        let materials = resources['materials'];
        let itemLayers = resources['itemLayers'];
        let danges = resources['danges'];
        let shop = resources['shop'];
        let top = resources['top'];

        this.top = {
            bg: top.textures['top/bg'],
            bg_title_1: top.textures['top/bg_title_1'],
            bg_title_2: top.textures['top/bg_title_2'],
            bg_title_3: top.textures['top/bg_title_3'],

            info: {
                btn: top.textures['top/btn_info'],
                over: top.textures['top/over_info'],
                sel: top.textures['top/sel_info'],
                dis: top.textures['top/dis_info']
            },
            inventory: {
                btn: top.textures['top/btn_inventory'],
                over: top.textures['top/over_inventory'],
                sel: top.textures['top/sel_inventory'],
                dis: top.textures['top/dis_inventory']
            },
            profile: {
                btn: top.textures['top/btn_profile'],
                over: top.textures['top/over_profile'],
                sel: top.textures['top/sel_profile'],
                dis: top.textures['top/dis_profile']
            },
            log: {
                btn: top.textures['top/btn_log'],
                over: top.textures['top/over_log'],
                sel: top.textures['top/sel_log'],
                dis: top.textures['top/dis_log']
            },
            close: {
                btn: top.textures['top/btn_close'],
                over: top.textures['top/over_close'],
                sel: top.textures['top/sel_close'],
                dis: top.textures['top/dis_close']
            },
        };

        this.status = {
            bg_attrs: status.textures['bg_attrs.png'],
            bg_items2: status.textures['bg_items2.png'],
            bg_stats: status.textures['bg_stats.png'],

            enter: {
                btn: status.textures['btn_enter.gif'],
                over: status.textures['over_enter.gif'],
                sel: status.textures['sel_enter.gif'],
                dis: status.textures['dis_enter.gif']
            },
            rest: {
                btn: status.textures['btn_rest.gif'],
                over: status.textures['over_rest.gif'],
                sel: status.textures['sel_rest.gif'],
                dis: status.textures['dis_rest.gif']
            },
            center: {
                btn: status.textures['btn_center.png'],
                over: status.textures['over_center.png'],
                sel: status.textures['sel_center.png'],
                dis: status.textures['dis_center.png']
            }
        };

    }


}