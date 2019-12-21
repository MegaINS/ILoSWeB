"use strict";


var loc;
var player;
var app;
var gui;
var socket;
var Location;


const CANVAS_HEIGHT = 650;
let CANVAS_WIDTH = window.innerWidth - 4;


require(["pixi"], function () {
    PIXI.loader
        .add('status', '/assets/img/json/status.json')
        .add('userInfo', '/assets/img/json/userInfo.json')
        .add('scroll', '/assets/img/json/scroll.json')
        .add('itemList', '/assets/img/json/itemList.json')
        .add('materials', '/assets/img/json/materials.json')
        .add('itemLayers', '/assets/img/json/itemLayers.json')
        .add('danges', '/assets/img/json/danges.json')
        .add('shop', '/assets/img/json/shop.json')
        .load(init);


});

function init(loader, resources) {

    require([
        "pixi-ui",
        "socket.io",
        "moment",
        'jquery',
        "Gui",
        "Button",
        "Resources",
        'location'
    ], function (pixiUi,
                 io,
                 moment,
                 $,
                 Gui,
                 Button,
                 Resources,
                 location
    ) {
        Location = location;
        // init(io);

        app = new PIXI.Application({
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT
        });
        document.body.appendChild(app.view);
        app.stage.sortableChildren = true;
       // document.querySelector('body > canvas').addEventListener('mousedown', function(e) { console.log('native', e.button, e); }, false);

        document.body.addEventListener("contextmenu", function (e) {
            //console.log(e);
            event.preventDefault()
        });


        player = new PIXI.Sprite(Resources.player);

        player.zIndex = 10;

        gui = new Gui();


        socket = io.connect('http://localhost:9040');
        setEventHandlers();

        Update();

    });


}

function Update() {
    app.renderer.render(app.stage);
    requestAnimationFrame(Update);
}

function setEventHandlers() {

    window.addEventListener('resize', resizeCanvas, false);

    socket.on('connect', function () {
        output('<span class="connect-msg">Client has connected to the server!</span>');
    });

    socket.on('chatevent', function (data) {
        output('<span class="username-msg">' + data.userName + ':</span> ' + data.message);
    });

    socket.on('disconnect', function () {
        output('<span class="disconnect-msg">The client has disconnected!</span>');
    });

    socket.on('loadPlayersList', function (data) {
        var players = "";
        for (var i = 0; i < data.list.length; i++) {
            players += '<div id ="player' + data.list[i].id + '"><div class="playerPrivate"></div> <span  class="username-list">' + data.list[i].name + '</span> <div class="playerInfo"></div>' + "</div>";
        }
        var element = $(players);
        $('#playerList').html(element);
    });

    socket.on('addPlayer', function (data) {
        var player = '<div id ="player' + data.id + '"><div class="playerPrivate"></div> <span  class="username-list">' + data.name + '</span> <div class="playerInfo"></div>' + "</div>";
        var element = $(player);
        $('#playerList').append(element);
    });

    socket.on('removePlayer', function (data) {
        $("#player" + data.id).remove();
    });


    socket.on('locationUpdate', function (data) {
        output('<span class="username-msg">LocationUpdate:</span> ' + data.locationType);

        if (window.loc != null) {
            window.loc.destroy();
        }

        switch (data.locationType) {
            case "OPEN":
                var location = new Location.Map(data.src, data.warps);
                window.loc = location;
                break;
            case "HAB":
                var location = new Location.Hab(data.weight, data.height, data.warps, data.area);

                window.loc = location;
                break;
            case "MINE":
                var location = new Location.Mine(data.weight, data.height, data.warps, data.tile, data.resources, data.mineType.toLowerCase());
                window.loc = location;
                break;


            default:
                console.log(data.locationType);
        }


    });


    socket.on('playerUpdate', function (data) {
        output('<span class="username-msg">PlayerUpdate:</span> ' + data.action);

        switch (data.action) {
            case "SPAWN":
                loc.spawn(player, data.x, data.y);
                break;
            case "MOVE":
                loc.move(player, data.x, data.y);
                break;
            default:
                console.log(data.action);
        }
        window.gui.update();
    });

    socket.on('enemyUpdate', function (data) {
        output('<span class="username-msg">EnemyUpdate:</span> ' + data.action);

        switch (data.action) {
            case "SPAWN":
                loc.spawnEnemy(data.id, data.x, data.y);
                break;
            case "MOVE":
                loc.moveEnemy(data.id, data.x, data.y);
                gui.update();
                break;
            case "REMOVE":
                loc.removeEnemy(data.id);
                break;
            default:
                console.log(data.action);
        }
    });

    socket.on('locUpdate', function (data) {
        output('<span class="username-msg">LocUpdate:</span> ' + data.x + ' ' + data.y);
        loc.update(data.x, data.y)
    });


    socket.on('loadPlayerInfo', function (data) {

        player.nick = data.nick;

        player.level = data.level;

        player.health = data.health;
        player.healthMax = data.healthMax;

        player.energy = data.energy;
        player.energyMax = data.energyMax;

        player.money = data.money;

        player.intellect = data.intellect;
        player.concentration = data.concentration;
        player.stamina = data.stamina;
        player.power = data.power;



        gui.status.nick.text = data.nick;

        gui.status.level.text = data.level;

        gui.status.health.text = data.health;
        gui.status.healthMax.text = data.healthMax;

        gui.status.energy.text = data.energy;
        gui.status.energyMax.text = data.energyMax;

        gui.status.money.text = data.money;

        gui.status.power.text = data.power;
        gui.status.intellect.text = data.intellect;
        gui.status.concentration.text = data.concentration;
        gui.status.stamina.text = data.stamina;




    });

    socket.on('loadPlayerInventory', function (data) {

        gui.userInfo.sections.inventory.loadItems(data.items)


    })
    socket.on('updatePlayerInventory', function (data) {

        gui.userInfo.sections.inventory.updateItems(data.items)


    })
}

function sendPacket(name, data) {
    socket.emit(name, data);
}


function resizeCanvas() {
    CANVAS_WIDTH = window.innerWidth - 4;
    app.renderer.resize(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function output(message) {
    var currentTime = "<span class='time'>" + moment().format('HH:mm') + "</span>";
    var element = $("<div>" + currentTime + " " + message + "</div>");
    $('#console').append(element);
    var sh = document.getElementById('console').scrollHeight;
    $("#console").animate({scrollTop: sh}, 600);

}

function sendMessage() {
    var message = $('#msg').val();
    $('#msg').val('');

    var jsonObject = {
        message: message
    };
    sendPacket('chatevent', jsonObject)
}
