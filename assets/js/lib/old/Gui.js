define(['assets/js/lib/old/Status','assets/js/lib/old/Top','UserInfo','Shop'],function (Status, Top, UserInfo, Shop) {
    class Gui {

        constructor() {
            this.status = new Status();
             this.userInfo = new UserInfo();
             this.top = new Top(this);

           // this.shop = new Shop();

        }


        update() {
             this.status.update();
        }
    }
    return (Gui);
});


