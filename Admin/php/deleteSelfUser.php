<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION["userID"];

  $rowQuery = "DELETE FROM operacion WHERE id_usuario='$userID'";

  if ($query = mysqli_query($connection, $rowQuery)) {
    $rowQuery2 = "DELETE FROM usuarios WHERE id='$userID'";
    if ($query2 = mysqli_query($connection, $rowQuery2)) {
      session_destroy();
      session_unset();
      header('location: ../../index.html');
    }
  }

 ?>
