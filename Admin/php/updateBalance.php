<?php

  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $balance = $_POST["balance"];
  $userID = $_SESSION['userID'];

  if ($query = mysqli_query($connection,"UPDATE `usuarios` SET `balance`='$balance' WHERE id='$userID';")) {
    echo 1;
  } else {
    echo 0;
  }



 ?>
