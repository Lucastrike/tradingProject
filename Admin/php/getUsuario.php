<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $idUsuario = $_POST["idUsuario"];
  $arrayUsuario=array();

  $rowQuery = "SELECT * FROM usuarios WHERE id='$idUsuario'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayUsuario, $row);
  }
  echo json_encode($arrayUsuario);
 ?>
