<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $idOperacion = $_POST["idOperacion"];
  $arrayOperacion=array();

  $rowQuery = "SELECT * FROM operacion WHERE id='$idOperacion'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayOperacion, $row);
  }
  echo json_encode($arrayOperacion);
 ?>
