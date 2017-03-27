
<!DOCTYPE html>
<html >
    <head>
        <meta charset="UTF-8">
        <title>Zapashion</title>
        <link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <link rel="stylesheet" href="css/style.css">

    </head>

    <body>
      
        <div class="form">

            <ul class="tab-group">
                <li class="tab active">
                    <a href="#signup">Sign Up</a>
                </li>
                <li class="tab">
                    <a href="#login">Log In</a>
                </li>
            </ul>

            <div class="tab-content">
                <div id="signup">

                    <form action="insert.php" method="post" id="formSingUp">
                        <div class="top-row">
                            <div class="field-wrap">
                                <label>
                                    First Name<span class="req">*</span>
                                </label>
                                <input type="text" autocomplete="off" name="firstName"/>
                            </div>
                            <div class="field-wrap">
                                <label>
                                    Last Name<span class="req">*</span>
                                </label>
                                <input type="text" autocomplete="off" name="lastName"/>
                            </div>
                        </div>
                        <div class="field-wrap">
                            <label>
                                Email Address<span class="req">*</span>
                            </label>
                            <input type="email" autocomplete="off" name="email"/>
                        </div>
                        <div class="field-wrap">
                            <label>
                                Set A Password<span class="req">*</span>
                            </label>
                            <input type="password" autocomplete="off" name="password" id="pass"/>
                        </div>
                        <div class="field-wrap">
                            <label>
                                Confirm Password<span class="req">*</span>
                            </label>
                            <input type="password" autocomplete="off" name="rePassword"/>
                        </div>

                        <button class="button button-block"/>Get Started</button>
                </form>
            </div>

            <div id="login">
                <h1>Welcome Back!</h1>
                <form action="checkLogin.php" method="post" id="formSingIn">
                    <div class="field-wrap">
                        <label>
                            Email Address<span class="req">*</span>
                        </label>
                        <input type="email" autocomplete="off" name="email"/>
                    </div>
                    <div class="field-wrap">
                        <label>
                            Password<span class="req">*</span>
                        </label>
                        <input type="password" autocomplete="off" name="password"/>
                    </div>
                    <p class="forgot">
                        <a href="recover" data-toggle="modal" data-target="#myModal">Forgot Password?</a>
                    </p>
                    <button type="submit" class="button button-block"/>Log In</button>
            </form>

        </div>
    </div>
    <!-- tab-content -->
</div>
<!-- /form -->

<!-- Modal -->
<form action="gestionRecover.php" method="post">

  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Reestablecer contraseña</h4>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" id="user" name="user" placeholder="Introduce tu email">
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>

</form>

<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script src="js/index.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>

<script type="text/javascript">
    $(document).ready(function() {
        $("#formSingUp").validate({
            rules: {
                firstName: "required",
                lastName: "required",
                email: "required",
                password: "required",
                rePassword: {
                  required: true,
                  equalTo: '#pass'
                }
            }
        });

        $("#formSingIn").validate({
            rules: {
                email: "required",
                password: "required"
            }
        });
    });
</script>

</body>
</html>
