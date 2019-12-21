define(['pixi'], function () {

    const status = PIXI.loader.resources["status"];
    const userInfo = PIXI.loader.resources["userInfo"];
    const scroll = PIXI.loader.resources['scroll'];
    const itemList = PIXI.loader.resources['itemList'];
    const materials = PIXI.loader.resources['materials'];
    const itemLayers = PIXI.loader.resources['itemLayers'];
    const danges = PIXI.loader.resources['danges'];
    const shop = PIXI.loader.resources['shop'];

    const basePath = '/assets/img/';

    const Resources = ({

        player: PIXI.Texture.from(basePath + 'players/player-1.png'),
        warp: PIXI.Texture.from(basePath + 'danges/danges/danges-46.png'),
        enemy: PIXI.Texture.from(basePath + 'players/enemy-0.png'),
        bg: PIXI.Texture.from(basePath + 'gui/bg.gif'),



        location: new Map([["antiria", PIXI.Texture.from(basePath + 'levels/antiria/antiria.png')]]),

        cursor: [
            PIXI.Texture.from(basePath + 'gui/cursor-0.gif'),
            PIXI.Texture.from(basePath + 'gui/pointer.gif')

        ],


        status: {
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
        },

        userInfo: {
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


        },

        scroll: {
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

        },

        top: {
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


        },

        itemList: {
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


        },

        materials: [],
        resources:  [],
        itemLayers: [],

        danges: {
            forest: [],
            mine: [],
            meadow: [],
        },

        shop:{

            bg_group1: shop.textures['shop/bg_group1'],
            bg_group2: shop.textures['shop/bg_group2'],
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

            groups:{
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
            types:{
                book: {
                    btn: shop.textures['shop/types/btn_book'],
                    over: shop.textures['shop/types/over_book'],
                    sel: shop.textures['shop/types/sel_book'],
                    dis: shop.textures['shop/types/dis_book'],
                },

            }
        }

    });





    Resources.resources['materials-30'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/met_rusty_iron1.png');
    Resources.resources['materials-23'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/met_ironite1.png');
    Resources.resources['materials-29'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/met_copper1.png');

    Resources.resources['materials-18'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/skin_rabbit1.png');
    Resources.resources['materials-92'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/skin_deer1.png');
    Resources.resources['materials-80'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/skin_boar1.png');

    Resources.resources['materials-49'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/wood_bad_topol1.png');
    Resources.resources['materials-5'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/wood_yasen1.png');
    Resources.resources['materials-2'] =  PIXI.Texture.from(basePath + 'danges/mine_resources/wood_osina1.png');


    for (let i = 1; i < 8; i++) {
        Resources.shop['class'+i] = {
            btn: shop.textures['shop/classes/btn_class'+i],
            over: shop.textures['shop/classes/over_class'+i],
            sel: shop.textures['shop/classes/sel_class'+i],
            dis: shop.textures['shop/classes/dis_class'+i],
        }
    }





    for (let i = 0; i < 137; i++) {
        Resources.materials['materials-' + i] = materials.textures['materials-' + i + '.png'];
    }
    for (let i = 0; i < 9; i++) {
        Resources.itemLayers[i] = itemLayers.textures['class' + i + '.png'];
    }

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

    return (Resources);

});