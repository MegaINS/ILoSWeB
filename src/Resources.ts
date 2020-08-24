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
    static cursors;
    static danges;
    static resources = [];
    static userInfo;
    static scroll;
    static itemList;
    static materials = [];
    static itemLayers = [];
    static shop;
    static chat;
    static bottom;
    static userList;
    static books = [];


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
        let chat = resources['chat'];
        let bottom = resources['bottom'];
        let userList = resources['userList'];
        let cursors = resources['cursors'];
        let player = resources['player'];
        let books = resources['books'];


        const basePath = '/assets/img/';



        this.player ={
            male:  player.textures['player/area/male'],
            enemy:player.textures['player/area/male']
        };

        this.warp = PIXI.Texture.from(basePath + 'danges/danges/danges-46.png');
        this.bg = PIXI.Texture.from(basePath + 'gui/bg.gif');

        this.location = new Map([["antiria", PIXI.Texture.from(basePath + 'levels/antiria/antiria.png')]]);

        this.cursors = {
            arr: [
                cursors.textures['cursors/0'],
                cursors.textures['cursors/1'],
                cursors.textures['cursors/2'],
                cursors.textures['cursors/3'],
                cursors.textures['cursors/4'],
                cursors.textures['cursors/5'],
                cursors.textures['cursors/6'],
                cursors.textures['cursors/7'],
                cursors.textures['cursors/8'],
                cursors.textures['cursors/9'],
            ],
            pointer: cursors.textures['cursors/pointer'],
        };


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
        this.resources = [];
        this.resources['materials-30'] = PIXI.Texture.from(basePath + 'danges/mine_resources/met_rusty_iron1.png');
        this.resources['materials-23'] = PIXI.Texture.from(basePath + 'danges/mine_resources/met_ironite1.png');
        this.resources['materials-29'] = PIXI.Texture.from(basePath + 'danges/mine_resources/met_copper1.png');

        this.resources['materials-18'] = PIXI.Texture.from(basePath + 'danges/mine_resources/skin_rabbit1.png');
        this.resources['materials-92'] = PIXI.Texture.from(basePath + 'danges/mine_resources/skin_deer1.png');
        this.resources['materials-80'] = PIXI.Texture.from(basePath + 'danges/mine_resources/skin_boar1.png');

        this.resources['materials-49'] = PIXI.Texture.from(basePath + 'danges/mine_resources/wood_bad_topol1.png');
        this.resources['materials-5'] = PIXI.Texture.from(basePath + 'danges/mine_resources/wood_yasen1.png');
        this.resources['materials-2'] = PIXI.Texture.from(basePath + 'danges/mine_resources/wood_osina1.png');


        this.userInfo = {
            bg_attrs: userInfo.textures['bg_attrs.png'],
            bg_items: userInfo.textures['bg_items.png'],
            bg_stats: userInfo.textures['bg_stats.png'],
            bg_chars: userInfo.textures['bg_chars.png'],
            bg_frame: userInfo.textures['bg_frame.png'],
            bg: userInfo.textures['bg.png'],
            bg_group1: userInfo.textures['bg_group1.png'],
            bg_group2: userInfo.textures['bg_group2.png'],


            buttonInfo: {
                btn: userInfo.textures['btn_info.png'],
                over: userInfo.textures['over_info.png'],
                sel: userInfo.textures['sel_info.png'],
                dis: userInfo.textures['dis_info.png'],
            },
            buttonInventory: {
                btn: userInfo.textures['btn_inventory.png'],
                over: userInfo.textures['over_inventory.png'],
                sel: userInfo.textures['sel_inventory.png'],
                dis: userInfo.textures['dis_inventory.png'],
            },
            buttonProfile: {
                btn: userInfo.textures['btn_profile.png'],
                over: userInfo.textures['over_profile.png'],
                sel: userInfo.textures['sel_profile.png'],
                dis: userInfo.textures['dis_profile.png'],
            },
            buttonLog: {
                btn: userInfo.textures['btn_log.png'],
                over: userInfo.textures['over_log.png'],
                sel: userInfo.textures['sel_log.png'],
                dis: userInfo.textures['dis_log.png'],
            },


            profile: {
                skills: {
                    btn: userInfo.textures['btn_skills.png'],
                    over: userInfo.textures['over_skills.png'],
                    sel: userInfo.textures['sel_skills.png'],
                    dis: userInfo.textures['dis_skills.png'],
                },
                wound: {
                    btn: userInfo.textures['btn_wound.png'],
                    over: userInfo.textures['over_wound.png'],
                    sel: userInfo.textures['sel_wound.png'],
                    dis: userInfo.textures['dis_wound.png'],
                },
                layers: {
                    btn: userInfo.textures['btn_layers.png'],
                    over: userInfo.textures['over_layers.png'],
                    sel: userInfo.textures['sel_layers.png'],
                    dis: userInfo.textures['dis_layers.png'],
                },
                spells: {
                    btn: userInfo.textures['btn_spells.png'],
                    over: userInfo.textures['over_spells.png'],
                    sel: userInfo.textures['sel_spells.png'],
                    dis: userInfo.textures['dis_spells.png'],
                },
                skillList: {
                    bg: userInfo.textures['skill_list/bg.png'],
                    bar: userInfo.textures['skill_list/bar.png'],
                    bg_bar: userInfo.textures['skill_list/bg_bar.png'],


                    orange: {
                        bg_1: userInfo.textures['skill_list/orange/bg_1.png'],
                        bg_2: userInfo.textures['skill_list/orange/bg_2.png'],
                        bg_3: userInfo.textures['skill_list/orange/bg_3.png'],
                        bg_4: userInfo.textures['skill_list/orange/bg_4.png'],

                    },
                    blue: {
                        bg_1: userInfo.textures['skill_list/blue/bg_1.png'],
                        bg_2: userInfo.textures['skill_list/blue/bg_2.png'],
                        bg_3: userInfo.textures['skill_list/blue/bg_3.png'],
                        bg_4: userInfo.textures['skill_list/blue/bg_4.png'],

                    },
                    green: {
                        bg_1: userInfo.textures['skill_list/green/bg_1.png'],
                        bg_2: userInfo.textures['skill_list/green/bg_2.png'],
                        bg_3: userInfo.textures['skill_list/green/bg_3.png'],
                        bg_4: userInfo.textures['skill_list/green/bg_4.png'],

                    },
                    indigo: {
                        bg_1: userInfo.textures['skill_list/indigo/bg_1.png'],
                        bg_2: userInfo.textures['skill_list/indigo/bg_2.png'],
                        bg_3: userInfo.textures['skill_list/indigo/bg_3.png'],
                        bg_4: userInfo.textures['skill_list/indigo/bg_4.png'],

                    },
                    red: {
                        bg_1: userInfo.textures['skill_list/red/bg_1.png'],
                        bg_2: userInfo.textures['skill_list/red/bg_2.png'],
                        bg_3: userInfo.textures['skill_list/red/bg_3.png'],
                        bg_4: userInfo.textures['skill_list/red/bg_4.png'],

                    },
                    violet: {
                        bg_1: userInfo.textures['skill_list/violet/bg_1.png'],
                        bg_2: userInfo.textures['skill_list/violet/bg_2.png'],
                        bg_3: userInfo.textures['skill_list/violet/bg_3.png'],
                        bg_4: userInfo.textures['skill_list/violet/bg_4.png'],

                    },
                }
            },


            inventory: {
                drop: {
                    btn: userInfo.textures['btn_drop.png'],
                    over: userInfo.textures['over_drop.png'],
                    sel: userInfo.textures['sel_drop.png'],
                    dis: userInfo.textures['dis_drop.png'],
                },
                takeoff: {
                    btn: userInfo.textures['btn_takeoff.png'],
                    over: userInfo.textures['over_takeoff.png'],
                    sel: userInfo.textures['sel_takeoff.png'],
                    dis: userInfo.textures['dis_takeoff.png'],
                },
                wear: {
                    btn: userInfo.textures['btn_wear.png'],
                    over: userInfo.textures['over_wear.png'],
                    sel: userInfo.textures['sel_wear.png'],
                    dis: userInfo.textures['dis_wear.png'],
                },
                use: {
                    btn: userInfo.textures['btn_use.png'],
                    over: userInfo.textures['over_use.png'],
                    sel: userInfo.textures['sel_use.png'],
                    dis: userInfo.textures['dis_use.png'],
                },
            },

            log: {
                buttonLogfull: {
                    btn: userInfo.textures['btn_logfull.png'],
                    over: userInfo.textures['over_logfull.png'],
                    sel: userInfo.textures['sel_logfull.png'],
                    dis: userInfo.textures['dis_logfull.png'],
                },
                buttonLogquest: {
                    btn: userInfo.textures['btn_logquest.png'],
                    over: userInfo.textures['over_logquest.png'],
                    sel: userInfo.textures['sel_logquest.png'],
                    dis: userInfo.textures['dis_logquest.png'],
                },
            },

            info: {
                buttonSave: {
                    btn: userInfo.textures['btn_save.png'],
                    over: userInfo.textures['over_save.png'],
                    sel: userInfo.textures['sel_save.png'],
                    dis: userInfo.textures['dis_save.png'],
                },
            }


        };

        this.scroll = {
            bar_arrow_down: scroll.textures['bar_arrow_down.png'],

            bar_arrow_down_pressed: scroll.textures['bar_arrow_down_pressed.png'],
            bar_arrow_left: scroll.textures['bar_arrow_left.png'],
            bar_arrow_left_pressed: scroll.textures['bar_arrow_left_pressed.png'],
            bar_arrow_right: scroll.textures['bar_arrow_right.png'],
            bar_arrow_right_pressed: scroll.textures['bar_arrow_right_pressed.png'],
            bar_arrow_up: scroll.textures['bar_arrow_up.png'],

            bar_arrow_up_pressed: scroll.textures['bar_arrow_up_pressed.png'],
            bar_bg_horizontal: scroll.textures['bar_bg_horizontal.png'],
            bar_bg_vertical: scroll.textures['bar_bg_vertical.png'],
            bar_thumb_horiz1: scroll.textures['bar_thumb_horiz1.png'],
            bar_thumb_horiz2: scroll.textures['bar_thumb_horiz2.png'],
            bar_thumb_horiz3: scroll.textures['bar_thumb_horiz3.png'],

            bar_thumb_vert1: scroll.textures['bar_thumb_vert1.png'],
            bar_thumb_vert2: scroll.textures['bar_thumb_vert2.png'],
            bar_thumb_vert3: scroll.textures['bar_thumb_vert3.png'],

        };

        this.itemList = {
            bar_arrow_down: itemList.textures['bar_arrow_down.png'],
            att_defence: itemList.textures['att_defence.png'],
            bg_item_weight: itemList.textures['bg_item_weight.png'],
            bg_right: itemList.textures['bg_right.png'],
            item_bar: itemList.textures['item_bar.png'],
            item_bg: itemList.textures['item_bg.png'],
            item_health: itemList.textures['item_health.png'],

            bg_class: [
                {
                    ord: itemList.textures['bg_class_0.png'],
                    sel: itemList.textures['bg_class_0_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_1.png'],
                    sel: itemList.textures['bg_class_1_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_2.png'],
                    sel: itemList.textures['bg_class_2_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_3.png'],
                    sel: itemList.textures['bg_class_3_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_4.png'],
                    sel: itemList.textures['bg_class_4_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_5.png'],
                    sel: itemList.textures['bg_class_5_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_6.png'],
                    sel: itemList.textures['bg_class_6_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_7.png'],
                    sel: itemList.textures['bg_class_7_sel.png'],
                },
                {
                    ord: itemList.textures['bg_class_8.png'],
                    sel: itemList.textures['bg_class_8_sel.png'],
                },

            ],


        };


        for (let i = 0; i < 137; i++) {
            this.materials['materials-' + i] = materials.textures['materials-' + i + '.png'];
        }
        for (let i = 0; i < 97; i++) {
            this.books['books-' + i] = books.textures['books-' + i + '.png'];
        }

        for (let i = 0; i < 9; i++) {
            this.itemLayers[i] = itemLayers.textures['class' + i + '.png'];
        }

        this.shop = {

            bg_group1: shop.textures['shop/bg_group1'],
            bg_group2: shop.textures['shop/bg_group2'],
            bg_type1: shop.textures['shop/bg_type1'],
            bg_type2: shop.textures['shop/bg_type2'],

            bg_type_count: shop.textures['shop/bg_type_count'],
            buttonSell: {
                btn: shop.textures['shop/btn_sell'],
                over: shop.textures['shop/over_sell'],
                sel: shop.textures['shop/sel_sell'],
                dis: shop.textures['shop/dis_sell'],
            },
            buttonBuy: {
                btn: shop.textures['shop/btn_buy'],
                over: shop.textures['shop/over_buy'],
                sel: shop.textures['shop/sel_buy'],
                dis: shop.textures['shop/dis_buy'],
            },
            classAll: {
                btn: shop.textures['shop/classes/btn_class_all'],
                over: shop.textures['shop/classes/over_class_all'],
                sel: shop.textures['shop/classes/sel_class_all'],
                dis: shop.textures['shop/classes/dis_class_all'],
            },

            groups: {
                books: {
                    btn: shop.textures['shop/groups/btn_books'],
                    over: shop.textures['shop/groups/over_books'],
                    sel: shop.textures['shop/groups/sel_books'],
                    dis: shop.textures['shop/groups/dis_books'],
                },
                tools: {
                    btn: shop.textures['shop/groups/btn_tools'],
                    over: shop.textures['shop/groups/over_tools'],
                    sel: shop.textures['shop/groups/sel_tools'],
                    dis: shop.textures['shop/groups/dis_tools'],
                },
            },
            types: {
                book: {
                    btn: shop.textures['shop/types/btn_book'],
                    over: shop.textures['shop/types/over_book'],
                    sel: shop.textures['shop/types/sel_book'],
                    dis: shop.textures['shop/types/dis_book'],
                },
                craft_forging: {
                    btn: shop.textures['shop/types/btn_craft_forging'],
                    over: shop.textures['shop/types/over_craft_forging'],
                    sel: shop.textures['shop/types/sel_craft_forging'],
                    dis: shop.textures['shop/types/dis_craft_forging'],
                },
                mine: {
                    btn: shop.textures['shop/types/btn_mine'],
                    over: shop.textures['shop/types/over_mine'],
                    sel: shop.textures['shop/types/sel_mine'],
                    dis: shop.textures['shop/types/dis_mine'],
                },


            }
        };

        for (let i = 1; i < 8; i++) {
            this.shop['class' + i] = {
                btn: shop.textures['shop/classes/btn_class' + i],
                over: shop.textures['shop/classes/over_class' + i],
                sel: shop.textures['shop/classes/sel_class' + i],
                dis: shop.textures['shop/classes/dis_class' + i],
            }
        }


        this.chat ={
            bg: chat.textures['chat/bg'],
        };

        this.bottom ={
            bg_left: bottom.textures['bottom/bg_left'],
            bg_right_min: bottom.textures['bottom/bg_right_min'],
            bg_blue: bottom.textures['bottom/bg_blue'],
            bg_right: bottom.textures['bottom/bg_right'],
            buttonFilter:{
                btn: bottom.textures['bottom/btn_filter'],
                sel: bottom.textures['bottom/sel_filter'],
            },

            buttonClear: {
                btn: bottom.textures['bottom/btn_clear'],
                over: bottom.textures['bottom/over_clear'],
                sel: bottom.textures['bottom/sel_clear'],
                dis: bottom.textures['bottom/dis_clear'],
            },
            buttonEnter: {
                btn: bottom.textures['bottom/btn_enter'],
                over: bottom.textures['bottom/over_enter'],
                sel: bottom.textures['bottom/sel_enter'],
                dis: bottom.textures['bottom/dis_enter'],
            },
            buttonEnterClan: {
                btn: bottom.textures['bottom/btn_enter_clan'],
                over: bottom.textures['bottom/over_enter_clan'],
                sel: bottom.textures['bottom/sel_enter_clan'],
                dis: bottom.textures['bottom/dis_enter_clan'],
            },
            buttonExit: {
                btn: bottom.textures['bottom/btn_exit'],
                over: bottom.textures['bottom/over_exit'],
                sel: bottom.textures['bottom/sel_exit'],
                dis: bottom.textures['bottom/dis_exit'],
            },
            buttonMaximize: {
                btn: bottom.textures['bottom/btn_maximize'],
                over: bottom.textures['bottom/over_maximize'],
                sel: bottom.textures['bottom/sel_maximize'],
                dis: bottom.textures['bottom/dis_maximize'],
            },
            buttonMe: {
                btn: bottom.textures['bottom/btn_me'],
                over: bottom.textures['bottom/over_me'],
                sel: bottom.textures['bottom/sel_me'],
                dis: bottom.textures['bottom/dis_me'],
            },
            buttonMenu: {
                btn: bottom.textures['bottom/btn_menu'],
                over: bottom.textures['bottom/over_menu'],
                sel: bottom.textures['bottom/sel_menu'],
                dis: bottom.textures['bottom/dis_menu'],
            },
            buttonMinimize: {
                btn: bottom.textures['bottom/btn_minimize'],
                over: bottom.textures['bottom/over_minimize'],
                sel: bottom.textures['bottom/sel_minimize'],
                dis: bottom.textures['bottom/dis_minimize'],
            },
            buttonOptions: {
                btn: bottom.textures['bottom/btn_options'],
                over: bottom.textures['bottom/over_options'],
                sel: bottom.textures['bottom/sel_options'],
                dis: bottom.textures['bottom/dis_options'],
            },
            buttonSets: {
                btn: bottom.textures['bottom/btn_sets'],
                over: bottom.textures['bottom/over_sets'],
                sel: bottom.textures['bottom/sel_sets'],
                dis: bottom.textures['bottom/dis_sets'],
            },
            buttonSmile: {
                btn: bottom.textures['bottom/btn_smile'],
                over: bottom.textures['bottom/over_smile'],
                sel: bottom.textures['bottom/sel_smile'],
                dis: bottom.textures['bottom/dis_smile'],
            },

        };
        this.userList = {
            private: userList.textures['userlist/private'],
            info: userList.textures['userlist/info'],
        }


    }


}