<?php

  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $ordenID = $_POST["ordenId"];
  $userID = $_SESSION['userID'];

  $arrayMargin=array();

  if ($query = mysqli_query($connection,"UPDATE `operacion` SET `id_estado`='2' WHERE id='$ordenID' AND id_usuario='$userID';")) {

    $query2 = mysqli_query($connection,"SELECT margin FROM `operacion` WHERE id_usuario='$userID' AND id='$ordenID'");
    while ($row = mysqli_fetch_assoc($query2)) {
      array_push($arrayMargin, $row);
    }
    echo json_encode($arrayMargin);

  } else {
    echo 0;
  }



 ?>
