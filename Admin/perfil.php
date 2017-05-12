
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
              <div class="col-md-3">

                <!-- Profile Image -->
                <div class="box box-primary">
                  <div class="box-body box-profile">
                    <img class="profile-user-img img-responsive img-circle" src="dist/img/avatar.png" alt="User profile picture">

                    <h3 class="profile-username text-center"><?php echo $_SESSION['usuario']; ?></h3>

                    <p class="text-muted text-center">Desarrollador web</p>

                    <!-- <ul class="list-group list-group-unbordered">
                      <li class="list-group-item">
                        <b>Followers</b> <a class="pull-right">1,322</a>
                      </li>
                      <li class="list-group-item">
                        <b>Following</b> <a class="pull-right">543</a>
                      </li>
                      <li class="list-group-item">
                        <b>Friends</b> <a class="pull-right">13,287</a>
                      </li>
                    </ul> -->

                    <a href="#" class="btn btn-danger btn-block"><b>Resetear cuenta</b></a>
                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->

                <!-- About Me Box -->
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <h3 class="box-title">Sobre mí</h3>
                  </div>
                  <!-- /.box-header -->
                  <div class="box-body">
                    <strong><i class="fa fa-book margin-r-5"></i> Educación</strong>

                    <p class="text-muted">
                      Desarrollador de aplicaciones web, SOLVAM.
                    </p>

                    <hr>

                    <strong><i class="fa fa-map-marker margin-r-5"></i> Localización</strong>

                    <p class="text-muted">Valencia, España</p>

                    <hr>

                    <!-- <strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>

                    <p>
                      <span class="label label-danger">UI Design</span>
                      <span class="label label-success">Coding</span>
                      <span class="label label-info">Javascript</span>
                      <span class="label label-warning">PHP</span>
                      <span class="label label-primary">Node.js</span>
                    </p>

                    <hr> -->

                    <!-- <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p> -->
                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->
              </div>
              <!-- /.col -->
              <div class="col-md-9">
                <div class="nav-tabs-custom">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#activity" data-toggle="tab">Activity</a></li>
                    <li><a href="#timeline" data-toggle="tab">Timeline</a></li>
                    <li><a href="#settings" data-toggle="tab">Settings</a></li>
                  </ul>
                  <div class="tab-content">
                    <div class="active tab-pane" id="activity">
                      <!-- Post -->
                      <!-- <div class="post">
                        <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="dist/img/user1-128x128.jpg" alt="user image">
                              <span class="username">
                                <a href="#">Jonathan Burke Jr.</a>
                                <a href="#" class="pull-right btn-box-tool"><i class="fa fa-times"></i></a>
                              </span>
                          <span class="description">Shared publicly - 7:30 PM today</span>
                        </div>
                        <p>
                          Lorem ipsum represents a long-held tradition for designers,
                          typographers and the like. Some people hate it and argue for
                          its demise, but others ignore the hate as they create awesome
                          tools to help create filler text for everyone from bacon lovers
                          to Charlie Sheen fans.
                        </p>
                        <ul class="list-inline">
                          <li><a href="#" class="link-black text-sm"><i class="fa fa-share margin-r-5"></i> Share</a></li>
                          <li><a href="#" class="link-black text-sm"><i class="fa fa-thumbs-o-up margin-r-5"></i> Like</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="link-black text-sm"><i class="fa fa-comments-o margin-r-5"></i> Comments
                              (5)</a></li>
                        </ul>

                        <input class="form-control input-sm" type="text" placeholder="Type a comment">
                      </div>

                      <div class="post clearfix">
                        <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="dist/img/user7-128x128.jpg" alt="User Image">
                              <span class="username">
                                <a href="#">Sarah Ross</a>
                                <a href="#" class="pull-right btn-box-tool"><i class="fa fa-times"></i></a>
                              </span>
                          <span class="description">Sent you a message - 3 days ago</span>
                        </div>
                        <p>
                          Lorem ipsum represents a long-held tradition for designers,
                          typographers and the like. Some people hate it and argue for
                          its demise, but others ignore the hate as they create awesome
                          tools to help create filler text for everyone from bacon lovers
                          to Charlie Sheen fans.
                        </p>

                        <form class="form-horizontal">
                          <div class="form-group margin-bottom-none">
                            <div class="col-sm-9">
                              <input class="form-control input-sm" placeholder="Response">
                            </div>
                            <div class="col-sm-3">
                              <button type="submit" class="btn btn-danger pull-right btn-block btn-sm">Send</button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div class="post">
                        <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="dist/img/user6-128x128.jpg" alt="User Image">
                              <span class="username">
                                <a href="#">Adam Jones</a>
                                <a href="#" class="pull-right btn-box-tool"><i class="fa fa-times"></i></a>
                              </span>
                          <span class="description">Posted 5 photos - 5 days ago</span>
                        </div>
                        <div class="row margin-bottom">
                          <div class="col-sm-6">
                            <img class="img-responsive" src="dist/img/photo1.png" alt="Photo">
                          </div>
                          <div class="col-sm-6">
                            <div class="row">
                              <div class="col-sm-6">
                                <img class="img-responsive" src="dist/img/photo2.png" alt="Photo">
                                <br>
                                <img class="img-responsive" src="dist/img/photo3.jpg" alt="Photo">
                              </div>
                              <div class="col-sm-6">
                                <img class="img-responsive" src="dist/img/photo4.jpg" alt="Photo">
                                <br>
                                <img class="img-responsive" src="dist/img/photo1.png" alt="Photo">
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul class="list-inline">
                          <li><a href="#" class="link-black text-sm"><i class="fa fa-share margin-r-5"></i> Share</a></li>
                          <li><a href="#" class="link-black text-sm"><i class="fa fa-thumbs-o-up margin-r-5"></i> Like</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="link-black text-sm"><i class="fa fa-comments-o margin-r-5"></i> Comments
                              (5)</a></li>
                        </ul>

                        <input class="form-control input-sm" type="text" placeholder="Type a comment">
                      </div> -->
                      <!-- /.post -->
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="timeline">
                      <!-- The timeline -->
                      <ul class="timeline timeline-inverse">
                        <!-- timeline time label -->
                        <li class="time-label">
                              <span class="bg-red">
                                10 Feb. 2014
                              </span>
                        </li>
                        <!-- /.timeline-label -->
                        <!-- timeline item -->
                        <li>
                          <i class="fa fa-envelope bg-blue"></i>

                          <div class="timeline-item">
                            <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

                            <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                            <div class="timeline-body">
                              Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                              weebly ning heekya handango imeem plugg dopplr jibjab, movity
                              jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                              quora plaxo ideeli hulu weebly balihoo...
                            </div>
                            <div class="timeline-footer">
                              <a class="btn btn-primary btn-xs">Read more</a>
                              <a class="btn btn-danger btn-xs">Delete</a>
                            </div>
                          </div>
                        </li>
                        <!-- END timeline item -->
                        <!-- timeline item -->
                        <li>
                          <i class="fa fa-user bg-aqua"></i>

                          <div class="timeline-item">
                            <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

                            <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                            </h3>
                          </div>
                        </li>
                        <!-- END timeline item -->
                        <!-- timeline item -->
                        <li>
                          <i class="fa fa-comments bg-yellow"></i>

                          <div class="timeline-item">
                            <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

                            <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                            <div class="timeline-body">
                              Take me to your leader!
                              Switzerland is small and neutral!
                              We are more like Germany, ambitious and misunderstood!
                            </div>
                            <div class="timeline-footer">
                              <a class="btn btn-warning btn-flat btn-xs">View comment</a>
                            </div>
                          </div>
                        </li>
                        <!-- END timeline item -->
                        <!-- timeline time label -->
                        <li class="time-label">
                              <span class="bg-green">
                                3 Jan. 2014
                              </span>
                        </li>
                        <!-- /.timeline-label -->
                        <!-- timeline item -->
                        <li>
                          <i class="fa fa-camera bg-purple"></i>

                          <div class="timeline-item">
                            <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

                            <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                            <div class="timeline-body">
                              <img src="http://placehold.it/150x100" alt="..." class="margin">
                              <img src="http://placehold.it/150x100" alt="..." class="margin">
                              <img src="http://placehold.it/150x100" alt="..." class="margin">
                              <img src="http://placehold.it/150x100" alt="..." class="margin">
                            </div>
                          </div>
                        </li>
                        <!-- END timeline item -->
                        <li>
                          <i class="fa fa-clock-o bg-gray"></i>
                        </li>
                      </ul>
                    </div>
                    <!-- /.tab-pane -->

                    <div class="tab-pane" id="settings">
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
                    </div>
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
