<?php

  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $educUpdated = $_POST["educUpdated"];
  $userID = $_SESSION['userID'];

  if ($query = mysqli_query($connection,"UPDATE `usuarios` SET `educacion`='$educUpdated' WHERE id='$userID';")) {
    echo 1;
  } else {
    echo 0;
  }



 ?>
