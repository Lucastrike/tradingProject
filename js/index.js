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
        capIni: "Ups! has olvidado introducir un capital inicial menor a 100.000€ o no es multiplo de 10.",
        apalancamiento: "Ups! has olvidado seleccionar un apalancamiento.",
        agree: "Ups! has olvidado aceptar."
      },
      submitHandler: function() {
        console.log("all ok");
        //signup();
      }
  });

function signup(){
    var nameup = $("#nameup").val();
    var emailup = $("#emailup").val();
    var passwordup = $("#passwordup").val();

    $.ajax({
        type: '',
        url: '',
        data: {
          name:nameup,
          email:emailup,
          password:passwordup
        },
        success: function(response){
          //alert("Welcome "+nameup);
          $("#nameup").val("");
          $("#emailup").val("");
          $("#passwordup").val("");
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

// $("#form-signin").validate({
//     rules: {
//         email: "required",
//         password: {
//         required: true,
//         minlength: 5
//       }
//     },
//     messages: {
//       email: "Please enter a valid email address",
//       password: {
//         required: "Please provide a password",
//         minlength: "Your password must be at least 5 characters long"
//       }
//     },
//     submitHandler: function() {
//       signin();
//     }
// });
//
// function signin(){
//
//   var emailin = $("#emailin").val();
//   var passwordin = $("#passwordin").val();
//
//   $.ajax({
//       type: 'POST',
//       url: 'php/login.php',
//       data: {
//         email:emailin,
//         password:passwordin
//       },
//       success: function(response){
//         if (response==0) {
//           alert("The email doesn't match our database");
//         } else {
//           //alert("Welcome " + response);
//           $('<li><a class="home-icon"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>Hey '+response+' (^_^)</a></li>').insertBefore("#left-home");
//           $("#logout").removeClass("hidden");
//           $.magnificPopup.close();
//         }
//         $("#emailin").val("");
//         $("#passwordin").val("");
//       },
//       error: function(jqXHR, textStatus, errorThrown){
//       if (jqXHR.status === 0) {
//
//       alert('Not connect: Verify Network.');
//
//     } else if (jqXHR.status == 404) {
//
//       alert('Requested page not found [404]');
//
//     } else if (jqXHR.status == 500) {
//
//       alert('Internal Server Error [500].');
//
//     } else if (textStatus === 'parsererror') {
//
//       alert('Requested JSON parse failed.');
//
//     } else if (textStatus === 'timeout') {
//
//       alert('Time out error.');
//
//     } else if (textStatus === 'abort') {
//
//       alert('Ajax request aborted.');
//
//     } else {
//
//       alert('Uncaught Error: ' + jqXHR.responseText);
//
//     }
//   }
//
// });
//
// }

});
