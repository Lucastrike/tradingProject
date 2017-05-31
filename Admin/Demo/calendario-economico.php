
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
          /*body {
            font-family: 'Noto Sans', sans-serif;
          }*/
          iframe {
            padding-bottom: 0px;
          }
          .contenido {
            height: 520px;
            margin-top: 20px;
          }
          .instrucciones p {
            padding: 5px;
            text-align: center;
            font-weight: 300;
            color: black;
          }
          .instrucciones div p span {
            padding-right: 10px;
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

                  <div class="col-xs-12 instrucciones">
                    <p>
                      A la hora de leer el calendario económico tenga en consideración las siguientes tres pautas:
  Las malas noticias tendrán más influencia que las buenas noticias, este es uno de los aspectos avanzados del comportamiento financiero moderno. Más que los números, lo importante es el consenso que tengan los economistas / analistas.
                    </p>
                    <p>
                      De hecho, la teoría de la eficiencia del mercado afirma que lo que está por anunciarse se ha descontado ya del precio de la acción. Es lo que no se espera, por ejemplo, una diferencia significativa entre la previsión y la cifra prevista (una brecha que no fue prevista de antemano por los analistas), lo que tendrá un fuerte impacto en el mercado. Del mismo modo, la diferencia entre el valor reportado y el valor anterior guiará a los inversores. En todos los casos, los inversores analizan el gap, y no el valor en sí mismo.
                    </p>
                    <p>
                      Los anuncios de noticias se clasifican de acuerdo a la volatilidad que puedan causar. Antes de la publicación de las mismas, hay una fase de estancamiento (baja volatilidad) para dar lugar a una fase de mayor o menor volatilidad durante el anuncio, de acuerdo con la discrepancia con el mercado. Algunos anuncios presentan mayor influencia que otros y el precio de los instrumentos involucrados se verá afectado con una mayor volatilidad: se clasifican con tres tipos de símbolos a la derecha de la bandera.
                    </p>
                    <div class="col-xs-3 col-xs-offset-4">
                      <p style="text-align: left;">
                        <img src="dist/img/yellow.png" alt="" />
                        <span data-toggle="tooltip" data-placement="right" title="En este entorno no se suele generar volatilidad.">Noticia de bajo impacto.</span>
                        <br>
                        <img src="dist/img/orange.png" alt="" />
                        <span data-toggle="tooltip" data-placement="right" title="En este entorno la volatilidad generada no es significativa. Mantener la precaución.">Noticia de medio impacto.</span>
                        <br>
                        <img src="dist/img/red.png" alt="" />
                        <span data-toggle="tooltip" data-placement="right" title="En este entorno se aconseja a los inversores principiantes que salgan del mercado. La volatilidad generada es alta e impredecible.">Noticia de alto impacto.</span>
                      </p>
                    </div>
                  </div>

                  <div class="col-xs-12 col-md-6 contenido">
                    <!-- TradingView Widget BEGIN -->
                    <iframe scrolling="no" allowtransparency="true" frameborder="0" width="100%" height="100%" src="https://s.tradingview.com/eventswidgetembed/#importanceFilter=-1%2C0%2C1&amp;currencyFilter=EUR%2CUSD%2CJPY%2CGBP%2CCHF%2CAUD%2CCAD%2CNZD%2CCNY&amp;utm_source=lucassalinas.com.es&amp;utm_medium=widget&amp;utm_campaign=events"></iframe>
                    <!-- TradingView Widget END -->
                  </div>
                  <div class="col-xs-12 col-md-6 contenido">
                    <iframe src="https://www.tradingview.com/chatwidgetembed/?utm_source=es.tradingview.com&amp;utm_medium=widget&amp;utm_campaign=chat-embed&amp;locale=es#forex" width="100%" height="100%" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
                  </div>

                </div>
                <!-- /.row (main row) -->

              </section>
              <!-- /.content -->

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

        <script type="text/javascript" src="js/gotooperar.js"></script>

    </body>

    </html>
