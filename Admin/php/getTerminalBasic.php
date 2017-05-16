<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION['userID'];
  $arrayOperaciones=array();

  $rowQuery = "SELECT balance, apalancamiento FROM usuarios WHERE id='$userID'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayOperaciones, $row);
  }
  echo json_encode($arrayOperaciones);
 ?>
