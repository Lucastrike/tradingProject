$("document").ready(function() {

    $('#usuarios').tab('show');

    var tabla = "Usuarios";
    console.log(tabla);
    tableCall();
    getTipoOperacion();
    getEstado();

    $(".tabla").on('click', function() {
        tabla = $(this).text();
        console.log(tabla);
        tableCall();
    });

    function tableCall() {
      if (tabla == "Usuarios") {
        $.ajax({
            type: 'GET',
            url: 'php/getusuarios.php',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                $(".fila1").remove();
                for (var i = 0; i < data.length; i++) {
                  $("<tr class='fila1'>\
                      <td class='text-center'>"+ data[i].id +"</td>\
                      <td class='text-center'>"+ data[i].usuario +"</td>\
                      <td class='text-center'>"+ data[i].nombre +"</td>\
                      <td class='text-center'>"+ data[i].apellido +"</td>\
                      <td class='text-center'>"+ data[i].email +"</td>\
                      <td class='text-center'>"+ data[i].password +"</td>\
                      <td class='text-center'>"+ data[i].cap_inicial +"</td>\
                      <td class='text-center'>"+ data[i].balance +"</td>\
                      <td class='text-center'>"+ data[i].apalancamiento +"</td>\
                      <td class='text-center'>"+ data[i].admin +"</td>\
                      <td class='text-center'>"+ data[i].educacion +"</td>\
                      <td class='text-center'>"+ data[i].local +"</td>\
                      <td><i class='fa fa-fw fa-pencil text-yellow modificarUsuario' role='button' data='"+data[i].id+"'></i></td>\
                      <td><i class='fa fa-fw fa-remove text-red borrarUsuario' role='button' data='"+data[i].id+"'></i></td>\
                    </tr>").appendTo("#tableUsuarios");
                    $("<option>"+ data[i].id +"</option>").appendTo("#inputIdUsuarioOp");
                    $('.selectpicker').selectpicker('refresh');
                }

            }
        });
      } else if (tabla == "Operaciones") {
        $.ajax({
            type: 'GET',
            url: 'php/getoperaciones.php',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                $(".fila2").remove();
                for (var i = 0; i < data.length; i++) {
                  $("<tr class='fila2'>\
                      <td class='text-center'>"+ data[i].id +"</td>\
                      <td class='text-center'>"+ data[i].id_usuario +"</td>\
                      <td class='text-center'>"+ data[i].id_tipo_operacion +"</td>\
                      <td class='text-center'>"+ data[i].volumen +"</td>\
                      <td class='text-center'>"+ data[i].date +"</td>\
                      <td class='text-center'>"+ data[i].simbolo +"</td>\
                      <td class='text-center'>"+ data[i].precio +"</td>\
                      <td class='text-center'>"+ data[i].stopLoss +"</td>\
                      <td class='text-center'>"+ data[i].takeProfit +"</td>\
                      <td class='text-center'>"+ data[i].comentario +"</td>\
                      <td class='text-center'>"+ data[i].margin +"</td>\
                      <td class='text-center'>"+ data[i].enEuros +"</td>\
                      <td class='text-center'>"+ data[i].id_estado +"</td>\
                      <td class='text-center'>"+ data[i].profitLoss +"</td>\
                      <td><i class='fa fa-fw fa-pencil text-yellow modificarOperacion' role='button' data='"+data[i].id+"'></i></td>\
                      <td><i class='fa fa-fw fa-remove text-red borrarOperacion' role='button' data='"+data[i].id+"'></i></td>\
                      <td></td>\
                    </tr>").appendTo("#tableOperaciones");
                }
            }
        });
      } else if (tabla == "Tipo_operacion") {
        getTipoOperacion();
      } else {
        getEstado();
      }
    }

    function getTipoOperacion(){
      $.ajax({
          type: 'GET',
          url: 'php/getTipoOperacion.php',
          dataType: 'json',
          success: function(data) {
              console.log(data);
              $(".fila3").remove();
              for (var i = 0; i < data.length; i++) {
                $("<tr class='fila3'>\
                    <td>"+ data[i].id +"</td>\
                    <td>"+ data[i].operacion +"</td>\
                  </tr>").appendTo("#tableTipoOperacion");
                  $("<option>"+ data[i].id +"</option>").appendTo("#inputIdTipoOperacion");
                  $('.selectpicker').selectpicker('refresh');
              }
          }
      });
    }
    function getEstado(){
      $.ajax({
          type: 'GET',
          url: 'php/getEstado.php',
          dataType: 'json',
          success: function(data) {
              console.log(data);
              $(".fila4").remove();
              for (var i = 0; i < data.length; i++) {
                $("<tr class='fila4'>\
                    <td>"+ data[i].id +"</td>\
                    <td>"+ data[i].estado +"</td>\
                  </tr>").appendTo("#tableEstado");
                  $("<option>"+ data[i].id +"</option>").appendTo("#inputIdEstado");
                  $('.selectpicker').selectpicker('refresh');
              }
          }
      });
    }

    $(document).on('click', '.modificarUsuario', function(){
      var idUsuario = $(this).attr('data');
      $.ajax({
          type: 'POST',
          url: 'php/getUsuario.php',
          data: {
            idUsuario: idUsuario
          },
          dataType: 'json',
          success: function(data) {
              console.log(data);
              $("#inputId").val(data[0].id);
              $("#inputUsuario").val(data[0].usuario);
              $("#inputNombre").val(data[0].nombre);
              $("#inputApellido").val(data[0].apellido);
              $("#inputEmail").val(data[0].email);
              $("#inputPassword").val(data[0].password);
              $("#inputCap_inicial").val(data[0].cap_inicial);
              $("#inputBalanace").val(data[0].balance);
              $("#inputApalancamiento").val(data[0].apalancamiento);
              $("#inputAdmin").val(data[0].admin);
              $("#inputEducacion").val(data[0].educacion);
              $("#inputLocalizacion").val(data[0].local);
          }
      });
    });

    $(document).on('click', '.checkUsuario', function(){
      var id = $("#inputId").val();
      var usuario = $("#inputUsuario").val();
      var nombre = $("#inputNombre").val();
      var apellido = $("#inputApellido").val();
      var email = $("#inputEmail").val();
      var password = $("#inputPassword").val();
      var cap_inicial = $("#inputCap_inicial").val();
      var balance = $("#inputBalanace").val();
      var apalancamiento = $("#inputApalancamiento").val();
      var admin = $("#inputAdmin").val();
      var educacion = $("#inputEducacion").val();
      var localizacion = $("#inputLocalizacion").val();
      $.ajax({
          type: 'POST',
          url: 'php/modificarUsuario.php',
          data: {
            id: id,
            usuario: usuario,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            cap_inicial: cap_inicial,
            balance: balance,
            apalancamiento: apalancamiento,
            admin: admin,
            educacion: educacion,
            localizacion: localizacion
          },
          success: function(data) {
              console.log(data);
              tableCall();
              $("#inputId").val("");
              $("#inputUsuario").val("");
              $("#inputNombre").val("");
              $("#inputApellido").val("");
              $("#inputEmail").val("");
              $("#inputPassword").val("");
              $("#inputCap_inicial").val("");
              $("#inputBalanace").val("");
              $("#inputApalancamiento").val("");
              $("#inputAdmin").val("");
              $("#inputEducacion").val("");
              $("#inputLocalizacion").val("");
          }
      });
    });

    $(document).on('click', '.borrarUsuario', function(){
      var idUsuario = $(this).attr('data');
      $.ajax({
          type: 'POST',
          url: 'php/borrarUsuario.php',
          data: {
            idUsuario: idUsuario
          },
          success: function(data) {
              console.log(data);
              tableCall();
          }
      });
    });

    $(document).on('click', '.modificarOperacion', function(){
      var idOperacion = $(this).attr('data');
      $.ajax({
          type: 'POST',
          url: 'php/getOperacion.php',
          data: {
            idOperacion: idOperacion
          },
          dataType: 'json',
          success: function(data) {
              console.log(data);
              $("#inputIdOp").val(data[0].id);
              $("#inputIdUsuarioOp").selectpicker('val', data[0].id_usuario);
              $("#inputIdTipoOperacion").selectpicker('val', data[0].id_tipo_operacion);
              $("#inputVolumen").val(data[0].volumen);
              $("#inputFecha").val(data[0].date);
              $("#inputSimbolo").val(data[0].simbolo);
              $("#inputPrecio").val(data[0].precio);
              $("#inputStopLoss").val(data[0].stopLoss);
              $("#inputTakeProfit").val(data[0].takeProfit);
              $("#inputComentario").val(data[0].comentario);
              $("#inputMargen").val(data[0].margin);
              $("#inputEnEuros").val(data[0].enEuros);
              $("#inputIdEstado").selectpicker('val', data[0].id_estado);
              $("#inputProfitLoss").val(data[0].profitLoss);
          }
      });
    });

    $(document).on('click', '.modificarUsuario', function(){
      var idUsuario = $(this).attr('data');
      $.ajax({
          type: 'POST',
          url: 'php/getUsuario.php',
          data: {
            idUsuario: idUsuario
          },
          dataType: 'json',
          success: function(data) {
              console.log(data);
              $("#inputId").val(data[0].id);
              $("#inputUsuario").val(data[0].usuario);
              $("#inputNombre").val(data[0].nombre);
              $("#inputApellido").val(data[0].apellido);
              $("#inputEmail").val(data[0].email);
              $("#inputPassword").val(data[0].password);
              $("#inputCap_inicial").val(data[0].cap_inicial);
              $("#inputBalanace").val(data[0].balance);
              $("#inputApalancamiento").val(data[0].apalancamiento);
              $("#inputProfitLoss").val(data[0].profitLoss);
          }
      });
    });

    $(document).on('click', '.checkOperacion', function(){
      var idOp = $("#inputIdOp").val();
      var idUsuarioOp = $("#inputIdUsuarioOp").selectpicker('val');
      var idTipoOperacion = $("#inputIdTipoOperacion").selectpicker('val');
      var volumen = $("#inputVolumen").val();
      var simbolo = $("#inputSimbolo").val();
      var precio = $("#inputPrecio").val();
      var stopLoss = $("#inputStopLoss").val();
      var takeProfit = $("#inputTakeProfit").val();
      var comentario = $("#inputComentario").val();
      var margen = $("#inputMargen").val();
      var enEuros = $("#inputEnEuros").val();
      var idEstado = $("#inputIdEstado").selectpicker('val');
      var profitLoss = $("#inputProfitLoss").val();

      $.ajax({
          type: 'POST',
          url: 'php/modificarOperacion.php',
          data: {
            idOp: idOp,
            idUsuarioOp: idUsuarioOp,
            idTipoOperacion: idTipoOperacion,
            volumen: volumen,
            simbolo: simbolo,
            precio: precio,
            stopLoss: stopLoss,
            takeProfit: takeProfit,
            comentario: comentario,
            margen: margen,
            enEuros: enEuros,
            idEstado: idEstado,
            profitLoss: profitLoss
          },
          success: function(data) {
              console.log(data);
              tableCall();
              $("#inputIdOp").val("");
              $("#inputIdUsuarioOp").selectpicker('val', '');
              $("#inputIdTipoOperacion").selectpicker('val', '');
              $("#inputVolumen").val("");
              $("#inputFecha").val("");
              $("#inputSimbolo").val("");
              $("#inputPrecio").val("");
              $("#inputStopLoss").val("");
              $("#inputTakeProfit").val("");
              $("#inputComentario").val("");
              $("#inputMargen").val("");
              $("#inputComentario").val("");
              $("#inputMargen").val("");
              $("#inputEnEuros").val("");
              $("#inputIdEstado").selectpicker('val', '');
              $("#inputProfitLoss").val("");
              idOp = null;
              console.log(idOp);
          }
      });
    });

    $(document).on('click', '.borrarOperacion', function(){
      var idOperacion = $(this).attr('data');
      $.ajax({
          type: 'POST',
          url: 'php/borrarOperacion.php',
          data: {
            idOperacion: idOperacion
          },
          success: function(data) {
              console.log(data);
              tableCall();
          }
      });
    });

    $.ajaxSetup({

      error: function(jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

          //alert('Not connect: Verify Network.');
          $(".400").modal('show');

        } else if (jqXHR.status == 404) {

          alert('Algo has escrito mal en la url...');

        } else if (jqXHR.status == 500) {

          //alert('Internal Server Error [500].');
          $(".500").modal('show');

        } else if (textStatus === 'parsererror') {

          //alert('Requested JSON parse failed.');
          $(".500").modal('show');

        } else if (textStatus === 'timeout') {

          //alert('Time out error.');
          $(".500").modal('show');

        } else if (textStatus === 'abort') {

          //alert('Ajax request aborted.');
          $(".500").modal('show');

        } else {

          //alert('Uncaught Error: ' + jqXHR.responseText);
          $(".500").modal('show');

        }

      }
    });

});
