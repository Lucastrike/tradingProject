<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION['userID'];

  $arraydivisas = array();

  //$rowQuery = "SELECT SUBSTRING(simbolo, 5, 7) AS divisa FROM operacion WHERE id_usuario='$userID';";
  $rowQuery = "SELECT t.operacion
                FROM operacion o
                LEFT JOIN tipo_operacion t
                ON o.id_tipo_operacion = t.id
                WHERE o.id_usuario = '$userID'";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arraydivisas, $row);
  }
  echo json_encode($arraydivisas);
 ?>
