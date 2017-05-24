<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $arrayTipoOperacion = array();

  $rowQuery = "SELECT * FROM tipo_operacion";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayTipoOperacion, $row);
  }
  echo json_encode($arrayTipoOperacion);
 ?>
