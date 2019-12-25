define(['Resources','assets/js/lib/old/Button'],function (Resources, Button) {

    class Shop{
        constructor() {


            this.container = new PIXI.Container();
            this.container.y= 25;

            this.bg2 = new PIXI.TilingSprite(Resources.bg, 425, 530);
            this.bg2.width =CANVAS_WIDTH;
            this.bg2.height = CANVAS_HEIGHT;
            this.container.addChild(  this.bg2);

            this.initMyInventory();
            this. initShopInventory();


            app.stage.addChild(this.container);

        }

        initMyInventory(){
            var bgScroll = new PIXI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 420);
            bgScroll.x = 31;
            bgScroll.y = 21;


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


            var uiStage = new PIXI.UI.Stage(370, 420);
            uiStage.x = 30;
            uiStage.y = 20;


            scrollbar.anchorRight = 0;


            uiStage.addChild(this.scrollingContainer, scrollbar);



            var bDrop = new Button(Resources.shop.buttonSell, () => {

            });
            bDrop.x = 240;
            bDrop.y = 450;


            this.container.addChild(text, bgScroll, uiStage,  bDrop);
        }

        initShopInventory(){


            var container = new PIXI.Container();
            container.x = 400;

            const style = new PIXI.TextStyle({
                fill: "black",
                fontFamily: "Helvetica",
                fontSize: 14,
                align: "center"
            });

            var text = new PIXI.Text("ВСЕ ТОВАРЫ", style);
            text.anchor.x = 0.5;
            text.x = 215;

            var bDrop = new Button(Resources.shop.buttonBuy, () => {

            });
            bDrop.x = 40;
            bDrop.y = 580;



            var buttonContainer = new PIXI.Container();
            buttonContainer.y = 20;
            buttonContainer.x = 100;


            var bg_group1 = new PIXI.Sprite(Resources.shop.bg_group1);
            var bg_group2 = new PIXI.Sprite(Resources.shop.bg_group2);

            var bAll = new Button(Resources.shop.classAll, () => {

            });
            bAll.x = 3;
            bg_group2.x = 219;
            buttonContainer.addChild(bg_group1,bAll);




            for (let i = 1; i < 8; i++) {
                var bClass= new Button(Resources.shop['class'+i], () => {

                });
                bClass.x =3+ i*27;
                buttonContainer.addChild(bClass);

            }
            buttonContainer.addChild(bg_group2);


            container.addChild(text,  bDrop,buttonContainer);


            this.container.addChild(container);

            var groupsName =[
                'books',
                'tools'
            ];




            this.groups ={
                books:new Groups('books',['book']),
                tools:new Groups('tools'),
            };



            var groupsButtonContainer = new PIXI.Container();
            groupsButtonContainer.y = 55;
            groupsButtonContainer.x = 100;


            var bg_group3 = new PIXI.Sprite(Resources.shop.bg_group1);
            var bg_group4 = new PIXI.Sprite(Resources.shop.bg_group2);


            groupsButtonContainer.addChild(bg_group3);
            bg_group4.x = 150;


            for (let i in groupsName) {
                var bGroup= new Button(Resources.shop.groups[groupsName[i]], () => {

                });
                bGroup.x =3+ i*66;
                groupsButtonContainer.addChild(bGroup);

            }

            groupsButtonContainer.addChild(bg_group4);


            container.addChild(groupsButtonContainer);


            this.groups.books.y =85;
            container.addChild( this.groups.books);



        }



    }


    class Groups extends PIXI.Container{
        constructor(name,types) {
            super();


            var buttonContainer = new PIXI.Container();
            buttonContainer.x = 100;


            var bg_group1 = new PIXI.Sprite(Resources.shop.bg_group1);
            var bg_group2 = new PIXI.Sprite(Resources.shop.bg_group2);


            buttonContainer.addChild(bg_group1);

            bg_group2.x = 219;
            this.types ={};

            for (let i in types) {

                let type = types[i];
                var bTypes= new Button(Resources.shop.types[type], () => {

                });
                var bg_type_count = new PIXI.Sprite(Resources.shop.bg_type_count);
                bg_type_count.y = 45;
                bg_type_count.x = 4+i*40;
                bTypes.x = i*40;

                buttonContainer.addChild(bTypes,bg_type_count);

                this.types[type] = new Types(type);
                this.types[type].y = 65;


                if(  i === '0'){
                    this.addChild( this.types[type]);

                }
            }

            buttonContainer.addChild(bg_group2);







            this.addChild(buttonContainer);




        }
    }

    class Types extends PIXI.Container{
        constructor(name) {
            super();



            var bgScroll = new PIXI.UI.TilingSprite(Resources.userInfo.profile.skillList.bg, 370, 420);


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



            var uiStage = new PIXI.UI.Stage(370, 420);
            uiStage.x = 30;


            scrollbar.anchorRight = 0;

            uiStage.addChild(bgScroll,this.scrollingContainer, scrollbar);


            this.addChild(uiStage);



        }
    }

    return(Shop);
});