<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  //$userID = $_SESSION['userID'];
  $arrayUsuarios = array();

  $rowQuery = "SELECT * FROM usuarios";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayUsuarios, $row);
  }
  echo json_encode($arrayUsuarios);
 ?>
