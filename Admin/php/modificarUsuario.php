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
  $admin = $_POST["admin"];
  $educacion = $_POST["educacion"];
  $localizacion = $_POST["localizacion"];

  if ($id != null) {
    $rowQuery = "UPDATE `usuarios` SET `usuario`='$usuario',`nombre`='$nombre',`apellido`='$apellido',`email`='$email',`password`='$password',`cap_inicial`='$cap_inicial',`balance`='$balance',`apalancamiento`='$apalancamiento', `admin`='$admin',
    `educacion`='$educacion', `local`='$localizacion' WHERE id='$id'";

    if ($query = mysqli_query($connection, $rowQuery)) {
      echo 1;
    } else {
      echo 0;
    }
  } else {
    $rowQuery2 = "INSERT INTO `usuarios`(`usuario`, `nombre`, `apellido`, `email`, `password`, `cap_inicial`, `balance`, `apalancamiento`) VALUES ('$usuario','$nombre','$apellido','$email','$password','$cap_inicial','$balance','$apalancamiento')";

    if ($query2 = mysqli_query($connection, $rowQuery2)) {
      echo 3;
    } else {
      echo 4;
    }
  }

 ?>
