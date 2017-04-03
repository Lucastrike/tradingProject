<?php
  //error_reporting(E_ALL);
  //ini_set("display_errors", "1");

  session_start();
  include ("connection.php");

  $email = $_POST["email"];
  $password = $_POST["password"];
  $md5password = md5($password);

  $rowQuery = "SELECT * FROM usuarios WHERE email='$email' AND password='$md5password'";

  $query = mysqli_query($connection, $rowQuery);
  if ($fila = mysqli_fetch_array($query)) {
    $_SESSION['loggedin']=true;
    $_SESSION['userID']=$fila[0];
    $_SESSION['usuario']=$fila[1];
    // $_SESSION['nombre']=$fila[2];
    // $_SESSION['apellido']=$fila[3];
    echo " (^_^) Bienvenido/a ".$fila[1]." (^_^)";
    // header('location: ../index.html');
  } else {
    echo " (=_=) No cuela, registrate! (=_=)";
  }
 ?>
