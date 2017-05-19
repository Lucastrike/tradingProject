<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $idUsuario = $_POST["idUsuario"];

  $rowQuery = "DELETE FROM usuarios WHERE id='$idUsuario'";

  if ($query = mysqli_query($connection, $rowQuery)) {
    echo 1;
  } else {
    echo 2;
  }

 ?>
