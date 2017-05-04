
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
    <!-- bootstrap slider -->
    <link rel="stylesheet" href="plugins/bootstrap-slider/slider.css">
    <!-- Latest compiled and minified CSS -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css"> -->

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
      background-color: #cfe2f3;
    }
    .divider-operaciones {
      height: 2px;
      background-color: rgb(27, 124, 204);
    }
    .register-label {
      margin: 0;
    }
    #lotes {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .slider-selection {
    	background: #BABABA;
    }
    .btn-comprar {
      margin-top: 25px;
      box-shadow: 3px 3px 6px 0px #00a65a;
    }
    .btn-vender {
      margin-top: 25px;
      box-shadow: 3px 3px 6px 0px #dd4b39;
    }
    .volumen {
      padding: 15px;
    }
    .controlOp, .comment {
      margin-bottom: 10px;
    }
    .spread {
      width: 20%;
      height: 34px;
      padding-top: 1%;
    }
    .terminal {
      padding-left: 5px;
      padding-right: 5px;
    }
    .box {
      border-top: 0px;
    }
    textarea {
      resize: none;
    }

  </style>
</head>

<body class="hold-transition skin-blue sidebar-mini fixed">

  <div class="wrapper">

    <?php include "menu.php"; ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

      <!-- Main content -->
      <section class="content">
        <!-- Small boxes (Stat box) -->

        <!-- Main row -->
        <div class="row">
          <div class="col-xs-12 header-index">
            <!-- <iframe frameborder="0" scrolling="no" height="62" width="100%" allowtransparency="true" marginwidth="0" marginheight="0" src="https://ssltools.forexprostools.com/quotes_bar.php?force_lang=1&tab_1=1,2,3,4,6&tab_2=&tab_3=&curr-name-color=%230059B0&inner-text-color=%23666666&green-text-color=%23008000&red-text-color=%23FF0000"></iframe> -->
            <!-- TradingView Widget BEGIN -->

            <div style="margin-top: -45px; width: 100%; height: 130px; position: relative;">
              <iframe scrolling="no" allowtransparency="true" frameborder="0" width="100%" height="153" src="https://s.tradingview.com/tickerswidgetembed/?locale=es#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22Euro%20vs%20US%20dollar%22%2C%22proName%22%3A%22OANDA%3AEURUSD%22%7D%2C%7B%22description%22%3A%22GB%20pound%20vs%20US%20dollar%22%2C%22proName%22%3A%22OANDA%3AGBPUSD%22%7D%2C%7B%22description%22%3A%22US%20dollar%20vs%20Swiss%20franc%22%2C%22proName%22%3A%22OANDA%3AUSDCHF%22%7D%2C%7B%22description%22%3A%22US%20dollar%20vs%20Japanese%20yen%22%2C%22proName%22%3A%22OANDA%3AUSDJPY%22%7D%2C%7B%22description%22%3A%22Gold%20vs%20US%20dollar%22%2C%22proName%22%3A%22OANDA%3AXAUUSD%22%7D%2C%7B%22description%22%3A%22Brent%20crude%20oil%20vs%20US%20dollar%22%2C%22proName%22%3A%22OANDA%3ABCOUSD%22%7D%5D%2C%22timeframe%22%3A%221d%22%2C%22utm_source%22%3A%22lucassalinas.com.es%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%7D">
              </iframe>
            </div>
            <!-- TradingView Widget END -->
          </div>

          <div class="col-xs-12 col-md-8 chartView well" id="chartView"></div>

          <div class="col-xs-12 col-md-4 well trade-box">
            <h2 class="form-signin-heading text-center register-label">Panel de operaciones</h2>
            <hr class="divider-operaciones center-block"><br>
            <form id="form-signup">
                <input type="text" id="inputNombre" name="nombre" class="form-control" placeholder="activo" value="EURUSD" readonly>

                <div class="text-center volumen">
                  <p>Volumen: <span id="spanLotes"></span></p>
                  <input id="lotes" type="text" data-slider-min="0" data-slider-max="1" data-slider-step="0.01" data-slider-value="0" style="display: none;" data-value="0" value="0">
                </div>

                <input type="text" id="inputStopLoss" name="stopLoss" class="form-control col-xs-6 controlOp" placeholder="Stop Loss" style="width: 47%;">
                <input type="text" id="inputTakeProfit" name="takeProfit" class="form-control col-xs-6 pull-right controlOp" placeholder="Take Profit" style="width: 47%;">

                <textarea class="form-control comment" rows="2" id="inputcomment" name="comment" placeholder="Comentario"></textarea>

                <p class="col-xs-5 text-center" style="width: 40%; color: #00a65a;">ASK</p>
                <p class="col-xs-5 text-center pull-right" style="width: 40%; color: #dd4b39;">BID</p>

                <input type="text" id="inputPriceAsk" name="priceAsk" class="form-control col-xs-5" placeholder="Ask" style="width: 40%;" readonly>
                <span class="spread col-xs-2 text-center"></span>
                <input type="text" id="inputPriceBid" name="priceBid" class="form-control col-xs-5 pull-right" placeholder="Bid" style="width: 40%;" readonly>
</form>
                <button class="btn btn-lg btn-success btn-comprar" type="submit" style="width: 48%;">Comprar</button>
                <button class="btn btn-lg btn-danger btn-vender pull-right" type="submit" style="width: 48%;">Vender</button>

          </div>

          <div class="col-xs-12 terminal">

            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Operaciones abiertas</h3>

              </div>
              <!-- /.box-header -->
              <div class="box-body table-responsive no-padding">
                <table class="table table-hover">
                  <tr id="terminal-head">
                    <th>Orden</th>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Volumen</th>
                    <th>Símbolo</th>
                    <th>Precio</th>
                    <th>S/L</th>
                    <th>T/P</th>
                    <th>Profit</th>
                    <th>Comentario</th>
                  </tr>
                  <tr id="terminal-footer">
                    <th>Balance:</th>
                    <th>Patrimonio:</th>
                    <th>Margen:</th>
                    <th>Margen libre:</th>
                    <th>Nivel de margen:</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th>138.27</th>
                    <td></td>
                  </tr>
                </table>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->

          </div>

        </div>
        <!-- /.row (main row) -->

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
    <script type="text/javascript" src="js/operar.js"></script>

</body>

</html>
