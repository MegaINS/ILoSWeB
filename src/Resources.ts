import * as PIXI from "pixi.js";
import Loader = PIXI.Loader;
import LoaderResource = PIXI.LoaderResource;


export abstract class Resources {

    static top;
    static status;
    static player;
    static warp;
    static enemy;
    static bg;
    static location;
    static cursor;
    static danges;
    static resources;

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
        const basePath = '/assets/img/';

        this.player = PIXI.Texture.from(basePath + 'players/player-1.png');
        this.warp = PIXI.Texture.from(basePath + 'danges/danges/danges-46.png');
        this.enemy = PIXI.Texture.from(basePath + 'players/enemy-0.png');
        this.bg = PIXI.Texture.from(basePath + 'gui/bg.gif');

        this.location = new Map([["antiria", PIXI.Texture.from(basePath + 'levels/antiria/antiria.png')]]);

        this.cursor = [
            PIXI.Texture.from(basePath + 'gui/cursor-0.gif'),
            PIXI.Texture.from(basePath + 'gui/pointer.gif')];

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

        this.danges = {
            forest: [],
            mine: [],
            meadow: [],
        };

        for (let name in Resources.danges) {
            let dang = Resources.danges[name];

            for (let i = 0; i < 3; i++) {
                dang[i] = {full: [], paths: []};
                for (let j = 0; j < 7; j++) {
                    dang[i].full[j] = danges.textures[name + '/CLASS_' + i + '/full_' + j];
                }
                for (let j = 0; j < 16; j++) {
                    dang[i].paths[j] = danges.textures[name + '/CLASS_' + i + '/paths_' + j];
                }
            }
        }
        this.resources =[];
        this.resources['materials-30'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/met_rusty_iron1.png');
        this.resources['materials-23'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/met_ironite1.png');
        this.resources['materials-29'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/met_copper1.png');

        this.resources['materials-18'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/skin_rabbit1.png');
        this.resources['materials-92'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/skin_deer1.png');
        this.resources['materials-80'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/skin_boar1.png');

        this.resources['materials-49'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/wood_bad_topol1.png');
        this.resources['materials-5'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/wood_yasen1.png');
        this.resources['materials-2'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/wood_osina1.png');
    }


}