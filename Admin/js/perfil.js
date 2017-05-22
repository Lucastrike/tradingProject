$("document").ready(function() {

  $.ajax({
      type: 'GET',
      url: 'php/getSingleUserOperations.php',
      dataType: 'json',
      success: function(data) {
          console.log(data);
          for (var i = 0; i < data.length; i++) {
            $("<tr>\
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

  $("#inputCap_inicial").on('blur', function(){
    console.log("hello world!");
  });

  $("#educacion").on('dblclick', function(){
    var descEdu = $("#educacion").text();
    var descEduTrim = descEdu.trim();
    $("#educacion").addClass(' hidden');
    $("#educacionText").removeClass('hidden');
    $("#educacionText").text(descEduTrim);
    $("#educacionText").focus();
  });
  $("#educacionText").on('blur', function(){
    $("#educacionText").addClass(' hidden');
    $("#educacion").removeClass('hidden');
  });

  $("#localizacion").on('dblclick', function(){
    var descLoc = $("#localizacion").text();
    var descLocTrim = descLoc.trim();
    $("#localizacion").addClass(' hidden');
    $("#localizacionText").removeClass('hidden');
    $("#localizacionText").text(descLocTrim);
    $("#localizacionText").focus();
  });
  $("#localizacionText").on('blur', function(){
    $("#localizacionText").addClass(' hidden');
    $("#localizacion").removeClass('hidden');
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
            profitLoss.push(balance + parseFloat(data[i].profitLoss));
            console.log(balance);
          }
          for (var a = 0; a < profitLoss.length+4; a++) {
            labelsArray.push(a);
          }
        }
        console.log(profitLoss);
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
