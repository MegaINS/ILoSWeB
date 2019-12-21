<?php 

if(isset($_POST['submit'])){
    if (isset($_POST['pass'])){$pass=$_POST['pass'];}else{unset($_POST['pass']);}
    if (isset($_POST['email'])){$email=$_POST['email'];}else{unset($_POST['email']);}
    if (isset($_POST['nick'])){$nick=$_POST['nick'];}else{unset($_POST['nick']);}
    
    if (empty($email)){ 
        $errors["email"] = true;
    }
    if (empty($pass) ){ 
        $errors["pass"] = true;
    }
    if (empty($nick) ){ 
        $errors["nick"] = true;
    }
    
    
    
    if(empty($errors)){
        include('bd.php');


        $results = $mysqli->query("SELECT COUNT(*) FROM player_auth WHERE email='$email'");
        $get_total_rows = $results->fetch_row();

        if($get_total_rows[0]>0){
            $errors["email2"] = true;
        }

        $results = $mysqli->query("SELECT COUNT(*) FROM player_auth WHERE name='$nick'");
        $get_total_rows = $results->fetch_row();

        if($get_total_rows[0]>0){
             $errors["nick2"] = true;
        }

        if(empty($errors)){
            $insert_row = $mysqli->query("INSERT INTO player_auth (name, email, password) VALUES('$nick', '$email', '$pass')");

            if($insert_row){
                 session_start();
                 $_SESSION['name']=$nick; 
                 $_SESSION['id']=$mysqli->insert_id;
                 header("location: /main.php");
            }else{
                die('Error : ('. $mysqli->errno .') '. $mysqli->error);
            }
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
            <h1>Регистрация</h1>
        </div>
        <div>
            <form method="POST" action="register.php">
              <?php
                if(@$errors["nick"]){
                    echo "<p>Nick не может быть пустым!</p>";    
                }
                if(@$errors["nick2"]){
                    echo "<p>Nick занят!</p>";    
                }
                ?>
                <p><input type="text" name="nick" value="<?php echo @$nick ?>" placeholder="Nick"/></p>
                <?php
                if(@$errors["email"]){
                    echo "<p>Email не может быть пустым!</p>";    
                }
                if(@$errors["email2"]){
                    echo "<p>Email занят!</p>";    
                }
                ?>
                <p><input type="email" name="email" value="<?php echo @$email ?>"  placeholder="Email"/></p>
                <?php
                 if(@$errors["pass"]){
                    echo "<p>Password не может быть пустым!</p>";    
                }
                ?>
                <p><input type="password" name="pass" placeholder="Password"/></p>
                <p><button type="submit" name="submit">Войти в игру</button></p>
            </form>
        </div>
    </body>
</html>
