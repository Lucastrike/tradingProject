<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $idUsuario = $_POST["idUsuario"];

  $rowQuery = "DELETE FROM operacion WHERE id_usuario='$idUsuario'";

  if ($query = mysqli_query($connection, $rowQuery)) {
    $rowQuery2 = "DELETE FROM usuarios WHERE id='$idUsuario'";
    if ($query2 = mysqli_query($connection, $rowQuery2)) {
    echo 1;
    }
  }

 ?>
