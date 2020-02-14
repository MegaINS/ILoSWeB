// define(["assets/js/Resources"], function (Resources) {
//
//     // class ALocation {
//     //
//     //     constructor(x, y,warps) {
//     //
//     //
//     //         // if (ALocation === this.constructor) {
//     //         //     throw new TypeError('Abstract class "Location" cannot be instantiated directly.');
//     //         // }
//     //         // this.warps = warps;
//     //         // this.cursor = new PIXI.Sprite(Resources.cursor[1]);
//     //         // this.cursor.zIndex = 9;
//     //         //this.container = new PIXI.Container();
//     //        //this.container.zIndex = -1;
//     //         this.container.sortableChildren = true;
//     //      //   this.enemys = [];
//     //         // this.xl = x;
//     //         // this.yl = y;
//     //
//     //        // this.container.interactive = true;
//     //
//     //         // this.container.click = (event) => {
//     //         //
//     //         //     const a = event.data.getLocalPosition(this.container);
//     //         //     sendPacket('action', {
//     //         //         action: 'CLICK',
//     //         //         data: [
//     //         //             Math.floor(a.x / x),
//     //         //             Math.floor(a.y / y)
//     //         //         ]
//     //         //     });
//     //         // };
//     //         //
//     //         // this.container.rightup = (event) => {
//     //         //     if (this.container.moving === true) {
//     //         //         this.container.moving = false;
//     //         //     }
//     //         //     this.container.dragging = false;
//     //         //
//     //         // };
//     //         //
//     //         //
//     //         // this.container.rightdown = (event) => {
//     //         //     this.container.dragging = true;
//     //         //     this.container.pos = event.data.getLocalPosition(this.container.parent);
//     //         // };
//     //         //
//     //         // this.container.mousemove = (event) => {
//     //         //     const pos = event.data.getLocalPosition(this.container);
//     //         //
//     //         //     this.cursor.x = Math.floor(pos.x / x) * x;
//     //         //     this.cursor.y = Math.floor(pos.y / y) * y;
//     //         //
//     //         //     if (this.container.dragging) {
//     //         //
//     //         //
//     //         //         this.container.moving = true;
//     //         //         const a = event.data.getLocalPosition(this.container.parent);
//     //         //         this.container.x -= Math.round(this.container.pos.x - a.x);
//     //         //         this.container.y -= Math.round(this.container.pos.y - a.y);
//     //         //         this.container.pos = a;
//     //         //     }
//     //         //
//     //         // };
//     //         //
//     //         // this.container.mouseover = (event) => {
//     //         //     this.container.addChild(this.cursor);
//     //         // };
//     //         // this.container.mouseout = (event) => {
//     //         //     this.container.removeChild(this.cursor);
//     //         // };
//     //
//     //         app.stage.addChild(this.container);
//     //     }
//     //
//     //     // spawn(player, x, y) {
//     //     //     player.x = x * this.xl;
//     //     //     player.y = y * this.yl;
//     //     //     this.container.addChild(player);
//     //     // }
//     //     //
//     //     // move(player, x, y) {
//     //     //     player.x = x * this.xl;
//     //     //     player.y = y * this.yl;
//     //     // }
//     //     //
//     //     //
//     //     // spawnEnemy(id, x, y) {
//     //     //     var enemy = new PIXI.Sprite(Resources.enemy);
//     //     //     enemy.x = x * this.xl + 15;
//     //     //     enemy.y = y * this.yl - 15;
//     //     //     this.enemys[id] = enemy;
//     //     //     this.container.addChild(enemy);
//     //     // }
//     //     //
//     //     // moveEnemy(id, x, y) {
//     //     //     var enemy = this.enemys[id];
//     //     //     enemy.x = x * this.xl + 15;
//     //     //     enemy.y = y * this.yl - 15;
//     //     // }
//     //     //
//     //     // removeEnemy(id) {
//     //     //     this.container.removeChild(this.enemys[id]);
//     //     //     this.enemys[id] = null;
//     //     // }
//     //     //
//     //     // playerIsInWarp() {
//     //     //     for (var i = 0; i < this.warps.length; i += 1) {
//     //     //         var warp = this.warps[i];
//     //     //         if (player.x / this.xl == warp.x && player.y / this.yl == warp.y) {
//     //     //             return true;
//     //     //         }
//     //     //     }
//     //     //     return false;
//     //     // }
//     //
//     //     destroy() {
//     //         app.stage.removeChild(this.container);
//     //     }
//     //
//     // }
//
//
//     // class LocationMap extends ALocation {
//     //
//     //
//     //     constructor(scr, warps) {
//     //         super(100, 100,warps);
//     //
//     //         var loc = Resources.location.get(scr);
//     //
//     //         this.locSpr = new PIXI.Sprite(loc);
//     //
//     //         this.container.addChild(this.locSpr);
//     //
//     //     }
//     // }
//
//
//     class LocationMine extends ALocation {
//
//
//         constructor(weight, height, warps, tile, resources, area) {
//             super(102, 102,warps);
//
//             this.area = area;
//             this.weight = weight;
//             this.height = height;
//             this.tile = tile;
//             this.resources = resources;
//
//             this.container.zIndex = -1;
//
//             this.sprites = [];
//
//
//
//             for (var i = 0; i < weight; i += 1) {
//                 for (var j = 0; j < height; j += 1) {
//
//
//                     var sprite = new PIXI.Sprite();
//                     this.sprites[i + j * height] = sprite;
//
//                     this.setSpriteTex(i, j);
//
//
//
//                     sprite.x = i * 102;
//                     sprite.y = j * 102;
//
//                     const style = new PIXI.TextStyle({
//                         fill: "white",
//                         fontFamily: "Helvetica",
//                         fontSize: 12,
//                         align: "center"
//                     });
//
//                     var textWeight = new PIXI.Text(i+" | "+j, style);
//                     textWeight.x =40+ i * 102;
//                     textWeight.y = 30+ j * 102;
//
//                     this.container.addChild(sprite);
//                     this.container.addChild(textWeight);
//                 }
//             }
//
//             for (var i = 0; i < this.warps.length; i += 1) {
//                 var warp = this.warps[i];
//                 var sprite = new PIXI.Sprite(Resources.warp);
//                 sprite.x = warp.x * 102;
//                 sprite.y = warp.y * 102;
//
//
//
//                 this.container.addChild(sprite);
//
//             }
//             for (var i = 0; i < this.resources.length; i += 1) {
//                 var resource = this.resources[i];
//                 var sprite = new PIXI.Sprite(Resources.resources[resource.scr]);
//                 sprite.x = resource.x * 102;
//                 sprite.y = resource.y * 102;
//                 resource.sprite = sprite;
//                 this.container.addChild(sprite);
//             }
//
//         }
//
//         update(x, y) {
//
//             this.tile[x + y * this.height] = 0;
//
//             this.setSpriteTex(x, y);
//             if (x - 1 > -1 && this.tile[x-1 + y * this.height] === 0 ) this.setSpriteTex(x - 1, y);
//
//             if (x + 1 < this.weight && this.tile[x+1 + y * this.height] === 0) this.setSpriteTex(x + 1, y);
//             if (y - 1 > -1 && this.tile[x + (y-1) * this.height] === 0) this.setSpriteTex(x, y - 1);
//             if (y + 1 < this.height && this.tile[x + (y+1) * this.height] === 0) this.setSpriteTex(x, y + 1);
//
//
//             let resource = this.resources.find(r => r.x === x && r.y === y);
//             if (resource != null) {
//                 this.container.removeChild(resource.sprite);
//                 this.resources.splice(this.resources.indexOf(resource),1);
//             }
//         }
//
//         setSpriteTex(x, y) {
//             var isFullCenter = this.tile[x + y * this.height] > 0;
//             var tex;
//             if (isFullCenter) {
//
//                 tex = Resources.danges[this.area][0].full[getRandomInt(0, Resources.danges[this.area][0].full.length)];
//
//
//
//             } else {
//                 var isFullUp = this.tile[x + (y - 1) * this.height] == 0;
//                 var isFullDown = this.tile[x + (y + 1) * this.height] == 0;
//                 var isFullLeft = this.tile[(x - 1) + y * this.height] == 0;
//                 var isFullRight = this.tile[(x + 1) + y * this.height] == 0;
//
//                 var index = (isFullUp ? 8 : 0) + (isFullDown ? 4 : 0) + (isFullLeft ? 2 : 0) + (isFullRight ? 1 : 0);
//
//
//                 tex = Resources.danges[this.area][0].paths[index];
//
//             }
//             this.sprites[x + y * this.height].texture = tex;
//         }
//
//
//     }
//
//     // class LocationHab extends ALocation {
//     //
//     //
//     //     constructor(weight, height, warps, area) {
//     //         super(102, 102,warps);
//     //
//     //         this.area = area;
//     //         var map = [];
//     //         for (var i = 0; i < weight; i++) {
//     //             for (var j = 0; j < height; j++) {
//     //                 map[i + j * height] = 0;
//     //             }
//     //         }
//     //
//     //
//     //         for (var i = 0; i < weight; i += 1) {
//     //             for (var j = 0; j < height; j += 1) {
//     //
//     //                 var sprite = new PIXI.Sprite(Resources.danges[this.area][0].paths[15]);
//     //                 var enemy = new PIXI.Sprite(this.enemy);
//     //
//     //                 sprite.x = i * 102;
//     //                 sprite.y = j * 102;
//     //
//     //                 this.container.addChild(sprite);
//     //
//     //             }
//     //         }
//     //
//     //         for (var i = 0; i < warps.length; i += 1) {
//     //             var warp = warps[i];
//     //             var sprite = new PIXI.Sprite(Resources.warp);
//     //             sprite.x = warp.x * 102;
//     //             sprite.y = warp.y * 102;
//     //             this.container.addChild(sprite);
//     //         }
//     //
//     //     }
//     // }
//
//
//     var Location = {
//         Map: LocationMap,
//         Hab: LocationHab,
//         Mine: LocationMine
//     };
//     return (Location);
// });
