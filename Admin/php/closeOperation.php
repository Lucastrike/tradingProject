<?php

  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $ordenID = $_POST["ordenId"];
  $userID = $_SESSION['userID'];

  if ($query = mysqli_query($connection,"UPDATE `operacion` SET `id_estado`='2' WHERE id='$ordenID' AND id_usuario='$userID';")) {
    echo 1;
  } else {
    echo 0;
  }



 ?>
