<?php

  session_start();

  if (!$_SESSION['isAdmin']) {
    header('location: ../index.html');
  }
?>
