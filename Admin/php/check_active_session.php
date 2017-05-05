<?php
  session_start();

  if (is_null($_SESSION['usuario'])) {
    $_SESSION['loggedin']=false;
    header('location: ../index.html');
  }
?>
