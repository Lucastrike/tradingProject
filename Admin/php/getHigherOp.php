<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION['userID'];

  $arrayHigher = array();

  $rowQuery = "SELECT id, margin, MIN(profitLoss) AS higherLoss FROM operacion WHERE id_usuario='$userID'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayHigher, $row);
  }
  echo json_encode($arrayHigher);
 ?>
