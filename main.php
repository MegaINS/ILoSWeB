<?php
    session_start();
    if(isset($_SESSION['id'])){
        include('bd.php');
        $id = $_SESSION['id']; 
        $name = $_SESSION['name']; 
        $session = uniqid();
       
        $results = $mysqli->query("UPDATE player_auth SET session='$session' WHERE id='$id'");
        if($results){
            setcookie("GAME_SESSION", $session);
        }else{
            die('Error : ('. $mysqli->errno .') '. $mysqli->error);
        }
    }else{
         header("location: /");
    }
?>
<!DOCTYPE html>
<html>
    <head>  
        <meta charset="utf-8">
        <title>"Ilos!</title>
        <link rel="stylesheet" media="screen" href="assets/css/game.css">
<!--        <script src="js/lib/socket.io.js" type = "text/javascript"></script>-->
       <?php //$a = rand(); echo "?myparam=$a"; ;?>
<!--
        <script  src="/js/lib/pixi.js"></script>
         <script type="module" src="/js/game.js"></script>
-->
         <script src="/assets/js/lib/require.js" data-main="/assets/js/config.js"></script>

    </head>
    <body>


        <div class="static" id="bottomMenu">
            <div id="chat">
                <h3>Chat</h3>
                <div id="console" class="well">
                </div>
                <form class="well form-inline" onsubmit="return false;">
                    <input id="msg" class="input-xlarge" type="text" placeholder="Type something..."/>
                    <button type="button" onClick="sendMessage()" class="btn btn-primary" id="send">Send</button>
                </form>
            </div>
            <div id="players">
                <h3>Player list</h3>
                <div id="playerList" class="well">
            </div>
        </div>
    </div>
    </body>
</html>