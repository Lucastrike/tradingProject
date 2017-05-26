<?php

  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $capIni = $_POST["capital_inicial"];
  $userID = $_SESSION['userID'];

  if ($query2 = mysqli_query($connection,"DELETE FROM `operacion` WHERE id_usuario='$userID'")) {
    if ($query = mysqli_query($connection,"UPDATE `usuarios` SET `cap_inicial`='$capIni', `balance`='$capIni' WHERE id='$userID';")) {
      echo 1;
    } else {
      echo 0;
    }
  }

 ?>
