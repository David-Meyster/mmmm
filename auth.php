<?php
    $db = new mysqli(
        'localhost',
        'root',
        'root',
        'topdrop'
    );

    $user_name = $_POST['user_name'];
    $password = $_POST['password'];
    
    
    $query = $db->query("SELECT `password` FROM `users` WHERE `user_name` = '$user_name'");
    $user = $query->fetch_assoc();

    
    if ($user && password_verify($password, $user['password'])) {
      $balance = $db->query("SELECT `balance` FROM `users` WHERE `user_name` = '$user_name'");
    } else {
      echo 'not good';
    }
    
?>