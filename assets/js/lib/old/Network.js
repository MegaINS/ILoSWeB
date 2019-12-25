define("Network", ["assets/js/lib/socket.io", "Location"], function (io, Location) {

    class Network {

        constructor() {

            this.socket = io.connect('http://ilos.local:9040');
            this.socket.on('connect', function () {
                output('<span class="connect-msg">Client has connected to the server!</span>');
            });

            this.socket.on('chatevent', function (data) {
                output('<span class="username-msg">' + data.userName + ':</span> ' + data.message);
            });

            this.socket.on('disconnect', function () {
                output('<span class="disconnect-msg">The client has disconnected!</span>');
            });

            this.socket.on('loadPlayersList', function (data) {
                var players = "";
                for (var i = 0; i < data.list.length; i++) {
                    players += '<div id ="player' + data.list[i].id + '"><div class="playerPrivate"></div> <span  class="username-list">' + data.list[i].name + '</span> <div class="playerInfo"></div>' + "</div>";
                }
                var element = $(players);
                $('#playerList').html(element);
            });

            this.socket.on('addPlayer', function (data) {
                var player = '<div id ="player' + data.id + '"><div class="playerPrivate"></div> <span  class="username-list">' + data.name + '</span> <div class="playerInfo"></div>' + "</div>";
                var element = $(player);
                $('#playerList').append(element);
            });

            this.socket.on('removePlayer', function (data) {
                $("#player" + data.id).remove();
            });


            this.socket.on('locationUpdate', function (data) {
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
                        var location = new Location.Hab(data.weight, data.height, data.warps);

                        window.loc = location;
                        break;
                    case "MINE":
                        var location = new Location.Mine(data.weight, data.height, data.warps, data.tile);
                        window.loc = location;
                        break;


                    default:
                        console.log(data.locationType);
                }
            });


            this.socket.on('playerUpdate', function (data) {
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

            this.socket.on('enemyUpdate', function (data) {
                output('<span class="username-msg">EnemyUpdate:</span> ' + data.action);

                switch (data.action) {
                    case "SPAWN":
                        loc.spawnEnemy(data.id, data.x, data.y);
                        break;
                    case "MOVE":
                        loc.moveEnemy(data.id, data.x, data.y);
                        break;
                    case "REMOVE":
                        loc.removeEnemy(data.id);
                        break;
                    default:
                        console.log(data.action);
                }
            });

            this.socket.on('locUpdate', function (data) {
                output('<span class="username-msg">LocUpdate:</span> ' + data.x + ' ' + data.y);
                loc.update(data.x, data.y)
            });



        }

        sendPacket(name, data) {
            this.socket.emit(name, data);
        };
    }

    return (Network);



});
