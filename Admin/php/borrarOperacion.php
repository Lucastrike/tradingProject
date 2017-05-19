<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $idOperacion = $_POST["idOperacion"];

  $rowQuery = "DELETE FROM operacion WHERE id='$idOperacion'";

  if ($query = mysqli_query($connection, $rowQuery)) {
    echo 1;
  } else {
    echo 2;
  }

 ?>
