define(['assets/js/Resources','assets/js/lib/old/Button'],function (Resources, Button) {

    class Top {

        constructor(gui) {

            this.container = new PIXI.Container();

            this.bg = new PIXI.TilingSprite(Resources.top.bg,CANVAS_WIDTH,25);



            this.location = new PIXI.Container();
            this.location.x = CANVAS_WIDTH/2-126;

            this.bg_title_1 = new PIXI.Sprite(Resources.top.bg_title_1);
            this.bg_title_2 = new PIXI.TilingSprite(Resources.top.bg_title_2,200,25);
            this.bg_title_2.x = 26;

            this.bg_title_3 = new PIXI.Sprite(Resources.top.bg_title_3);
            this.bg_title_3.x = 226;




            this.buttons = new PIXI.Container();
            this.buttons.y = 3;
            this.buttons.x = 3;


            this.bProfile = new Button(Resources.top.profile,()=>{gui.userInfo.show('profile')});


            this.bInventory = new Button(Resources.top.inventory,()=>{gui.userInfo.show('inventory')});
            this.bInventory.x = 89;

            this.bLog = new Button(Resources.top.log,()=>{gui.userInfo.show('log')});
            this.bLog.x = 152;

            this.bInfo = new Button(Resources.top.info,()=>{gui.userInfo.show('info')});
            this.bInfo.x = 233;

            this.bClose = new Button(Resources.top.close,()=>{document.location.href = "/logout.php";});
            this.bClose.x = CANVAS_WIDTH - 90;


            this.buttons.addChild(this.bInfo);
            this.buttons.addChild(this.bProfile);
            this.buttons.addChild(this.bLog);
            this.buttons.addChild(this.bInventory);
            this.buttons.addChild(this.bClose);




            this.location.addChild(this.bg_title_1);
            this.location.addChild(this.bg_title_2);
            this.location.addChild(this.bg_title_3);


            this.container.addChild(this.bg);
            this.container.addChild(this.location);
            this.container.addChild(this.buttons);




            // this.bg12 = new PIXI.UI.TilingSprite(Resources.top.bg,CANVAS_WIDTH,CANVAS_HEIGHT);
            // this.ScrollingContainer = new PIXI.UI.ScrollingContainer({width : 400, height : 400, scrollX: true, scrollY: true });
            //
            // this.ScrollingContainer.addChild(this.bg12);
            //
            //  var uiStage = new PIXI.UI.Stage(200, 100);
            // uiStage.addChild(this.ScrollingContainer);
            // this.container.addChild(uiStage);
            app.stage.addChild(this.container);
        }
    }
    return (Top);
});
