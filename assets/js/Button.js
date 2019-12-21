define(function () {

    class Button extends PIXI.Sprite{

        constructor(textureArray, func) {
            super(textureArray.btn);
            this.func = func;
            this.textureArray = textureArray;
            this.state(true);


        }

        state(active){

            if(active !== this.isActive){
                this.isActive = active;
                this.texture = active ? this.textureArray.btn : this.textureArray.dis;
                this.interactive = active;

            }

        }

        mouseup = (event) => {
            if (this.isActive) {
                this.texture = this.textureArray.over;
                this.func();
            }
        };

        mousedown = (event) => {
            if (this.isActive) {
                this.texture = this.textureArray.sel;
            }
        };

        mouseover = (event) => {

            if (this.isActive) {
                this.texture = this.textureArray.over;
            }
        };
        mouseout = (event) => {
            if (this.isActive) {
                this.texture = this.textureArray.btn;
            }
        };



    }

    return (Button);
});
