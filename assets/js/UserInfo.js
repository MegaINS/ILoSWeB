define(['Resources', 'assets/js/lib/old/Button','Item'], function (Resources, Button, Item) {

    class PlayerInfo {

        constructor() {
            this.sections = {
                active: null,
                profile: new Profile(),
                inventory: new Inventory(),
                log: new Log(),
                info: new Info()
            };


            this.active = false;

            this.container = new PIXI.Container();
            this.container.x = 50;
            this.container.y = 100;

            this.container.interactive = true;
            this.container.mouseup = (event) => {
                if (this.container.moving !== true) {
                    const a = event.data.getLocalPosition(this.container);

                } else {
                    this.container.moving = false;
                }
                this.container.dragging = false;

            };


            this.container.mousedown = (event) => {
                this.container.dragging = true;
                this.container.pos = event.data.getLocalPosition(this.container.parent);
            };

            this.container.mousemove = (event) => {
                const pos = event.data.getLocalPosition(this.container);

                if (this.container.dragging) {
                    this.container.moving = true;
                    const a = event.data.getLocalPosition(this.container.parent);
                    this.container.x -= Math.round(this.container.pos.x - a.x);
                    this.container.y -= Math.round(this.container.pos.y - a.y);
                    this.container.pos = a;
                }

            };






            this.bg = new PIXI.TilingSprite(Resources.userInfo.bg, 168, 355);

            this.bg.y = 175;


            this.bg2 = new PIXI.TilingSprite(Resources.bg, 425, 530);

            this.bg2.x = 168;


            this.bg_attrs = new PIXI.Sprite(Resources.userInfo.bg_attrs);
            this.bg_items = new PIXI.Sprite(Resources.userInfo.bg_items);
            this.bg_stats = new PIXI.Sprite(Resources.userInfo.bg_stats);

            this.bg_frame = new PIXI.Sprite(Resources.userInfo.bg_frame);

            this.bg_frame.x = 593;
            this.bg_stats.y = 145;
            this.bg_items.y = 180;


            this.buttons = new PIXI.Container();
            this.buttons.y = 10;
            this.buttons.x = 188;


            this.bg_group1 = new PIXI.Sprite(Resources.userInfo.bg_group1);

            this.bProfile = new Button(Resources.userInfo.buttonProfile, () => {
                this.setSection('profile')
            });
            this.bProfile.x = 3;
            this.bInventory = new Button(Resources.userInfo.buttonInventory, () => {
                this.setSection('inventory')
            });
            this.bInventory.x = 123;

            this.bLog = new Button(Resources.userInfo.buttonLog, () => {
                this.setSection('log')
            });
            this.bLog.x = 199;

            this.bInfo = new Button(Resources.userInfo.buttonInfo, () => {
                this.setSection('info')
            });
            this.bInfo.x = 305;

            this.bg_group2 = new PIXI.Sprite(Resources.userInfo.bg_group2);
            this.bg_group2.x = 381;


            this.buttons.addChild(this.bg_group1, this.bInfo, this.bProfile, this.bLog, this.bInventory, this.bg_group2);


            this.container.addChild(this.bg);
            this.container.addChild(this.bg2);

            this.container.addChild(this.buttons);

            this.container.addChild(this.bg_attrs);
            this.container.addChild(this.bg_items);
            this.container.addChild(this.bg_stats);

            this.container.addChild(this.bg_frame);


            this.sections.profile.x = this.sections.inventory.x = this.sections.log.x = this.sections.info.x = 168;
            this.sections.profile.y = this.sections.inventory.y = this.sections.log.y = this.sections.info.y = 40;
            const style = new PIXI.TextStyle({
                fill: "#e4f297",
                fontFamily: "Helvetica",
                fontSize: 12,
                align: "center"
            });

            this.nick = new PIXI.Text('Test', style);
            this.nick.x =70;
            this.nick.y =5;
            this.container.addChild(this.nick);


            this.level = new PIXI.Text('2', style);

            this.level.x =131;
            this.level.y =37;
            this.container.addChild(this.level);



            this.money = new PIXI.Text('123.2', style);

            this.money.x =125;
            this.money.y =78;
            this.container.addChild(this.money);



            this.power = new PIXI.Text('22', style);

            this.power.x =13;
            this.power.y =159;
            this.container.addChild(this.power);



            this.stamina = new PIXI.Text('33', style);

            this.stamina.x =55;
            this.stamina.y =159;
            this.container.addChild(this.stamina);

            this.concentration = new PIXI.Text('44', style);

            this.concentration.x =99;
            this.concentration.y =159;
            this.container.addChild(this.concentration);

            this.intellect = new PIXI.Text('55', style);
            this.intellect.x =141;
            this.intellect.y =159;
            this.container.addChild(this.intellect);


        }


        setSection(name) {
            const section = this.sections[name];
            if (this.sections.active !== section) {
                if (this.sections.active != null) {
                    this.container.removeChild(this.sections.active);
                }
                this.sections.active = section;
                if (section != null) {
                    this.container.addChild(section);
                }
            }
        }


        show(name) {

            if (this.active) {
                if(this.sections.active !== this.sections[name]){
                    this.setSection(name);
                }else{
                    app.stage.removeChild(this.container);
                    this.active = false;
                }
            } else {
                this.setSection(name);
                app.stage.addChild(this.container);
                this.active = true;
            }


        }
    }


    class Profile extends PIXI.Container {

        constructor() {
            super();

            this.sections = {
                active: null,
                skills: this.initSkills(),
                wound: this.initWound(),
                spells: this.initSpells(),
                layers: this.initLayers()
            };


            var bg_chars = new PIXI.Sprite(Resources.userInfo.bg_chars);


            var bSkills = new Button(Resources.userInfo.profile.skills, () => {
                this.setSection(this.sections.skills);
            });

            bSkills.x = 15;
            bSkills.y = 160;


            var bWound = new Button(Resources.userInfo.profile.wound, () => {
                this.setSection(this.sections.wound);
            });
            bWound.y = 160;
            bWound.x = 110;

            var bSpells = new Button(Resources.userInfo.profile.spells, () => {
                this.setSection(this.sections.spells);
            });
            bSpells.y = 160;
            bSpells.x = 210;

            var bLayers = new Button(Resources.userInfo.profile.layers, () => {
                this.setSection(this.sections.layers);
            });
            bLayers.y = 160;
            bLayers.x = 320;


            var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 400, 280);
            bgScroll.y = 190;
            bgScroll.x = 10;


            const style = new PIXI.TextStyle({
                fill: "white",
                fontFamily: "Helvetica",
                fontSize: 13,
                wordWrapWidth: 400
            });
            var level = new PIXI.Text("2", style);
            level.y = 29;
            level.x = 25;
            var exp = new PIXI.Text("1234", style);
            exp.y = 29;
            exp.x = 95;
            var userClass = new PIXI.Text("Класс 3", style);
            userClass.y = 29;
            userClass.x = 185;
            var sex = new PIXI.Text("М", style);
            sex.y = 69;
            sex.x = 24;
            var location = new PIXI.Text("Город А", style);
            location.y = 69;
            location.x = 130;


            this.addChild(bgScroll);
            this.addChild(bg_chars);
            this.addChild(bSkills);
            this.addChild(bWound);
            this.addChild(bLayers);
            this.addChild(bSpells);
            this.addChild(level);
            this.addChild(exp);
            this.addChild(userClass);
            this.addChild(sex);
            this.addChild(location);
            this.setSection(this.sections.skills);


        }

        setSection(section) {
            if (this.sections.active != section) {
                if (this.sections.active != null) {
                    this.removeChild(this.sections.active);
                }
                this.sections.active = section;
                if (section != null) {
                    this.addChild(section);
                }
            }
        }


        initSkills() {


            var scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 400,
                height: 280,
                scrollX: false,
                scrollY: true,
            });


            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: scrollingContainer,
                vertical: true,
                autohide: true
            });


            scrollbar.anchorTop = 0;
            scrollbar.anchorRight = 0;


            var y = 0;
            var orangBg_1 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.orange.bg_1);
            scrollingContainer.addChild(orangBg_1);
            y += 46;
            for (var i = 0; i < 3; i++) {
                var orangBg_2 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.orange.bg_2);
                if (i > 0) {
                    y += 40;
                }

                orangBg_2.y = y;


                scrollingContainer.addChild(orangBg_2);
            }
            y += 40;

            var redBg_1 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.red.bg_1);
            scrollingContainer.addChild(redBg_1);
            redBg_1.y = y;
            y += 46;
            for (var i = 0; i < 3; i++) {
                var redBg_2 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.red.bg_2);
                if (i > 0) {
                    y += 40;
                }
                redBg_2.y = y;


                scrollingContainer.addChild(redBg_2);
            }
            y += 40;

            var blueBg_1 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.blue.bg_1);
            scrollingContainer.addChild(blueBg_1);
            blueBg_1.y = y;
            y += 46;
            for (var i = 0; i < 3; i++) {
                var blueBg_2 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.blue.bg_2);
                if (i > 0) {
                    y += 40;
                }
                blueBg_2.y = y;
                scrollingContainer.addChild(blueBg_2);
            }
            y += 40;
            var greenBg_1 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.green.bg_1);
            scrollingContainer.addChild(greenBg_1);
            greenBg_1.y = y;
            y += 46;
            for (var i = 0; i < 3; i++) {
                var greenBg_2 = new PIXI.UI.Sprite(Resources.userInfo.profile.skillList.green.bg_2);
                if (i > 0) {
                    y += 40;
                }
                greenBg_2.y = y;
                scrollingContainer.addChild(greenBg_2);
            }


            var uiStage = new PIXI.UI.Stage(400, 280);
            uiStage.y = 190;
            uiStage.x = 10;

            uiStage.addChild(scrollingContainer);
            uiStage.addChild(scrollbar);


            return uiStage;
        }

        initWound() {


            var scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 400,
                height: 280,
                scrollX: false,
                scrollY: true,
            });

            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: scrollingContainer,
                vertical: true,
                autohide: false
            });
            const style = new PIXI.TextStyle({
                fill: "yellow",
                fontFamily: "Helvetica",
                fontSize: 20,
                wordWrapWidth: 400
            });
            var text = new PIXI.UI.Text("Сеты", style);
            text.align = "center";


            scrollingContainer.addChild(text);

            var uiStage = new PIXI.UI.Stage(400, 280);
            uiStage.y = 190;
            uiStage.x = 10;


            scrollbar.anchorTop = 0;
            scrollbar.anchorRight = 0;
            uiStage.addChild(scrollingContainer);
            uiStage.addChild(scrollbar);
            return uiStage;
        }

        initSpells() {
            var scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 400,
                height: 280,
                scrollX: false,
                scrollY: true,
            });

            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: scrollingContainer,
                vertical: true,
                autohide: false
            });
            const style = new PIXI.TextStyle({
                fill: "yellow",
                fontFamily: "Helvetica",
                fontSize: 20,
                wordWrapWidth: 400
            });
            var text = new PIXI.UI.Text("Spells", style);
            text.align = "center";


            scrollingContainer.addChild(text);

            var uiStage = new PIXI.UI.Stage(400, 280);
            uiStage.y = 190;
            uiStage.x = 10;


            scrollbar.anchorTop = 0;
            scrollbar.anchorRight = 0;
            uiStage.addChild(scrollingContainer);
            uiStage.addChild(scrollbar);
            return uiStage;
        }

        initLayers() {
            var scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 400,
                height: 280,
                scrollX: false,
                scrollY: true,
            });

            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: scrollingContainer,
                vertical: true,
                autohide: false
            });
            const style = new PIXI.TextStyle({
                fill: "yellow",
                fontFamily: "Helvetica",
                fontSize: 20,
                wordWrapWidth: 400
            });
            var text = new PIXI.UI.Text("Layers", style);
            text.align = "center";


            scrollingContainer.addChild(text);

            var uiStage = new PIXI.UI.Stage(400, 280);
            uiStage.y = 190;
            uiStage.x = 10;


            scrollbar.anchorTop = 0;
            scrollbar.anchorRight = 0;
            uiStage.addChild(scrollingContainer);
            uiStage.addChild(scrollbar);
            return uiStage;
        }


    }

    class Inventory extends PIXI.Container {
        constructor() {
            super();


            this.itemSelected = null;

            var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 420);
            bgScroll.x = 30;
            bgScroll.y = 20;


            this.scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 370,
                height: 420,
                scrollX: false,
                scrollY: true,
            });

            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: this.scrollingContainer,
                vertical: true,
                autohide: false
            });
            const style = new PIXI.TextStyle({
                fill: "black",
                fontFamily: "Helvetica",
                fontSize: 14,
                align: "center"
            });
            var text = new PIXI.Text("МОЙ ИНВЕНТАРЬ", style);
            text.anchor.x = 0.5;
            text.x = 215;

            // scrollingContainer.addChild(text);

            var uiStage = new PIXI.UI.Stage(370, 420);
            uiStage.x = 30;
            uiStage.y = 20;


            // scrollbar.anchorTop = 0;
            scrollbar.anchorRight = 0;


            uiStage.addChild(this.scrollingContainer, scrollbar);

            var bWear = new Button(Resources.userInfo.inventory.wear, () => {

            });
            bWear.x = 25;

            var bTakeoff = new Button(Resources.userInfo.inventory.takeoff, () => {

            });
            bTakeoff.x = 100;

            var bUse = new Button(Resources.userInfo.inventory.use, () => {

            });
            bUse.x = 180;

            var bDrop = new Button(Resources.userInfo.inventory.drop, () => {

            });
            bDrop.x = 305;
            bWear.y = bTakeoff.y = bUse.y = bDrop.y = 450;


            this.addChild(text, bgScroll, uiStage, bWear, bTakeoff, bUse, bDrop);

        }

        loadItems(items) {
            this.scrollingContainer.innerContainer.removeChildren();
            let y = 0;
            for (let i = 0;i<items.length;i++) {
                let item = items[i];
                let itemSprite = new Item(item);
                itemSprite.y = y;
                y+=60;

                itemSprite.container.mouseup = (event) => {
                    if(this.itemSelected === itemSprite){
                        itemSprite.selection(false);
                        this.itemSelected = null;
                    }else {
                        if(this.itemSelected != null){
                            this.itemSelected.selection(false);
                        }
                        itemSprite.selection(true);
                        this.itemSelected = itemSprite;
                    }
                };


                this.scrollingContainer.addChild(itemSprite)

            }
        }

        updateItems(items) {

        }
    }

    class Log extends PIXI.Container {
        constructor() {
            super();

            var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 400, 440);
            bgScroll.x = 15;
            bgScroll.y = 30;


            var scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 400,
                height: 440,
                scrollX: false,
                scrollY: true,
            });

            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: scrollingContainer,
                vertical: true,
                autohide: false
            });


            var uiStage = new PIXI.UI.Stage(400, 440);
            uiStage.x = 15;
            uiStage.y = 30;


            scrollbar.anchorRight = 0;


            uiStage.addChild(scrollingContainer, scrollbar);

            var bLogfull = new Button(Resources.userInfo.log.buttonLogfull, () => {

            });
            bLogfull.x = 130;

            var bLogquest = new Button(Resources.userInfo.log.buttonLogquest, () => {

            });
            bLogquest.x = 220;


            bLogfull.y = bLogquest.y = 5;


            this.addChild(bgScroll, uiStage, bLogfull, bLogquest);


        }
    }

    class Info extends PIXI.Container {
        constructor() {
            super();

            var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 400, 440);
            bgScroll.x = 15;
            bgScroll.y = 10;


            var scrollingContainer = new PIXI.UI.ScrollingContainer({
                width: 400,
                height: 440,
                scrollX: false,
                scrollY: true,
            });

            var scrollbar = new PIXI.UI.ScrollBar({
                track: new PIXI.UI.TilingSprite(Resources.scroll.bar_bg_vertical, 13),
                handle: new PIXI.UI.TilingSprite(Resources.scroll.bar_thumb_vert2, 13),
                scrollingContainer: scrollingContainer,
                vertical: true,
                autohide: false
            });


            var uiStage = new PIXI.UI.Stage(400, 440);
            uiStage.x = 15;
            uiStage.y = 10;


            scrollbar.anchorRight = 0;


            uiStage.addChild(scrollingContainer, scrollbar);

            var bLogfull = new Button(Resources.userInfo.info.buttonSave, () => {

            });
            bLogfull.x = 170;

            bLogfull.y = 460;


            this.addChild(bgScroll, uiStage, bLogfull);


        }
    }

    return (PlayerInfo);
});