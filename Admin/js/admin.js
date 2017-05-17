
$("document").ready(function() {

  var tabla = "operacion";
  console.log(tabla);

  $(".tabla").on('click', function(){
    tabla = $(this).attr('id');
    console.log(tabla);
  });

  // $.ajax({
  //   type: 'GET',
  //   url: 'php/getTerminal.php',
  //   dataType: 'json',
  //   success: function(data) {
  //     console.log(data);
  //
  //     for (var i = 0; i < data.length; i++) {
  //       $("<tr class='linea-operacion'>\
  //             <td>" + data[i].id + "</td>\
  //             <td>" + data[i].date + "</td>\
  //             <td>" + data[i].operacion + "</td>\
  //             <td>" + data[i].volumen + "</td>\
  //             <td>" + data[i].simbolo + "</td>\
  //             <td>" + data[i].precio + "</td>\
  //             <td>" + data[i].stopLoss + "</td>\
  //             <td>" + data[i].takeProfit + "</td>\
  //             <td>" + data[i].comentario + "</td>\
  //             <td id='profitLoss" + contador + "'></td>\
  //             <td class='text-center'><i class='fa fa-close text-red close-operation "+contador+"' data=" + data[i].id + " role='button'></i></td>\
  //           </tr>").insertAfter("#terminal-head");
  //     }
  //   }
  // });

});
