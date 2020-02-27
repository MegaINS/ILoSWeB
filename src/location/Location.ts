import * as PIXI from 'pixi.js'
import {Resources} from "../Resources";
import {Network} from "../Network";
import {Player} from "../Player";

export abstract class Location extends PIXI.Container{

    warps;
    abstract tileSize:number;
    widthLoc:number;
    heightLoc:number;
    dragging: boolean;
    pos: PIXI.Point;

    enemys = [];

    player:Player;
    tileMap:number[];
    tileSprites = [];
    nextTile;
    moved = false;


    protected constructor(game,warps, width, height , tileMap) {
        super();
        this.widthLoc = width;
        this.heightLoc = height;
        this.warps = warps;
        this.zIndex = -1;
        this.interactive = true;
        this.player = game.player;
        this.tileMap = tileMap;
    }

    click = () => {
        if(this.tileSprites.length){
          this.nextTile = this.tileSprites.shift();
            Network.sendPacket('action', {
                action: 'CLICK',
                data: [
                    Math.floor( (this.nextTile.x - this.player.x) / this.tileSize),
                    Math.floor((this.nextTile.y - this.player.y)/ this.tileSize)
                ]
            });
            this.moved = true;
        }else{
            this.moved = false;
        }
    };


    rightup = () => {
        this.dragging = false;

    };

    rightdown = (event) => {
        this.dragging = true;
        this.pos = event.data.getLocalPosition(this.parent);
    };

    mousemove = (event) => {
        const pos = event.data.getLocalPosition(this);


        if (this.dragging) {
            const a = event.data.getLocalPosition(this.parent);
            this.x -= Math.round(this.pos.x - a.x);
            this.y -= Math.round(this.pos.y - a.y);
            this.pos = a;
        }
        this.findRoute(pos);
    };



    findRoute = (pos) => {

        if(this.moved){
            return;
        }

        while (this.tileSprites.length){
            let tileS = this.tileSprites.pop();
            this.removeChild(tileS);
        }




        let tX = Math.floor(pos.x / this.tileSize);
        let tY = Math.floor(pos.y / this.tileSize);
        let pX =  this.player.x /this.tileSize;
        let pY =  this.player.y /this.tileSize;

        if(tX<0 ||tY<0 ||tX>=this.widthLoc||tY>=this.heightLoc){
            return;
        }

        if(tX == pX && tY == pY){
            return;
        }




         let tempMap = new Array<number>(this.widthLoc * this.heightLoc).fill(0);


         let loop = 1;
         let end = false;
         tempMap[tX + tY * this.heightLoc] = -1;
         tempMap[pX + pY * this.heightLoc] = loop;

        let stop = 0;
        while (!end && stop<200){
            for (let x = 0; x < this.widthLoc && !end ; x++) {
                for (let y = 0; y < this.heightLoc  && !end; y++) {
                    if(tempMap[x + y * this.heightLoc ] == loop ){
                        for (let x1 = x-1; x1 < x+2  && !end; x1++) {
                            for (let y1 = y-1; y1 < y+2  && !end; y1++) {
                                if(x1>=0 && y1>=0&&
                                    x1<this.widthLoc && y1<this.heightLoc){
                                    if(tempMap[x1 + y1 * this.heightLoc ] == -1){
                                        loop--;
                                        end = true;
                                    }

                                    if(this.tileMap[x1 + y1 * this.heightLoc] == 0){
                                        if(tempMap[x1 + y1 * this.heightLoc ] == 0){
                                            tempMap[x1 + y1 * this.heightLoc ] = loop+1;
                                        }
                                    }

                                }
                            }
                        }
                    }
                }
            }
            loop++;
            stop++;
        }

        stop = 0;
        let road = [];
        if(end){
            road.push({x:tX,y:tY});

            end = false;

            while (loop != 1 && stop<200){
                let tile = road[road.length - 1];
                end = false;
                for (let x = tile.x-1; x < tile.x+2  && !end; x++) {
                    for (let y = tile.y-1; y < tile.y+2  && !end; y++) {
                        if(x>=0 && y>=0&&
                            x<this.widthLoc && y<this.heightLoc){
                            if(tempMap[x + y * this.heightLoc] == loop){
                                road.push({x:x,y:y});
                                end = true;
                            }
                        }
                    }
                }
                loop--;
                stop++;
            }


            while (road.length){
                let tile = road.pop();
                let tileS =  new PIXI.Sprite(Resources.cursors.pointer);
                tileS.x = tile.x * this.tileSize;
                tileS.y = tile.y * this.tileSize;
                this.tileSprites.push(tileS);
                tileS.zIndex = 9;
                this.addChild(tileS);
            }



        }





    };


    mouseover = () => {
        for (let i in this.tileSprites) {
            this.addChild( this.tileSprites[i]);
        }
    };

    mouseout = () => {
        for (let i in this.tileSprites) {
            this.removeChild( this.tileSprites[i]);
        }
    };

    spawn(x, y) {
        this.player.x = x * this.tileSize;
        this.player.y = y * this.tileSize;
        this.addChild(this.player);
    }

    move(x, y) {
        this.player.x = x * this.tileSize;
        this.player.y = y * this.tileSize;
        this.removeChild(this.nextTile);
        this.click();
    }


    spawnEnemy(id, x, y) {
        let enemy = new PIXI.Sprite(Resources.player.enemy);
        enemy.x = x * this.tileSize + 15;
        enemy.y = y * this.tileSize - 15;
        this.enemys[id] = enemy;
        this.addChild(enemy);
    }

    moveEnemy(id, x, y) {
        let enemy = this.enemys[id];
        enemy.x = x * this.tileSize + 15;
        enemy.y = y * this.tileSize - 15;
    }

    removeEnemy(id) {
        this.removeChild(this.enemys[id]);
        this.enemys[id] = null;
    }

    playerIsInWarp(player) {
        for (let i = 0; i < this.warps.length; i += 1) {
            const warp = this.warps[i];
            if (player.x / this.tileSize == warp.x && player.y / this.tileSize == warp.y) {
                return true;
            }
        }
        return false;
    }

    update(x:number,y:number):void{

    }



}


