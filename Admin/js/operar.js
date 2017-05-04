$("document").ready(function() {

    var volume; //Lotes

    // var openBid;
    // var lowBid;
    // var highBid;
    var closeBid;
    // var openAsk;
    // var lowAsk;
    // var highAsk;
    var closeAsk;

    var divisaBase;
    var divisaContraparte;

    var spread;
    var close;

    var decimalPart;
    var visualSpread;
    var firstNumber;
    var secondNumber;

    var closeAskprev;
    var closeBidprev;
    var closePrev;

    var inEurosAsk;
    var inEurosBid;

    var stopLoss;
    var takeProfit;
    var comentario;
    var roundedTotalAsk;
    var roundedTotalBid;

    terminal();

    function terminal(){
      $(".linea-operacion").remove();
      $.ajax({
          type: 'GET',
          url: 'php/getTerminal.php',
          dataType: 'json',
          success: function(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
              $("<tr class='linea-operacion'>\
                <td>"+data[i].id+"</td>\
                <td>"+data[i].date+"</td>\
                <td>"+data[i].operacion+"</td>\
                <td>"+data[i].volumen+"</td>\
                <td>"+data[i].simbolo+"</td>\
                <td>"+data[i].precio+"</td>\
                <td>"+data[i].stopLoss+"</td>\
                <td>"+data[i].takeProfit+"</td>\
                <td></td>\
                <td>"+data[i].comentario+"</td>\
                <td class='text-center'><i class='fa fa-close text-red close-operation' data="+data[i].id+" role='button'></i></td>\
              </tr>").insertBefore("#terminal-footer");
            }

            //AQUI SE PROGRAMA EL CALCULO DE GANANCIA/PERDIDA DE LA OPERACION

          }
      });
    }

    $(document).on('click', '.close-operation', function(){
      var ordenId = $(this).attr("data");

      // AQUI SE PROGRAMA EL CALCULO DE GANANCIA/PERDIDA DE LA OPERACION SOBRE EL PATRIMONIO

      $.ajax({
          type: 'POST',
          url: 'php/closeOperation.php',
          data: {
            ordenId:ordenId
          },
          success: function(data) {
            console.log(data);
            terminal();
          }
      });
    });

    // ============ Chart Load =============
    var activo = localStorage.getItem('activo');
    if (activo == null) {
        activo = "EURUSD";
        localStorage.setItem('activo', 'EURUSD');
    }
    new TradingView.widget({
        "autosize": true,
        "symbol": "OANDA:" + activo,
        "interval": "5",
        "timezone": "Europe/Madrid",
        "container_id": "chartView",
        "theme": "White",
        "style": "1",
        "locale": "es",
        "toolbar_bg": "rgba(207, 226, 243, 1)",
        "enable_publishing": true,
        "hide_side_toolbar": false,
        "hideideas": true
    });
    $("#inputNombre").val(activo);

    // ============ Load new chart =============
    $(".activo").on('click', function() {
        activo = $(this).text();
        console.log(activo);
        localStorage.setItem("activo", activo);
        new TradingView.widget({
            "autosize": true,
            "symbol": "OANDA:" + activo,
            "interval": "5",
            "timezone": "Europe/Madrid",
            "container_id": "chartView",
            "theme": "White",
            "style": "1",
            "locale": "es",
            "toolbar_bg": "rgba(207, 226, 243, 1)",
            "enable_publishing": true,
            "hide_side_toolbar": false,
            "hideideas": true
        });
        $("#inputNombre").val(activo);
        forexQuotes();
    });

    // =========== Initial call ==========
    forexQuotes();

    // ============ API Ajax call ==============
    function forexQuotes() {

        divisaBase = activo.substr(0, 3);
        divisaContraparte = activo.substr(3, 3);

        // $.ajax({
        //     type: 'GET',
        //     beforeSend: function(request) {
        //         request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
        //     },
        //     // url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_USD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
        //     url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=' + divisaBase + '_' + divisaContraparte + '&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
        //
        //     // url: 'http://lucassalinas.com.es/tradingProject/data/current.json',
        //     dataType: 'json',
        //     success: function(data) {
        //         console.log(data);
        //         for (var i = 0; i < data.candles.length; i++) {
        //             // openAsk = data.candles[i].openAsk;
        //             // openBid = data.candles[i].openBid;
        //             // lowAsk = data.candles[i].lowAsk;
        //             // lowBid = data.candles[i].lowBid;
        //             // highAsk = data.candles[i].highAsk;
        //             // highBid = data.candles[i].highBid;
        //             closeAsk = data.candles[i].closeAsk;
        //             closeBid = data.candles[i].closeBid;
        //         }
        //
        //         closeAskprev = data.candles[0].closeAsk;
        //         closeBidprev = data.candles[0].closeBid;
        //
        //         if (closeAsk > closeAskprev) {
        //             $("#inputPriceBid").css("color", "green");
        //             $("#inputPriceAsk").css("color", "green");
        //         } else if (closeAsk < closeAskprev) {
        //             $("#inputPriceBid").css("color", "red");
        //             $("#inputPriceAsk").css("color", "red");
        //         }
        //
        //         numbersSettings();
        //
        //         setTimeout(function() {
        //             forexQuotes();
        //         }, 600000);
        //     },
        //     completed: function() {
        //         console.log("completed");
        //     }
        // });
    }

    function numbersSettings() {
        spread = closeAsk - closeBid;
        $("#inputPriceBid").val(closeBid);
        $("#inputPriceAsk").val(closeAsk);
        console.log("SPREAD*** "+spread);

        decimalPart = spread.toString().split(".")[1]; ///after
        visualSpread = decimalPart.toString().substr(3, 2);
        firstNumber = visualSpread.substr(0, 1);
        secondNumber = visualSpread.substr(1, 1);
        $(".spread").html(firstNumber + "." + secondNumber);


        if (divisaBase == "EUR") {
            inEurosAsk = 1 / closeAsk;
            inEurosBid = 1 / closeBid;
        } else {
            secondCall();
        }

        totalUpdate();

        // switch (activo) {
        //     // EXOTIC PAIRS
        //     case "GBPHKD":
        //         //HACE FALTA MAS DE UNA LLAMADA AJAX
        //         break;
        //     case "USDCNH":
        //         //HACE FALTA MAS DE UNA LLAMADA AJAX
        //         break;
        //     case "USDHKD":
        //         break;
        // }
    }

     function secondCall() {
    //     $.ajax({
    //         type: 'GET',
    //         beforeSend: function(request) {
    //             request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
    //         },
    //         url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_' + divisaContraparte + '&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
    //         dataType: 'json',
    //         success: function(data) {
    //             console.log("Segunda llamada");
    //             console.log(data);
    //             var XcloseAsk = data.candles[1].closeAsk;
    //             var XcloseBid = data.candles[1].closeBid;
    //
    //             var EURcloseAsk = 1 / XcloseAsk;
    //             var EURcloseBid = 1 / XcloseBid;
    //
    //             inEurosAsk = closeAsk * EURcloseAsk;
    //             inEurosBid = closeBid * EURcloseBid;
    //
    //             totalUpdate();
    //         }
    //     });
    }

    // ========== Lotes Slider ===========
    var sliderLotes = $('#lotes').slider({
        formatter: function(volume) {
            return volume;
            totalUpdate();
        }
    });

    sliderLotes.on('change', function() {
        volume = sliderLotes.slider('getValue');
        $("#spanLotes").html(volume);
    });

    function totalUpdate() {
        if (isNaN(volume)) {
            volume = 0;
        }
        totalAsk = inEurosAsk * volume * 100000;
        totalBid = inEurosBid * volume * 100000;

        roundedTotalAsk = totalAsk.toFixed(2);
        roundedTotalBid = totalBid.toFixed(2);
        console.log("Total ask" + roundedTotalAsk);
        console.log("Total bid" + roundedTotalBid);
    }

    $(".btn-comprar, .btn-vender").on('click', function(){
      stopLoss = $("#inputStopLoss").val();
      takeProfit = $("#inputTakeProfit").val();
      comentario = $("#inputcomment").val();
      var operacion = $(this).text();

      $.ajax({
          type: 'POST',
          url: 'php/lanzar_operacion.php',
          data: {
            activo: activo,
            volume: volume,
            closeAsk: closeAsk,
            closeBid: closeBid,
            stopLoss: stopLoss,
            takeProfit: takeProfit,
            comentario: comentario,
            operacion: operacion
          },
          success: function(data) {
            console.log(data);
            terminal();
          }
      });
    });

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
