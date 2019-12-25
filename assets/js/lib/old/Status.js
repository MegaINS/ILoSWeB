define(['assets/js/Resources', 'assets/js/lib/old/Button'], function (Resources, Button) {

    class Status {


        constructor() {

            // this.container = new PIXI.Container();
            //
            //
            // this.container.interactive = true;
            // this.container.y = 30;
            //
            //
            //
            //
            // this.container.mouseup = (event) => {
            //     if (this.container.moving !== true) {
            //         const a = event.data.getLocalPosition(this.container);
            //
            //     } else {
            //         this.container.moving = false;
            //     }
            //     this.container.dragging = false;
            //
            // };
            //
            //
            // this.container.mousedown = (event) => {
            //     this.container.dragging = true;
            //     this.container.pos = event.data.getLocalPosition(this.container.parent);
            // };
            //
            // this.container.mousemove = (event) => {
            //     const pos = event.data.getLocalPosition(this.container);
            //
            //     if (this.container.dragging) {
            //         this.container.moving = true;
            //         const a = event.data.getLocalPosition(this.container.parent);
            //         this.container.x -= Math.round(this.container.pos.x - a.x);
            //         this.container.y -= Math.round(this.container.pos.y - a.y);
            //         this.container.pos = a;
            //     }
            //
            // };

            //
            // this.bg_attrs = new PIXI.Sprite(Resources.status.bg_attrs);
            // this.bg_items2 = new PIXI.Sprite(Resources.status.bg_items2);
            // this.bg_stats = new PIXI.Sprite(Resources.status.bg_stats);
            //
            //
            // this.bg_stats.y = 149;
            // this.bg_items2.y = 180;


            //
            //
            //
            // this.bRest = new Button(Resources.status.rest,()=>{});
            // this.bRest.x = 120;
            // this.bRest.y = 230;
            //
            // this.bCenter = new Button(Resources.status.center,()=>{});
            // this.bCenter.x = 70;
            // this.bCenter.y = 235;
            //
            // this.bEnter = new Button(Resources.status.enter, () => {sendPacket('action', {action: 'ENTER'})});
            //
            // this.bEnter.x = 8;
            // this.bEnter.y = 230;
            //
            //
            //
            // // this.container.addChild(this.bg_attrs);
            // // this.container.addChild(this.bg_stats);
            // // this.container.addChild(this.bg_items2);
            //
            //
            // this.container.addChild(this.bEnter);
            // this.container.addChild(this.bRest);
            // this.container.addChild(this.bCenter);


            const style = new PIXI.TextStyle({
                fill: "#e4f297",
                fontSize: 12,
                fontVariant: "small-caps"
            });
            this.nick = new PIXI.Text('', style);
            this.nick.x = 70;
            this.nick.y = 8;
            this.container.addChild(this.nick);

            this.level = new PIXI.Text('2', style);
            Object.assign(this.level, {x: 134, y: 41});

            this.container.addChild(this.level);


            this.money = new PIXI.Text('', style);

            this.money.x = 125;
            this.money.y = 83;
            this.container.addChild(this.money);


            this.power = new PIXI.Text('', style);

            this.power.x = 14;
            this.power.y = 163;
            this.container.addChild(this.power);


            this.stamina = new PIXI.Text('', style);

            this.stamina.x = 56;
            this.stamina.y = 163;
            this.container.addChild(this.stamina);

            this.concentration = new PIXI.Text('', style);

            this.concentration.x = 100;
            this.concentration.y = 163;
            this.container.addChild(this.concentration);

            this.intellect = new PIXI.Text('', style);

            this.intellect.x = 142;
            this.intellect.y = 163;
            this.container.addChild(this.intellect);


            this.health = new PIXI.Text('', style);

            this.health.x = 52;
            this.health.y = 109;
            this.container.addChild(this.health);

            this.healthLine = new PIXI.Text('/', style);

            this.healthLine.x = 75;
            this.healthLine.y = 109;

            this.container.addChild(this.healthLine);

            this.healthMax = new PIXI.Text('', style);

            this.healthMax.x = 80;
            this.healthMax.y = 109;
            this.container.addChild(this.healthMax);

            this.energy = new PIXI.Text('', style);

            this.energy.x = 52;
            this.energy.y = 129;
            this.container.addChild(this.energy);

            this.energyLine = new PIXI.Text('/', style);

            this.energyLine.x = 75;
            this.energyLine.y = 129;

            this.container.addChild(this.energyLine);

            this.energyMax = new PIXI.Text('', style);

            this.energyMax.x = 80;
            this.energyMax.y = 129;
            this.container.addChild(this.energyMax);


            // app.stage.addChild(this.container);
        }


        update() {
            this.bEnter.state(loc.playerIsInWarp())
        }

    }

    return (Status);
});