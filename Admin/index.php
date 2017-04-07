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
    <!-- bootstrap slider -->
    <link rel="stylesheet" href="plugins/bootstrap-slider/slider.css">

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
    .chartView {
      height: 500px;
      padding: 0;
    }
    .header-index {
      padding-top: 6px;
    }
    .trade-box {
      height: 500px;
      padding: 20px;
    }
    .divider-operaciones {
      height: 2px;
      background-color: rgb(27, 124, 204);
    }
    .register-label {
      margin: 0;
    }
    button.btn.dropdown-toggle.bs-placeholder.btn-default, .form-control, .btn-lanzar-op, #lotes {
      margin-top: 5px;
    }
    .prueba {
      height: 100px;
    }
    #lotes {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .slider-selection {
    	background: #BABABA;
    }
    .btn-lanzar-op {
      margin-top: 25px;
      box-shadow: 3px 3px 6px 0px #2c8607;
    }
  </style>
</head>

<body class="hold-transition skin-blue sidebar-mini fixed">
    <div class="wrapper">

        <?php include "menu.php"; ?>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

          <div class="col-xs-12 header-index">
            <iframe frameborder="0" scrolling="no" height="62" width="100%" allowtransparency="true" marginwidth="0" marginheight="0" src="https://ssltools.forexprostools.com/quotes_bar.php?force_lang=1&tab_1=1,2,3,4,6&tab_2=&tab_3=&curr-name-color=%230059B0&inner-text-color=%23666666&green-text-color=%23008000&red-text-color=%23FF0000"></iframe>
          </div>

          <div class="col-xs-12 col-md-8 chartView well">
            <!-- TradingView Widget BEGIN -->
            <script type="text/javascript" src="https://d33t3vvu2t2yu5.cloudfront.net/tv.js"></script>
            <script type="text/javascript">
              new TradingView.widget({
                "autosize": true,
                "symbol": "OANDA:EURUSD",
                "interval": "1",
                "timezone": "Europe/Madrid",
                "theme": "White",
                "style": "1",
                "locale": "es",
                "toolbar_bg": "rgba(207, 226, 243, 1)",
                "enable_publishing": true,
                "hide_side_toolbar": false,
                "hideideas": true
              });
            </script>
            <!-- TradingView Widget END -->
          </div>
          <div class="col-xs-12 col-md-4 well trade-box">
            <h2 class="form-signin-heading text-center register-label">Panel de operaciones</h2>
            <hr class="divider-operaciones"><br>
            <form id="form-signup">
                <input type="text" id="inputNombre" name="nombre" class="form-control" placeholder="activo">

                <select class="form-control" id="inputApalancamiento" name="apalancamiento">
                  <option disabled selected hidden>Tipo de operación</option>
                  <option>Comprar</option>
                  <option>Vender</option>
                </select>

                <input type="text" id="inputApellido" name="apellido" class="form-control" placeholder="Precio">

                <div class="text-center">
                  <p>Lotes</p>
                  <input id="lotes" type="text" data-slider-min="0" data-slider-max="5" data-slider-step="0.1" data-slider-value="0" style="display: none;" data-value="0" value="0">
                </div>

                <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Total €">

                <textarea class="form-control" rows="3" id="inputUsuario" name="usuario" placeholder="Comentario"></textarea>

                <button class="btn btn-lg btn-success btn-block btn-lanzar-op" type="submit">Lanzar operación</button>
            </form>
          </div>

          <div class="row">
            <div class="col-xs-12 well prueba">

            </div>
          </div>

        </div>
      </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0.0
            </div>
            <strong>Copyright &copy; 2017 <a href="http://lucassalinas.com.es">Lucas Salinas</a>.</strong> Todos los derechos reservados.
        </footer>

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

    <!-- Bootstrap slider -->
    <script src="plugins/bootstrap-slider/bootstrap-slider.js"></script>
    <script type="text/javascript">
    $('#lotes').slider({
      formatter: function(value) {
        return value;
      }
      });
    </script>

</body>

</html>
