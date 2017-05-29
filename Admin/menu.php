<header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>F</b>RX</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Forex</b>Trading</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>

        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <!-- User Account: style can be found in dropdown.less -->
                <style media="screen">
                  .navbar-nav > .user-menu .user-image {
                    float: none;
                    margin-right: 0;
                    margin-left: 10px;
                  }
                </style>
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <span class="hidden-xs"><?php echo $_SESSION['usuario']; ?></span>
                        <img src="dist/img/avatar.png" class="user-image" alt="User Image">
                    </a>
                    <ul class="dropdown-menu">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="dist/img/avatar.png" class="img-circle" alt="User Image">

                            <p>
                                <?php echo $_SESSION['usuario']; ?>
                                <small>Member since Mar. 2017</small>
                            </p>
                        </li>
                        <!-- Menu Body -->
                        <!-- <li class="user-body" style="border-bottom: 0px; border-top: 0px;">
                              <h6 style="margin-top: 0px";>Progreso<small class="pull-right">20%</small></h6>
                              <div class="progress xs" style="margin-bottom: 0px";>
                                  <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                        </li> -->
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                                <a href="perfil.php" class="btn btn-default btn-flat">Mi perfil</a>
                            </div>
                            <div class="pull-right">
                                <a href="php/close_session.php" class="btn btn-default btn-flat">Cerrar sesión</a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><?php setlocale(LC_ALL, 'es_ES.UTF-8');
								echo strftime("%A %e %B %Y");?></a></li>
            </ul>
        </div>
    </nav>
</header>
<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <a href="perfil.php">
              <div class="pull-left image">
                  <img src="dist/img/avatar.png" class="img-circle" alt="User Image" style="width: 40px;margin-top: 5px;">
              </div>
              <div class="info" style="display: inline-block;margin-left: 20px;margin-top: 15px;">
                  <p><?php echo $_SESSION['usuario']; ?></p>
                  <!-- <a href="#"><i class="fa fa-trophy text-yellow"></i> Gold</a> -->
              </div>
            </a>
        </div>

        <!-- sidebar menu: : style can be found in sidebar.less -->
        <style media="screen">
          .sidebar-menu .treeview-menu>li {
            margin: 0;
            color: #fff;
            padding: 1px 5px 1px 9px;
            color: #76aee8;
          }
          .active i {
            width: 20px;
          }
          li.activo:hover {
            color: #fff;
          }
          hr {
            margin-top: 5px;
            margin-bottom: 5px;
            margin-right: 30px;
            border: 0;
            border-top: 1px solid #636262;
          }
        </style>
        <ul class="sidebar-menu">
            <li class="header">PANEL DE NAVEGACIÓN</li>

            <li class="treeview">
                <a href="index.php">
                    <i class="fa fa-tv"></i> <span>Operar</span>
                </a>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-line-chart"></i> <span>Forex</span>
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                  <li>
                      <a href="#"><i class="fa fa-circle-o text-aqua"></i> Major Pairs
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu">
                          <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURUSD</li>
                          <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPUSD</li>
                          <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDCHF</li>
                          <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDJPY</li>
                      </ul>
                  </li>
                    <li>
                        <a href="#"><i class="fa fa-circle-o text-yellow"></i> Minor Pairs
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu">
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>AUDCAD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>AUDCHF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>AUDJPY</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>AUDNZD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>AUDUSD</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>CADCHF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>CADJPY</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>CHFJPY</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURAUD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURCAD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURCHF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURGBP</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURJPY</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURNZD</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPAUD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPCAD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPCHF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPJPY</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPNZD</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>NZDCAD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>NZDCHF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>NZDJPY</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>NZDUSD</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDCAD</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-circle-o text-red"></i> Exotic Pairs
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu">
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>AUDSGD</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURCZK</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURHUF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURNOK</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURPLN</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURSEK</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>EURZAR</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button" style="display: none;"><i class="fa fa-circle-o"></i>GBPHKD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPPLN</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPSGD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>GBPZAR</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>HKDJPY</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>NZDSGD</li>
                            <hr class="divider"></hr>
                            <li class="activo" role="button" style="display: none;"><i class="fa fa-circle-o"></i>USDCNH</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDCZK</li>
                            <li class="activo" role="button" style="display: none;"><i class="fa fa-circle-o"></i>USDHKD</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDHUF</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDNOK</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDPLN</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDSEK</li>
                            <li class="activo" role="button"><i class="fa fa-circle-o"></i>USDSGD</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="treeview">
                <a href="calendario-economico.php">
                    <i class="fa fa-calendar"></i> <span>Calendario Económico</span>
                </a>
            </li>
            <li class="header">APRENDE</li>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-graduation-cap"></i> <span>Documentación</span>
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                  <li>
                      <a href="documentacion.php"><i class="fa fa-book"></i> Más allá de las velas</a>
                      <!-- <ul class="treeview-menu">
                          <li role="button"><i class="fa fa-circle-o"></i>blablabla</li>
                      </ul> -->
                  </li>
                </ul>
            </li>
            <li class="header">DESARROLLA</li>
            <li class="treeview">
                <a href="trading-algoritmico.php">
                    <i class="fa fa-institution"></i> <span>Trading algorítmico</span>
                </a>
            </li>
            <?php if ($_SESSION['userID'] == 4) {
              echo '
              <li class="header">Hola admin!</li>
              <li class="treeview">
                  <a href="admin.php">
                      <i class="fa fa-heartbeat"></i> <span>Administrador</span>
                  </a>
              </li>';
            }
            ?>

        </ul>
    </section>
    <!-- /.sidebar -->
</aside>
