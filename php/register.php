<?php

  //error_reporting(E_ALL);
  //ini_set("display_errors", "1");

  include ("connection.php");

  $nombre = $_POST["nombre"];
  $apellido = $_POST["apellido"];
  $email = $_POST["email"];
  $usuario = $_POST["usuario"];
  $password = $_POST["password"];
  $capIni = $_POST["capIni"];
  $apalancamiento = $_POST["apalancamiento"];
  $md5password = md5($password);

  $query = mysqli_query($connection,"SELECT email FROM usuarios WHERE email='$email';");

  if (mysqli_num_rows($query) == 0) {
  mysqli_query($connection, "INSERT INTO usuarios (`usuario`, `nombre`, `apellido`, `email`, `password`, `cap_inicial`, `balance`, `apalancamiento`) VALUES ('$usuario','$nombre','$apellido','$email','$md5password','$capIni','$capIni','$apalancamiento');");
  echo " Bienvenido"." ".$nombre." ".$apellido;
  //mkdir("clientes/$username", 0755);
  } else {
  echo " Usuario ya existente";
  }

 ?>
