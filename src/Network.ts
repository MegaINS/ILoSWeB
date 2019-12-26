import * as socketIO from 'socket.io-client'
import {ILoSGame} from "./app";
import {LocationMine} from "./location/LocationMine";
import {LocationHab} from "./location/LocationHab";
import {LocationMap} from "./location/LocationMap";


export class Network {

    private static network:Network;

    socket;
    game: ILoSGame;

    private constructor(game) {
        this.game = game;
        this.socket = socketIO.connect('http://localhost:9040');

        this.socket.on('connect', this.connected);
        this.socket.on('loadPlayerInfo', this.loadPlayerInfo);
        this.socket.on('locationUpdate', this.locationUpdate);

        this.socket.on('playerUpdate', this.playerUpdate);
        this.socket.on('enemyUpdate', this.enemyUpdate);
        this.socket.on('locUpdate', this.locUpdate);

    }


    private connected =()  =>{
        console.log('Client has connected to the server!');
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

        if ( this.game.location != null) {
            this.game.app.stage.removeChild(this.game.location);
            this.game.location.destroy();
        }

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

        this.game.app.stage.addChild(location);
        this.game.location = location;
    };

    private playerUpdate =(data) =>{
        console.log('<span class="username-msg">PlayerUpdate:</span> ' + data.action);
       // output('<span class="username-msg">PlayerUpdate:</span> ' + data.action);

        switch (data.action) {
            case "SPAWN":
                this.game.location.spawn(this.game.player, data.x, data.y);
                break;
            case "MOVE":
                this.game.location.move(this.game.player, data.x, data.y);
                break;
            default:
                console.log(data.action);
        }
        this.game.gui.update();
    };

    private enemyUpdate =(data) =>{
        console.log('<span class="username-msg">EnemyUpdate:</span> ' + data.action);
       // output('<span class="username-msg">EnemyUpdate:</span> ' + data.action);

        switch (data.action) {
            case "SPAWN":
                this.game.location.spawnEnemy(data.id, data.x, data.y);
                break;
            case "MOVE":
                this.game.location.moveEnemy(data.id, data.x, data.y);
               // this.game.gui.update();
                break;
            case "REMOVE":
                this.game.location.removeEnemy(data.id);
                break;
            default:
                console.log(data.action);
        }
    };

    private locUpdate =(data) =>{
        console.log('<span class="username-msg">LocUpdate:</span> ' + data.x + ' ' + data.y);
       // output('<span class="username-msg">LocUpdate:</span> ' + data.x + ' ' + data.y);
        this.game.location.update(data.x, data.y)
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