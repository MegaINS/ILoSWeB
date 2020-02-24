<?php
    session_start();
    if(isset($_SESSION['id'])){
        include('bd.php');
        $id = $_SESSION['id']; 
        $name = $_SESSION['name']; 
        $session = uniqid();
       
        $results = $mysqli->query("UPDATE auth SET session='$session' WHERE id='$id'");
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
<html lang="ru">
    <head>  
        <meta charset="utf-8">
        <title>"Ilos!</title>
        <link rel="stylesheet" media="screen" href="assets/css/game.css">
        <script src="dist/app.js"></script>
    </head>
    <body>

    </body>
</html>