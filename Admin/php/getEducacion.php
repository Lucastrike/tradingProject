<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION['userID'];

  $arrayEdu = array();

  $rowQuery = "SELECT educacion FROM usuarios WHERE id='$userID'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayEdu, $row);
  }
  echo json_encode($arrayEdu);
 ?>
