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

    $activo = $_POST["activo2"];
    $volume = $_POST["volume"];
    $closeAsk = $_POST["closeAsk"];
    $stopLoss = $_POST["stopLoss"];
    $takeProfit = $_POST["takeProfit"];
    $comentario = $_POST["comentario"];
    $totalAsk = $_POST["totalAsk"];
    $inEurosAskFixed = $_POST["inEurosAskFixed"];

    $queryCompra = "INSERT INTO `operacion`(`id_usuario`, `id_tipo_operacion`, `volumen`, `simbolo`, `precio`, `stopLoss`, `takeProfit`, `comentario`, `margin`, `enEuros`, `id_estado`)
    VALUES ('$userID','1','$volume','$activo','$closeAsk','$stopLoss','$takeProfit','$comentario','$totalAsk','$inEurosAskFixed','1');";
    if ($query = mysqli_query($connection, $queryCompra)) {
      echo "comprado";
    }

  }

  function vender(){

    include ("connection.php");
    session_start();

    $userID = $_SESSION['userID'];

    $activo = $_POST["activo2"];
    $volume = $_POST["volume"];
    $closeBid = $_POST["closeBid"];
    $stopLoss = $_POST["stopLoss"];
    $takeProfit = $_POST["takeProfit"];
    $comentario = $_POST["comentario"];
    $totalBid = $_POST["totalBid"];
    $inEurosBidFixed = $_POST["inEurosBidFixed"];

    $queryVenta = "INSERT INTO `operacion`(`id_usuario`, `id_tipo_operacion`, `volumen`, `simbolo`, `precio`, `stopLoss`, `takeProfit`, `comentario`, `margin`, `enEuros`, `id_estado`)
    VALUES ('$userID','2','$volume','$activo','$closeBid','$stopLoss','$takeProfit','$comentario','$totalBid','$inEurosBidFixed','1');";
    if ($query = mysqli_query($connection, $queryVenta)) {
      echo "vendido";
    }

  }

 ?>
