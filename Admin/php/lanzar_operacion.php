<?php

  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  if ($_POST["operacion"] == "Comprar") {
    comprar();
  } else {
    vender();
  }

  function comprar(){

    include ("connection.php");
    session_start();

    $userID = $_SESSION['userID'];

    $activo = $_POST["activo"];
    $volume = $_POST["volume"];
    $closeAsk = $_POST["closeAsk"];
    $closeBid = $_POST["closeBid"];
    $stopLoss = $_POST["stopLoss"];
    $takeProfit = $_POST["takeProfit"];
    $comentario = $_POST["comentario"];

    $queryCompra = "INSERT INTO `operacion`(`id_usuario`, `id_tipo_operacion`, `volumen`, `simbolo`, `precio`, `stopLoss`, `takeProfit`, `comentario`, `id_estado`) VALUES ('$userID','1','$volume','$activo','$closeAsk','$stopLoss','$takeProfit','$comentario','1');";
    if ($query = mysqli_query($connection, $queryCompra)) {
      echo "comprado";
    }

  }

  function vender(){

    include ("connection.php");
    session_start();

    $userID = $_SESSION['userID'];

    $activo = $_POST["activo"];
    $volume = $_POST["volume"];
    $closeAsk = $_POST["closeAsk"];
    $closeBid = $_POST["closeBid"];
    $stopLoss = $_POST["stopLoss"];
    $takeProfit = $_POST["takeProfit"];
    $comentario = $_POST["comentario"];

    $queryVenta = "INSERT INTO `operacion`(`id_usuario`, `id_tipo_operacion`, `volumen`, `simbolo`, `precio`, `stopLoss`, `takeProfit`, `comentario`, `id_estado`) VALUES ('$userID','2','$volume','$activo','$closeBid','$stopLoss','$takeProfit','$comentario','1');";
    if ($query = mysqli_query($connection, $queryVenta)) {
      echo "vendido";
    }

  }

 ?>
