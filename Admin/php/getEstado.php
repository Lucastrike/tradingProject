<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $arrayEstado = array();

  $rowQuery = "SELECT * FROM estado";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayEstado, $row);
  }
  echo json_encode($arrayEstado);
 ?>
