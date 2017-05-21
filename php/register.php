<?php

  //error_reporting(E_ALL);
  //ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

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

    if (mysqli_query($connection, "INSERT INTO usuarios (`usuario`, `nombre`, `apellido`, `email`, `password`, `cap_inicial`, `balance`, `apalancamiento`) VALUES ('$usuario','$nombre','$apellido','$email','$md5password','$capIni','$capIni','$apalancamiento');")) {

      $rowQuery = "SELECT * FROM usuarios WHERE email='$email'";
      $query2 = mysqli_query($connection, $rowQuery);
      if ($fila = mysqli_fetch_array($query2)) {
        $_SESSION['loggedin']=true;
        $_SESSION['userID']=$fila[0];
        $_SESSION['usuario']=$fila[1];
        $_SESSION['isAdmin']=false;
        if ($fila[9] == 1) {
          $_SESSION['isAdmin']=true;
        }
        echo 1;
      } else {
        echo 0;
      }
    }

  //echo " Bienvenido"." ".$nombre." ".$apellido.", logeate para empezar a operar!";
  //mkdir("clientes/$username", 0755);
  } else {
    echo " Usuario ya existente";
  }

 ?>
