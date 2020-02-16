import * as socketIO from 'socket.io-client'
import {ILoSGame} from "./app";
import {LocationMine} from "./location/LocationMine";
import {LocationHab} from "./location/LocationHab";
import {LocationMap} from "./location/LocationMap";
import {Shop} from "./shop/Shop";


export class Network {

    private static network:Network;

    socket;
    game: ILoSGame;
    chat;
    private constructor(game) {
        this.game = game;
        this.chat = this.game.gui.bottom.chat;
        this.socket = socketIO.connect('http://localhost:9040');

        this.socket.on('connect', this.connected);
        this.socket.on('disconnect',  this.disconnect);
        this.socket.on('chatevent',  this.chatevent);
        this.socket.on('loadPlayerInfo', this.loadPlayerInfo);
        this.socket.on('locationUpdate', this.locationUpdate);

        this.socket.on('playerUpdate', this.playerUpdate);
        this.socket.on('enemyUpdate', this.enemyUpdate);
        this.socket.on('locUpdate', this.locUpdate);
        this.socket.on('loadPlayerInventory', this.loadPlayerInventory);

        this.socket.on('shopLoad', this.shopLoad);

        this.socket.on('loadPlayersList', this.loadPlayersList);
        this.socket.on('addPlayer', this.addPlayerInPlayersList);
        this.socket.on('removePlayer', this.removePlayerWithPlayersList);
    }

    private loadPlayersList =(data)  =>{
        this.game.gui.bottom.playerList.loadPlayersList(data)
    };
    private addPlayerInPlayersList =(data)  =>{
        this.game.gui.bottom.playerList.addPlayerInPlayersList(data)
    };
    private removePlayerWithPlayersList =(data)  =>{
        this.game.gui.bottom.playerList.removePlayerWithPlayersList(data)
    };



    private connected =()  =>{
        console.log('Client has connected to the server!');
        this.chat.addMessage(   "<font color='#00AA00'>Client has connected to the server!</font>\n");
    };

    private disconnect =()  => {
        this.chat.addMessage("<font color='#FF0000'>The client has disconnected!</font>");
    };

    private chatevent =(data)  => {
        this.chat.addMessage('<font color="#FFA500">' + data.userName + ':</font> ' + data.message);
    };


    private loadPlayerInfo = (data) =>{
        for (let i in data) {
            this.game.player[i] = data[i];
        }
        this.game.gui.update()
    };

    private locationUpdate = (data) =>{
        console.log('<span class="username-msg">LocationUpdate:</span> ' + data.locationType);

       // output('<span class="username-msg">LocationUpdate:</span> ' + data.locationType);

        let location;
        switch (data.locationType) {
            case "OPEN":
                location = new LocationMap(data.src, data.warps);
                break;
            case "HAB":
                location = new LocationHab(data.weight, data.height, data.warps, data.area);
                break;
            case "MINE":
                location = new LocationMine(data.weight, data.height, data.warps, data.tile, data.resources, data.mineType.toLowerCase());
                break;
            default:
                console.log(data.locationType);
        }

        this.game.gui.setLocation(location);
    };

    private playerUpdate =(data) =>{
        console.log('<span class="username-msg">PlayerUpdate:</span> ' + data.action);
       // output('<span class="username-msg">PlayerUpdate:</span> ' + data.action);

        switch (data.action) {
            case "SPAWN":
                this.game.gui.location.spawn(this.game.player, data.x, data.y);
                break;
            case "MOVE":
                this.game.gui.location.move(this.game.player, data.x, data.y);
                break;
            default:
                console.log(data.action);
        }
        this.game.gui.update();
    };

    private enemyUpdate =(data) =>{
        console.log('<span class="username-msg">EnemyUpdate:</span> ' + data.action);
       // output('<span class="username-msg">EnemyUpdate:</span> ' + data.action);

      if( this.game.gui.location != null) {
          switch (data.action) {
              case "SPAWN":
                  this.game.gui.location.spawnEnemy(data.id, data.x, data.y);
                  break;
              case "MOVE":
                  this.game.gui.location.moveEnemy(data.id, data.x, data.y);
                  break;
              case "REMOVE":
                  this.game.gui.location.removeEnemy(data.id);
                  break;
              default:
                  console.log(data.action);
          }
      }

    };




    private locUpdate =(data) =>{
        console.log('<span class="username-msg">LocUpdate:</span> ' + data.x + ' ' + data.y);
       // output('<span class="username-msg">LocUpdate:</span> ' + data.x + ' ' + data.y);
        this.game.gui.location.update(data.x, data.y)
    };
    private loadPlayerInventory =(data) =>{
        this.game.player.items = data.items;
        this.game.gui.userInfo.sections.inventory.loadItems(data.items);
        if( this.game.gui.shop!= null){
            this.game.gui.shop.loadItems(data.items);
        }
    };



    private shopLoad = (data)=>{
        this.game.gui.openShop(new Shop(this.game,data));
    };

    static connect(game) {
        if(Network.network == null){
            Network.network = new Network(game);
        }
    }

    static sendPacket(name,data) {
       Network.network.socket.emit(name, data);
    }
}