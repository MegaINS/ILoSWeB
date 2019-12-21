<?php 
if(isset($_POST['submit'])){
   if (isset($_POST['pass'])){$pass=$_POST['pass'];}else{unset($_POST['pass']);}
    if (isset($_POST['email'])){$email=$_POST['email'];}else{unset($_POST['email']);}
        
    if (empty($email)){ 
        $errors["email"] = true;
    }
    if (empty($pass) ){ 
        $errors["pass"] = true;
    }
    if(empty($errors)){
        include('bd.php');
        $player = $mysqli->query("SELECT * FROM player_auth WHERE email='$email'")->fetch_object();
        if($player){
            if($player->password == $pass){
                session_start();
                $_SESSION['name']=$player->name; 
                $_SESSION['id']=$player->id;
                header("location: /main.php");
            }else{
                $errors["email-pass"] = true;
            }
        }else{
            $errors["email-pass"] = true;
        }
    }
}
?>

<!DOCTYPE html>
<html>
    <head>  
        <meta charset="utf-8">
        <title>"IloS!</title>
    </head>
    <body>
        <div>
            <h1>IloS!</h1>
        </div>
        <div>
            <form method="POST" action="/">
                <?php
                if(@$errors["email"]){
                    echo "<p>Email не может быть пустым!</p>";    
                }
                if(@$errors["email-pass"]){
                    echo "<p>Неверный Email или Password!</p>";    
                }
                ?>
                <p><input type="email" name="email" placeholder="Email"/></p>   
                  <?php
                 if(@$errors["pass"]){
                    echo "<p>Password не может быть пустым!</p>";    
                }
                ?>
                <p><input type="password" name="pass" placeholder="Password"/></p>   
                <p><button type="submit" name="submit" >Войти в игру</button></p>   
            </form>
        </div>
        <div>
            <a href="/register.php">
                <button type="button">Регистрация</button>
            </a>
        </div>
    </body>
</html>