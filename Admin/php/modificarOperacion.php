<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $idOp = $_POST["idOp"];
  $idUsuarioOp = $_POST["idUsuarioOp"];
  $idTipoOperacion = $_POST["idTipoOperacion"];
  $volumen = $_POST["volumen"];
  $simbolo = $_POST["simbolo"];
  $precio = $_POST["precio"];
  $stopLoss = $_POST["stopLoss"];
  $takeProfit = $_POST["takeProfit"];
  $comentario = $_POST["comentario"];
  $margen = $_POST["margen"];
  $enEuros = $_POST["enEuros"];
  $idEstado = $_POST["idEstado"];
  $profitLoss = $_POST["profitLoss"];

  if ($idOp != null) {
    $rowQuery = "UPDATE `operacion` SET `id_usuario`='$idUsuarioOp',`id_tipo_operacion`='$idTipoOperacion',`volumen`='$volumen',`simbolo`='$simbolo',`precio`='$precio',`stopLoss`='$stopLoss',`takeProfit`='$takeProfit',`comentario`='$comentario',`margin`='$margen',
    `enEuros`='$enEuros',`id_estado`='$idEstado', `profitLoss`='$profitLoss' WHERE id='$idOp'";

    if ($query = mysqli_query($connection, $rowQuery)) {
      echo 1;
    } else {
      echo 0;
    }
  } else {
    $rowQuery2 = "INSERT INTO `operacion`(`id_usuario`, `id_tipo_operacion`, `volumen`, `simbolo`, `precio`, `stopLoss`, `takeProfit`, `comentario`, `margin`, `enEuros`, `id_estado`, `profitloss`)
    VALUES ('$idUsuarioOp','$idTipoOperacion','$volumen','$simbolo','$precio','$stopLoss','$takeProfit','$comentario','$margen','$enEuros','$idEstado', '$profitLoss')";

    if ($query2 = mysqli_query($connection, $rowQuery2)) {
      echo 2;
    } else {
      echo 3;
    }
  }

 ?>
