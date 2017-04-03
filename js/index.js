$("document").ready(function() {

// Manage the initial capital PopOver
  $("#inputCapIni").on('focus', function(){
    $('#inputCapIni').popover('hide');
  });
  $("#inputCapIni").on('blur', function(){
    var capitalIni = $('#inputCapIni').val();
    console.log(capitalIni);
    if (capitalIni > 100000) {
      $('#inputCapIni').popover('show');
    }
  });
// ===================================================================//


//  Gets the leverage from a bootstrap select
  $('.selectpicker').change(function () {
    var apalancamiento = $(this).find("option:selected").text();
    console.log(apalancamiento);
    });
// ====================================================================//

// Needed for "nombre" and "apellidos" inputs (onlyLetters)
  $.validator.addMethod("regx", function(value, element, regexpr) {
      return regexpr.test(value);
  }, "");
// ====================================================================//

  //===================================================================//
  //                             signUp                                //
  //===================================================================//
  $("#form-signup").validate({
      rules: {
          nombre: {
            required: true,
            regx: /^[a-zA-Z]+$/
          },
          apellido: {
            required: true,
            regx: /^[a-zA-Z]+$/
          },
          email: {
            required: true,
            email: true
          },
          usuario: "required",
          password: {
            required: true,
            minlength: 6
          },
          repassword: {
            required: true,
            equalTo: '#inputPassword'
          },
          capIni: {
            required: true,
            digits: true,
            step: 10,
            range: [10, 100000]
          },
          apalancamiento: {
            required: true
          },
          agree: "required"
      },

      messages: {
        nombre: "Ups! Has olvidado tu nombre.",
        apellido: "Ups! has olvidado tu apellido.",
        usuario: "Ups! has olvidado tu nombre de usuario.",
        password: "Ups! el password tiene que contener al menos 6 caracteres.",
        repassword: "Ups! has olvidado confirmar el password o es incorrecto.",
        email: "Ups! has olvidado el email o es incorrecto.",
        capIni: "Ups! has olvidado introducir un capital inicial <= 100.000€ o no es múltiplo de 10.",
        apalancamiento: "Ups! has olvidado seleccionar un apalancamiento.",
        agree: "Ups! has olvidado aceptar."
      },
      submitHandler: function() {
        console.log("all ok");
        signup();
      }
  });

function signup(){
    var nombre = $("#inputNombre").val();
    var apellido = $("#inputApellido").val();
    var email = $("#inputEmail").val();
    var usuario = $("#inputUsuario").val();
    var password = $("#inputRePassword").val();
    var capIni = $("#inputCapIni").val();
    var leverage = $("#inputApalancamiento").find("option:selected").text();

    if (leverage == "1:10") {
      var apalancamiento = 10;
    } else if (leverage == "1:50") {
      var apalancamiento = 50;
    } else if (leverage == "1:100") {
      var apalancamiento = 100;
    } else if (leverage == "1:200") {
      var apalancamiento = 200;
    } else if (leverage == "1:500") {
      var apalancamiento = 500;
    }

    $.ajax({
        type: 'POST',
        url: 'php/register.php',
        data: {
          nombre: nombre,
          apellido: apellido,
          email: email,
          usuario: usuario,
          password: password,
          capIni: capIni,
          apalancamiento: apalancamiento
        },
        success: function(data){
          alert(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
        if (jqXHR.status === 0) {

        alert('Not connect: Verify Network.');

      } else if (jqXHR.status == 404) {

        alert('Requested page not found [404]');

      } else if (jqXHR.status == 500) {

        alert('Internal Server Error [500].');

      } else if (textStatus === 'parsererror') {

        alert('Requested JSON parse failed.');

      } else if (textStatus === 'timeout') {

        alert('Time out error.');

      } else if (textStatus === 'abort') {

        alert('Ajax request aborted.');

      } else {

        alert('Uncaught Error: ' + jqXHR.responseText);

      }
    }

  });
}


//===================================================================//
//                             SignIn                                //
//===================================================================//

$("#form-signin").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
        password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      email: "Ups! has olvidado el email o es incorrecto.",
      password: "Ups! el password tiene que contener al menos 6 caracteres."
    },
    submitHandler: function() {
      signin();
    }
});

function signin(){

  var email = $("#inputEmailin").val();
  var password = $("#inputPasswordin").val();
  console.log(password);

  $.ajax({
      type: 'POST',
      url: 'php/login.php',
      data: {
        email: email,
        password: password
      },
      success: function(data){
        alert(data);
      },
      error: function(jqXHR, textStatus, errorThrown){
      if (jqXHR.status === 0) {

      alert('Not connect: Verify Network.');

    } else if (jqXHR.status == 404) {

      alert('Requested page not found [404]');

    } else if (jqXHR.status == 500) {

      alert('Internal Server Error [500].');

    } else if (textStatus === 'parsererror') {

      alert('Requested JSON parse failed.');

    } else if (textStatus === 'timeout') {

      alert('Time out error.');

    } else if (textStatus === 'abort') {

      alert('Ajax request aborted.');

    } else {

      alert('Uncaught Error: ' + jqXHR.responseText);

    }
  }

});

}

});
