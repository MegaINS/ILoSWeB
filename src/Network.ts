import * as socketIO from 'socket.io-client'
import {ILoSGame} from "./app";


export class Network {

    socket;
    game:ILoSGame;

    constructor(game:ILoSGame) {
        this.game = game;
        this.socket = socketIO.connect('http://localhost:9040');

        this.socket.on(this.connect);
        this.socket.on(this.loadPlayerInfo);


    }

    connect(){
        console.log('Client has connected to the server!');
    }

    loadPlayerInfo(data){
        for (let i in data) {
            this.game.player[i] = data[i];
        }
        this.game.gui.update()
    }
}