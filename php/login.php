<?php
  // error_reporting(E_ALL);
  // ini_set("display_errors", "1");

  include ("connection.php");
  session_start();

  $email = $_POST["emailin"];
  $password = $_POST["passwordin"];
  $md5password = md5($password);

  $rowQuery = "SELECT * FROM usuarios WHERE email='$email' AND password='$md5password'";

  $query = mysqli_query($connection, $rowQuery);
  if ($fila = mysqli_fetch_array($query)) {
    $_SESSION['loggedin']=true;
    $_SESSION['userID']=$fila[0];
    $_SESSION['usuario']=$fila[1];
    // $_SESSION['nombre']=$fila[2];
    // $_SESSION['apellido']=$fila[3];
    // echo " (^_^) Bienvenido/a ".$fila[1]." (^_^)";
    //header('location: Admin/index.php');
    echo 1;
  } else {
    echo 0;
  }
 ?>
