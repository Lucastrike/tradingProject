<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  //$userID = $_SESSION['userID'];
  $arrayOperaciones=array();

  $rowQuery = "SELECT o.id, t.operacion, o.volumen, o.date, o.simbolo, o.precio, o.stopLoss, o.takeProfit, o.comentario, u.balance, u.apalancamiento, o.margin
  FROM operacion o
  LEFT JOIN tipo_operacion t
  ON o.id_tipo_operacion = t.id
  LEFT JOIN estado e
  ON o.id_estado = e.id
  LEFT JOIN usuarios u
  ON o.id_usuario = u.id
  WHERE id_usuario = '4'
  AND e.estado ='abierto'
  ORDER BY o.id";

  $query = mysqli_query($connection, $rowQuery);
  while ($row = mysqli_fetch_assoc($query)) {
    array_push($arrayOperaciones, $row);
  }
  echo json_encode($arrayOperaciones);
 ?>
