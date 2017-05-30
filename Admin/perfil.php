
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
    textarea {
      resize: none;
    }

    .error {
        color: rgb(255, 50, 50);
    }
  </style>
</head>

<body class="hold-transition skin-blue sidebar-mini fixed">
    <div class="wrapper">

        <?php include "menu.php"; ?>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

          <!-- Content Header (Page header) -->
          <section class="content-header">
            <h1>
              Perfil
            </h1>
          </section>

          <!-- Main content -->
          <section class="content">

            <div class="row">

              <!-- Ajax setup -->
              <div class="modal fade 500" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content text-center" style="border-radius: 5px;padding: 20px;">
                    <h3><i class="fa fa-warning text-red"></i> Oops! Algo ha ido mal.</h3>
                    <p>
                      Hubo un problema con el servidor, estamos trabajando en ello.
                      <br>
                      Mientras tanto, puedes seguir subiendo copas en <span style="color: #049ddc;">ClashRoyal</span>!
                    </p>
                    <img src="dist/img/crown.png" alt="crown" style="width: 100px;" />
                  </div>
                </div>
              </div>
              <div class="modal fade 400" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content text-center" style="border-radius: 5px;padding: 20px;">
                    <h3><i class="fa fa-warning text-red"></i> Oops! Algo ha ido mal.</h3>
                    <p>
                      Parece que has vuelto a la edad de piedra.
                      <br>
                      Mientras tanto, puedes ir a buscar palos para encender un fuego!
                    </p>
                    <img src="dist/img/wood.png" alt="wood" style="width: 100px;" />
                  </div>
                </div>
              </div>
              
              <div class="col-md-3">

                <!-- Profile Image -->
                <div class="box box-primary">
                  <div class="box-body box-profile">

                    <img class="profile-user-img img-responsive img-circle" src="dist/img/avatar.png" role="button" alt="User profile picture"></img>

                    <h3 class="profile-username text-center"><?php echo $_SESSION['usuario']; ?></h3>

                    <!-- <p class="text-muted text-center">Desarrollador web</p> -->

                    <button type="button" id="resetear" class="btn btn-warning btn-block" data-toggle="modal" data-target=".resetear"><b>Resetear cuenta</b></button>
                    <form action="php/deleteSelfUser.php">
                      <button type="submit" id="borrar" class="btn btn-danger btn-sm btn-block" style="margin-top: 5px;"><b>borrar cuenta</b></button>
                    </form>
                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->

                <div class="modal fade resetear" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                  <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content text-center" style="border-radius: 5px;padding: 20px;">
                      <h2 style="color: #3c8dbc;">Capital inicial</h2>
                      <form id="formCapIni">
                        <input class="form-control" id='capital_inicial' type="text" name="capital">
                      </form>
                    </div>
                  </div>
                </div>

                <!-- Modal -->
                <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content" style="border-radius: 1%;">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Nueva imagen</h4>
                      </div>
                      <form action="" method="post" enctype="multipart/form-data">
                        <div class="modal-body">
                          <img class="profile-user-img img-responsive img-circle" style="width: 200px;" src="dist/img/avatar.png" alt="User profile picture"></img>
                          <h3 class="profile-username text-center"><?php echo $_SESSION['usuario']; ?></h3>
                            <input type="file" name="picture" id="file" style="margin-left: 120px;"><br />
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <!-- About Me Box -->
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <h3 class="box-title">Sobre mí</h3>
                  </div>
                  <!-- /.box-header -->
                  <div class="box-body">
                    <strong><i class="fa fa-book margin-r-5"></i> Educación</strong>

                    <p class="text-muted" id="educacion"></p>

                    <textarea class="hidden" id="educacionText" name="educacion" rows="3" style="width: 100%;" maxlength="140"></textarea>

                    <hr>

                    <strong><i class="fa fa-map-marker margin-r-5"></i> Localización</strong>

                    <p class="text-muted" id="localizacion"></p>
                    <textarea class="hidden" id="localizacionText" name="educacion" rows="3" style="width: 100%;" maxlength="40"></textarea>

                    <hr>

                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->
              </div>
              <!-- /.col -->
              <div class="col-md-9">
                <div class="nav-tabs-custom">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#actividad" data-toggle="tab">Actividad</a></li>
                    <li><a href="#estadisticas" data-toggle="tab">Estadísticas</a></li>
                    <!-- <li><a href="#settings" data-toggle="tab">Settings</a></li> -->
                  </ul>
                  <div class="tab-content">
                    <div class="active tab-pane" id="actividad">

                      <table class="table table-hover" id="tableOperaciones">
                      <thead>
                        <th>id</th>
                        <th>operacion</th>
                        <th>volumen</th>
                        <th>fecha</th>
                        <th>símbolo</th>
                        <th>precio</th>
                        <th>stopLoss</th>
                        <th>takeProfit</th>
                        <th>comentario</th>
                      </thead>
                    </table>

                    <button class="btn btn-default" id="print"><i class="fa fa-print"></i> Print</button>

                  </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="estadisticas">

                      <div class="box box-info">
                        <div class="box-header with-border">
                          <h3 class="box-title">Balance</h3>
                          <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                          </div>
                        </div>
                        <div class="box-body">
                          <div class="chart">
                            <canvas id="lineChart" height="250" width="511"></canvas>
                          </div>
                        </div>
                      </div>

                      <div class="box box-info">
                        <div class="box-header with-border">
                          <h3 class="box-title">Exposición</h3>
                          <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                          </div>
                        </div>
                        <div class="box-body">
                          <div class="chart">
                            <canvas id="donutChart" height="250" width="511"></canvas>
                          </div>
                        </div>
                      </div>

                    </div>
                    <!-- /.tab-pane -->

                    <!-- <div class="tab-pane" id="settings">
                      <form class="form-horizontal">
                        <div class="form-group">
                          <label for="inputName" class="col-sm-2 control-label">Name</label>

                          <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputName" placeholder="Name">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                          <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputName" class="col-sm-2 control-label">Name</label>

                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputName" placeholder="Name">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                          <div class="col-sm-10">
                            <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputSkills" class="col-sm-2 control-label">Skills</label>

                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                              <label>
                                <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-danger">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div> -->
                    <!-- /.tab-pane -->
                  </div>
                  <!-- /.tab-content -->
                </div>
                <!-- /.nav-tabs-custom -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

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

    <!-- Chart js -->
    <!-- <script src="plugins/chartjs/Chart.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

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

    <script type="text/javascript" src="js/jquery.validate.min.js"></script>

    <script type="text/javascript" src="js/perfil.js"></script>

</body>

</html>
