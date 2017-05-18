<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $id = $_POST["id"];
  $usuario = $_POST["usuario"];
  $nombre = $_POST["nombre"];
  $apellido = $_POST["apellido"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  $cap_inicial = $_POST["cap_inicial"];
  $balance = $_POST["balance"];
  $apalancamiento = $_POST["apalancamiento"];

  if ($id != null) {
    $rowQuery = "UPDATE `usuarios` SET `usuario`='$usuario',`nombre`='$nombre',`apellido`='$apellido',`email`='$email',`password`='$password',`cap_inicial`='$cap_inicial',`balance`='$balance',`apalancamiento`='$apalancamiento' WHERE id='$id'";

    if ($query = mysqli_query($connection, $rowQuery)) {
      echo 1;
    } else {
      echo 0;
    }
  } else {
    $rowQuery2 = "INSERT INTO `operacion`(id_usuario`, `id_tipo_operacion`, `volumen`, `simbolo`, `precio`, `stopLoss`, `takeProfit`, `comentario`, `margin`, `enEuros`, `id_estado`) VALUES ([value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])";

    if ($query2 = mysqli_query($connection, $rowQuery2)) {
      echo 1;
    } else {
      echo 0;
    }
  }

 ?>
