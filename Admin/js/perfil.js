$("document").ready(function() {

  getOps();
  function getOps(){
    $.ajax({
        type: 'GET',
        url: 'php/getSingleUserOperations.php',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $(".row1").remove();
            for (var i = 0; i < data.length; i++) {
              $("<tr class='row1'>\
                  <td>"+ data[i].id +"</td>\
                  <td>"+ data[i].operacion +"</td>\
                  <td>"+ data[i].volumen +"</td>\
                  <td>"+ data[i].date +"</td>\
                  <td>"+ data[i].simbolo +"</td>\
                  <td>"+ data[i].precio +"</td>\
                  <td>"+ data[i].stopLoss +"</td>\
                  <td>"+ data[i].takeProfit +"</td>\
                  <td>"+ data[i].comentario +"</td>\
                </tr>").appendTo("#tableOperaciones");
            }
        }
    });
  }

  $("#inputCap_inicial").on('blur', function(){
    console.log("hello world!");
  });

  getSkills();
  function getSkills(){
    $.ajax({
        type: 'GET',
        url: 'php/getEducacion.php',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $("#educacion").text(data[0].educacion);
            $("#localizacion").text(data[0].local);
        }
    });
  }

  $("#educacion").on('click', function(){
    $("#educacion").addClass(' hidden');
    $("#educacionText").removeClass('hidden');
    $("#educacionText").text($("#educacion").text().trim());
    $("#educacionText").focus();
  });
  $("#educacionText").on('blur', function(){
    var educUpdated = $("#educacionText").val();
    if (educUpdated == "") {
      educUpdated = "Donde estudiaste?";
    }
      $.ajax({
          type: 'POST',
          url: 'php/updateEducacion.php',
          data: {
            educUpdated: educUpdated
          },
          success: function(data) {
              console.log(data);
              getSkills();
          }
      });
    $("#educacion").text(educUpdated);
    $("#educacionText").addClass(' hidden');
    $("#educacion").removeClass('hidden');
  });

  $("#localizacion").on('click', function(){
    $("#localizacion").addClass(' hidden');
    $("#localizacionText").removeClass('hidden');
    $("#localizacionText").text($("#localizacion").text().trim());
    $("#localizacionText").focus();
  });
  $("#localizacionText").on('blur', function(){
    var localUpdated = $("#localizacionText").val();
    if (localUpdated == "") {
      localUpdated = "De donde eres?";
    }
      $.ajax({
          type: 'POST',
          url: 'php/updateLocalizacion.php',
          data: {
            localUpdated: localUpdated
          },
          success: function(data) {
              console.log(data);
              getSkills();
          }
      });
    $("#localizacion").text(localUpdated);
    $("#localizacionText").addClass(' hidden');
    $("#localizacion").removeClass('hidden');
  });


  $(".profile-user-img").on('click', function(){
    $(".bs-example-modal-sm").modal('show');
  });

  var profitLoss = [];
  var balance;
  var labelsArray = [];

  $.ajax({
    type: 'GET',
    url: 'php/getProfitLoss.php',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        balance = parseFloat(data[0].cap_inicial);
        profitLoss.push(balance);
        if (data[0].profitLoss == null) {
          createLineChart();
        } else {
          for (var i = 0; i < data.length; i++) {
            balance = balance + parseFloat(data[i].profitLoss);
            balanceFixed = balance.toFixed(2);
            profitLoss.push(balanceFixed);
          }
          for (var a = 0; a < profitLoss.length+4; a++) {
            labelsArray.push(a);
          }
        }
        createLineChart();
    }
  });

  function createLineChart(){

    var ctx = $("#lineChart");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsArray,
            datasets: [{
                  label: "Balance",
                  fill: '#c8ecec',
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: profitLoss,
                  spanGaps: false,
              }
          ]
        },
        options: {
          responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:false
                    }
                }],
                xAxes: [{
                  display: false
                }]
            }
        }
    });
  }

  // DONUT CHART

  var operacion = [];
  var compra = 0;
  var venta = 0;

  $.ajax({
    type: 'GET',
    url: 'php/getExposure.php',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].operacion == "compra") {
          compra = compra + 1;
        } else {
          venta = venta + 1;
        }
      }
      operacion.push(compra);
      operacion.push(venta);
      createDonutChart();
    }
  });

  function createDonutChart(){
    var data = {
        labels: [
            "Largo",
            "Corto"
        ],
        datasets: [{
                data: operacion,
                backgroundColor: [
                    "#36A2EB",
                    "#FF6384"
                ],
                hoverBackgroundColor: [
                    "#36A2EB",
                    "#FF6384"
                ]
            }]
    };
    var ctx2 = $("#donutChart");
    var myDoughnutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: data
    });
  }


  $("#formCapIni").validate({
      rules: {
          capital: {
            required: true,
            digits: true,
            step: 10,
            range: [10, 100000]
          }
      },
      messages: {
        capital: "Recuerda que solo puede introducir una cifra multiplo de 10, >= 10 y <= 100.000"
      },
      submitHandler: function() {
        console.log("input ok");
        $(".resetear").modal('hide');
        updateAccount();
      }
  });

  function updateAccount(){
    var capital_inicial = $("#capital_inicial").val();
    $.ajax({
        type: 'POST',
        url: 'php/updateAccount.php',
        data: {
          capital_inicial: capital_inicial
        },
        success: function(data) {
            console.log(data);
            if (data == 1) {
              $(".resetear").modal('hide');
              getOps();
            }
        }
    });
  }

  $("#print").on('click', function(){
    printData();
  });

  function printData()
{
   var divToPrint=document.getElementById("tableOperaciones");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}

  $.ajaxSetup({

    error: function(jqXHR, textStatus, errorThrown) {

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

});
