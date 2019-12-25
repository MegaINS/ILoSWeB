import {Location} from "./Location";
import {Resources} from "../Resources";



export  class LocationMine extends Location {

    tileSize: number = 102;
    width ;
    height ;
    tile ;
    resources ;
    sprites;

    constructor(width, height, warps, tile, resources) {
        super(warps);

        this.width = width;
        this.height = height;
        this.tile = tile;
        this.resources = resources;
        this.sprites = [];

        const style = new PIXI.TextStyle({
            fill: "white",
            fontFamily: "Helvetica",
            fontSize: 12,
            align: "center"
        });

        for (let i = 0; i < width; i += 1) {
            for (let j = 0; j < height; j += 1) {

                let sprite = new PIXI.Sprite();
                this.sprites[i + j * height] = sprite;

                this.setSpriteTex(i, j);
                sprite.setTransform(i * 102,j * 102);

                let textWeight = new PIXI.Text(i+" | "+j, style);
                textWeight.setTransform(40+ i * 102,30+ j * 102);

                this.addChild(sprite,textWeight);
            }
        }

        for (let i = 0; i < this.warps.length; i += 1) {
            let warp = this.warps[i];
            let sprite = new PIXI.Sprite(/*Resources.warp*/);
            sprite.setTransform(warp.x * 102,warp.y * 102);
            this.addChild(sprite);

        }

        for (let i = 0; i < this.resources.length; i += 1) {
            let resource = this.resources[i];
            let sprite = new PIXI.Sprite(/*Resources.resources[resource.scr]*/);
            sprite.setTransform(resource.x * 102,resource.y * 102);
            resource.sprite = sprite;
            this.addChild(sprite);
        }

    }

    update(x, y) {

        this.tile[x + y * this.height] = 0;

        this.setSpriteTex(x, y);
        if (x - 1 > -1 && this.tile[x-1 + y * this.height] === 0 ) this.setSpriteTex(x - 1, y);

        if (x + 1 < this.width && this.tile[x+1 + y * this.height] === 0) this.setSpriteTex(x + 1, y);
        if (y - 1 > -1 && this.tile[x + (y-1) * this.height] === 0) this.setSpriteTex(x, y - 1);
        if (y + 1 < this.height && this.tile[x + (y+1) * this.height] === 0) this.setSpriteTex(x, y + 1);

        let resource = this.resources.find(r => r.x === x && r.y === y);
        if (resource != null) {
            this.removeChild(resource.sprite);
            this.resources.splice(this.resources.indexOf(resource),1);
        }
    }

    setSpriteTex(x, y) {
        let isFullCenter = this.tile[x + y * this.height] > 0;
        let tex;
        if (isFullCenter) {
            tex; //= //Resources.danges[this.area][0].full[getRandomInt(0, Resources.danges[this.area][0].full.length)];
        } else {
            let isFullUp = this.tile[x + (y - 1) * this.height] == 0;
            let isFullDown = this.tile[x + (y + 1) * this.height] == 0;
            let isFullLeft = this.tile[(x - 1) + y * this.height] == 0;
            let isFullRight = this.tile[(x + 1) + y * this.height] == 0;

            let index = (isFullUp ? 8 : 0) + (isFullDown ? 4 : 0) + (isFullLeft ? 2 : 0) + (isFullRight ? 1 : 0);

            tex;// = Resources.danges[this.area][0].paths[index];
        }
        this.sprites[x + y * this.height].texture = tex;
    }
}