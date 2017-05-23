<?php

  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $localUpdated = $_POST["localUpdated"];
  $userID = $_SESSION['userID'];

  if ($query = mysqli_query($connection,"UPDATE `usuarios` SET `local`='$localUpdated' WHERE id='$userID';")) {
    echo 1;
  } else {
    echo 0;
  }



 ?>
