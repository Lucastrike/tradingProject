<?php

include ("php/connection.php");
session_start();

include ("php/check_active_session.php");

 ?>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Forex Trading</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.6 -->
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">
        <!-- Latest compiled and minified CSS -->
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css"> -->

        <!-- jQuery 2.2.3 -->
        <script src="plugins/jQuery/jquery-2.2.3.min.js"></script>

        <!-- iCheck -->
        <!-- <link rel="stylesheet" href="plugins/iCheck/flat/blue.css"> -->
        <!-- Morris chart -->
        <!-- <link rel="stylesheet" href="plugins/morris/morris.css"> -->
        <!-- jvectormap -->
        <!-- <link rel="stylesheet" href="plugins/jvectormap/jquery-jvectormap-1.2.2.css"> -->
        <!-- Date Picker -->
        <!-- <link rel="stylesheet" href="plugins/datepicker/datepicker3.css"> -->
        <!-- Daterange picker -->
        <!-- <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css"> -->
        <!-- bootstrap wysihtml5 - text editor -->
        <!-- <link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"> -->

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

        <style media="screen">
          .content-wrapper {
            background-color: #fff;
          }
          iframe {
            width: 100%;
            height: 570px;
          }
          .content {
            padding-top: 0px;
            padding-left: 0px;
            padding-bottom: 0px;
          }
        </style>
    </head>

    <body class="hold-transition skin-blue sidebar-mini fixed">

      <div class="wrapper">

        <?php include "menu.php"; ?>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper" style="min-height: 600px;">

          <!-- Main content -->
          <section class="content">
            <!-- Small boxes (Stat box) -->

            <!-- Main row -->
            <div class="row">

              <iframe src="http://www.sentimientomercado.com/manualcandlestick.pdf"></iframe>

            </div>

          </section>
          <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0.0
            </div>
            <strong>Copyright &copy; 2017 <a href="http://lucassalinas.com.es">Lucas Salinas</a>.</strong> Todos los derechos reservados.
        </footer>

      </div>
      <!-- ./wrapper -->


        <!-- jQuery 2.2.3 -->
        <script src="plugins/jQuery/jquery-2.2.3.min.js"></script>

        <!-- jQuery UI 1.11.4 -->
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
            $.widget.bridge('uibutton', $.ui.button);
        </script>

        <!-- Bootstrap 3.3.6 -->
        <script src="bootstrap/js/bootstrap.min.js"></script>

        <!-- Morris.js charts -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
        <script src="plugins/morris/morris.min.js"></script> -->

        <!-- Sparkline -->
        <!-- <script src="plugins/sparkline/jquery.sparkline.min.js"></script> -->

        <!-- jvectormap -->
        <!-- <script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script> -->

        <!-- jQuery Knob Chart -->
        <!-- <script src="plugins/knob/jquery.knob.js"></script> -->

        <!-- daterangepicker -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script> -->
        <!-- <script src="plugins/daterangepicker/daterangepicker.js"></script> -->

        <!-- datepicker -->
        <!-- <script src="plugins/datepicker/bootstrap-datepicker.js"></script> -->

        <!-- Bootstrap WYSIHTML5 -->
        <!-- <script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script> -->

        <!-- Slimscroll -->
        <script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>

        <!-- FastClick -->
        <!-- <script src="plugins/fastclick/fastclick.js"></script> -->

        <!-- AdminLTE App -->
        <script src="dist/js/app.min.js"></script>

        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <!-- <script src="dist/js/pages/dashboard.js"></script> -->

        <!-- AdminLTE for demo purposes -->
        <!-- <script src="dist/js/demo.js"></script> -->

        <!-- Latest compiled and minified JavaScript -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script> -->

        <!-- Bootstrap slider -->
        <script src="plugins/bootstrap-slider/bootstrap-slider.js"></script>

        <!-- TradingView Widget BEGIN -->
        <script type="text/javascript" src="https://d33t3vvu2t2yu5.cloudfront.net/tv.js"></script>
        <script type="text/javascript" src="js/gotooperar.js"></script>

    </body>

    </html>
