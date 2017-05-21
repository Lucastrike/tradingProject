<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $userID = $_SESSION['userID'];

  $arrayOperaciones = array();

  $rowQuery = "SELECT o.id, t.operacion, o.volumen, o.date, o.simbolo, o.precio, o.stopLoss, o.takeProfit, o.comentario
  FROM operacion o
  LEFT JOIN tipo_operacion t
  ON o.id_tipo_operacion = t.id
  WHERE o.id_usuario = '$userID'
  ORDER BY o.id";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayOperaciones, $row);
  }
  echo json_encode($arrayOperaciones);
 ?>
