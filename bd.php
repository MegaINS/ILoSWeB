<?php
    $host="localhost";
	$user="Bukka";
	$password="04041992q";
	$base="ilos";
    $mysqli = new mysqli($host, $user,$password,$base);


    if ($mysqli->connect_error) {
        die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
    }
?>