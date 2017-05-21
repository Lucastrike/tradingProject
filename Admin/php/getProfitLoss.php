<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION['userID'];
  $arrayProfitLoss=array();

  $rowQuery = "SELECT o.profitLoss, u.cap_inicial
    FROM operacion o
    RIGHT JOIN usuarios u
    ON o.id_usuario = u.id
    WHERE u.id = '$userID'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayProfitLoss, $row);
  }
  echo json_encode($arrayProfitLoss);
 ?>
