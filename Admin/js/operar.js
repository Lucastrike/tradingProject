$("document").ready(function() {

  var volume = 0.01; //Lotes
  $("#spanLotes").html(volume);

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

  var operacion;

  var balance;
  var apalancamiento;

  var totalMargin = 0;
  var totalMarginFixed;
  var divisaB;
  var divisaC;
  var precio;
  var inEURAsk;
  var inEURBid;
  var tipoOperacion;
  var simboloOperacion;
  var volumen;
  var profitLoss;

  var enEuros;
  var contador = 0;
  var profitLossFixed;

  var EURAsk;
  var EURBid;

  var profitLossTotal = 0;
  var profitLossTotalFixed;

  var higherId;
  var higherLoss;
  var marginC;

  var margenLibreFixed;

  var idControl;
  var marginit;

  terminal();

  function terminal() {
    console.log("entra terminal");
    $(".linea-operacion").remove();
    $("#balance").html("");
    $("#margin").html("");
    $("#patrimonio").html("");
    $("#freeMargin").html("");
    $("#marginLevel").html("");
    totalMargin = 0;
    profitLossTotal = 0;
    $.ajax({
      type: 'GET',
      url: 'php/getTerminal.php',
      async: false,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        if (!$.trim(data)) {
          nonOp();
        } else {
        balance = parseFloat(data[0].balance);
        apalancamiento = data[0].apalancamiento;
        $("#balance").html();
        $("#balance").html("Balance: " + balance + " €");
        for (var i = 0; i < data.length; i++) {
          $("<tr class='linea-operacion'>\
                <td>" + data[i].id + "</td>\
                <td>" + data[i].date + "</td>\
                <td>" + data[i].operacion + "</td>\
                <td>" + data[i].volumen + "</td>\
                <td>" + data[i].simbolo + "</td>\
                <td>" + data[i].precio + "</td>\
                <td>" + data[i].stopLoss + "</td>\
                <td>" + data[i].takeProfit + "</td>\
                <td>" + data[i].comentario + "</td>\
                <td id='profitLoss" + contador + "'></td>\
                <td class='text-center'><i class='fa fa-close text-red close-operation "+contador+"' data=" + data[i].id + " role='button'></i></td>\
              </tr>").insertAfter("#terminal-head");

          totalMargin = totalMargin + parseFloat(data[i].margin);
          totalMarginFixed = totalMargin.toFixed(2);

          volumen = data[i].volumen;
          tipoOperacion = data[i].operacion;
          simboloOperacion = data[i].simbolo;
          precio = data[i].precio;
          divisaB = simboloOperacion.substr(0, 3);
          divisaC = simboloOperacion.substr(4, 6);
          enEuros = data[i].enEuros;

          // var stop = parseFloat(data[i].stopLoss);
          // var take = parseFloat(data[i].takeProfit);
          // idControl = parseInt(data[i].id);
          // $.ajax({
          //   type: 'GET',
          //   async: false,
          //   beforeSend: function(request) {
          //     request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
          //   },
          //   url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=' + simboloOperacion + '&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
          //   dataType: 'json',
          //   success: function(data) {
          //     console.log(data);
          //     var precioActualAsk = data.candles[1].closeAsk;
          //     var precioActualBid = data.candles[1].closeBid;
          //     if (tipoOperacion == "compra") {
          //       if (precioActualAsk >= take  && take != 0.0000) {
          //         alert("Take profit");
          //       } else if (precioActualAsk <= stop  && stop != 0.0000) {
          //         alert("Stop loss");
          //       }
          //     } else if (tipoOperacion == "venta") {
          //       if (precioActualBid <= take  && take != 0.0000) {
          //         alert("Take profit");
          //       } else if (precioActualBid >= stop  && stop != 0.0000) {
          //         alert("Stop loss");
          //       }
          //     }
          //
          // }
          //});

          profitLossSecondCall();
          //evasrozinzki

        }
        $("#margin").html("Margen: " + totalMarginFixed);
        var patrimonio = balance + parseFloat(profitLossTotalFixed);
        patrimonioFixed = patrimonio.toFixed(2);
        $("#patrimonio").html("Patrimonio: " + patrimonioFixed);
        var margenLibre = patrimonio - totalMarginFixed;
        margenLibreFixed = margenLibre.toFixed(2);
        $("#freeMargin").html("Margen libre: " + margenLibreFixed);
        var marginCall = balance * 0.25;
        if (patrimonio < marginCall) {
          getHigherOp();
        }
        var nivelMargen = (patrimonio / totalMarginFixed) * 100;
        var nivelMargenFixed = nivelMargen.toFixed(2);
        $("#marginLevel").html("Nivel de margen: " + nivelMargenFixed + "%");
      }
    }
    });
  }

  function closeit(){
    $.ajax({
      type: 'POST',
      url: 'php/closeit.php',
      data: {
        idControl: idControl
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        // totalMargin = totalMargin - marginC;
        // balance = balance + higherLoss;
        // updateBalance();
        // $('.marginCall').modal('show');
      }
    });
  }

  function getHigherOp(){
    $.ajax({
      type: 'GET',
      url: 'php/getHigherOp.php',
      dataType: 'json',
      success: function(data) {
          console.log(data);
          higherId = data[0].id;
          higherLoss = data[0].higherLoss;
          marginC = parseFloat(data[0].margin);
          closehigherOp();
      }
    });
  }
  function closehigherOp(){
    $.ajax({
      type: 'POST',
      url: 'php/closeHigherOp.php',
      data: {
        higherId: higherId
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        totalMargin = totalMargin - marginC;
        balance = balance + higherLoss;
        updateBalance();
        $('.marginCall').modal('show');
      }
    });
  }

  function nonOp(){
    console.log("ENTRA NONOP");
    $.ajax({
      type: 'GET',
      url: 'php/getTerminalBasic.php',
      async: false,
      dataType: 'json',
      success: function(data) {
        if (!$.trim(data)) {
          return false;
        } else {
          balance = parseFloat(data[0].balance);
          apalancamiento = data[0].apalancamiento;
          margenLibreFixed = balance;


          $("#balance").html("Balance: " + balance + " €");
          $("#patrimonio").html("Patrimonio: " + balance);
          $("#freeMargin").html("Margen libre: " + balance);
        }
      }
    });
  }

  function profitLossSecondCall() {
    if (divisaC == null) {
      return false;
    } else {
    $.ajax({
      type: 'GET',
      async: false,
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
      },
      url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_' + divisaC + '&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
      dataType: 'json',
      success: function(data) {
        console.log("porfitLoss llamada");
        console.log(data);
        var XAsk = data.candles[1].closeAsk;
        var XBid = data.candles[1].closeBid;

        EURAsk = 1 / XAsk;
        EURBid = 1 / XBid;

        EURAskFixed = EURAsk.toFixed(5);
        EURBidFixed = EURBid.toFixed(5);

        if (divisaB == "EUR") {
          if (tipoOperacion == "compra") {
            console.log("Entra EUR/compra");
            profitLoss = (enEuros * volumen * 100000) - (EURBidFixed * volumen * 100000);
          } else {
            console.log("Entra EUR/venta");
            profitLoss = (EURAskFixed * volumen * 100000) - (enEuros * volumen * 100000);
          }
        } else {
          inEURAsk = precio * EURAskFixed;
          inEURBid = precio * EURBidFixed;
          if (tipoOperacion == "compra") {
            console.log("Entra X/compra");
            profitLoss = (inEURAsk * volumen * 100000) - (enEuros * volumen * 100000);
          } else {
            console.log("Entra X/venta");
            profitLoss = (enEuros * volumen * 100000) - (inEURBid * volumen * 100000);
          }
        }

        profitLossFixed = profitLoss.toFixed(2);
        $("#profitLoss" + contador).html(profitLossFixed);
        $("."+contador+"").attr('profitLoss', profitLossFixed);
        contador = contador + 1;

      }
    });
  profitLossTotal = profitLossTotal + profitLoss;
  profitLossTotalFixed = profitLossTotal.toFixed(2);
  }
}

  $(document).on('click', '.close-operation', function() {
    var ordenId = $(this).attr("data");
    var singleProfitLoss = parseFloat($(this).attr("profitLoss"));
    console.log("SINGLE"+singleProfitLoss);

    $.ajax({
      type: 'POST',
      url: 'php/closeOperation.php',
      data: {
        ordenId: ordenId,
        singleProfitLoss: singleProfitLoss
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        var marginOp = parseFloat(data[0].margin);
        totalMargin = totalMargin - marginOp;
        balance = balance + singleProfitLoss;

        updateBalance();
      }
    });
  });
  function updateBalance(){
    $.ajax({
      type: 'POST',
      url: 'php/updateBalance.php',
      data: {
        balance: balance
      },
      success: function(data) {
        console.log(data);
        terminal();
      }
    });
  }

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

    $.ajax({
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
      },
      // url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_USD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
      url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=' + divisaBase + '_' + divisaContraparte + '&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',

      // url: 'http://lucassalinas.com.es/tradingProject/data/current.json',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        for (var i = 0; i < data.candles.length; i++) {
          // openAsk = data.candles[i].openAsk;
          // openBid = data.candles[i].openBid;
          // lowAsk = data.candles[i].lowAsk;
          // lowBid = data.candles[i].lowBid;
          // highAsk = data.candles[i].highAsk;
          // highBid = data.candles[i].highBid;
          closeAsk = data.candles[i].closeAsk;
          closeBid = data.candles[i].closeBid;
        }

        closeAskprev = data.candles[0].closeAsk;
        closeBidprev = data.candles[0].closeBid;

        if (closeAsk > closeAskprev) {
          $("#inputPriceBid").css("color", "green");
          $("#inputPriceAsk").css("color", "green");
        } else if (closeAsk < closeAskprev) {
          $("#inputPriceBid").css("color", "red");
          $("#inputPriceAsk").css("color", "red");
        }

        numbersSettings();
        profitLossSecondCall();

        setTimeout(function() {
          forexQuotes();
          terminal();
        }, 60000);
      },
      completed: function() {
        console.log("completed");
      }
    });
  }

  function numbersSettings() {
    spread = closeAsk - closeBid;
    $("#inputPriceBid").val(closeBid);
    $("#inputPriceAsk").val(closeAsk);
    console.log("SPREAD*** " + spread);

    decimalPart = spread.toString().split(".")[1]; ///after
    visualSpread = decimalPart.toString().substr(3, 2);
    firstNumber = visualSpread.substr(0, 1);
    secondNumber = visualSpread.substr(1, 1);
    $(".spread").html(firstNumber + "." + secondNumber);


    if (divisaBase == "EUR") {
      inEurosAsk = 1 / closeAsk;
      inEurosBid = 1 / closeBid;
      totalUpdate();
    } else {
      secondCall();
    }

  }

  function secondCall() {
    $.ajax({
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
      },
      url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_' + divisaContraparte +
        '&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
      dataType: 'json',
      success: function(data) {
        console.log("Segunda llamada");
        console.log(data);
        var XcloseAsk = data.candles[1].closeAsk;
        var XcloseBid = data.candles[1].closeBid;

        var EURcloseAsk = 1 / XcloseAsk;
        var EURcloseBid = 1 / XcloseBid;

        inEurosAsk = closeAsk * EURcloseAsk;
        inEurosBid = closeBid * EURcloseBid;

        totalUpdate();
      }
    });
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
    totalUpdate();
  });

  function totalUpdate() {
    if (isNaN(volume)) {
      volume = 0.01;
    }
    totalAsk = (inEurosAsk * volume * 100000) / apalancamiento;
    totalBid = (inEurosBid * volume * 100000) / apalancamiento;

    roundedTotalAsk = totalAsk.toFixed(2);
    roundedTotalBid = totalBid.toFixed(2);
    console.log("Total ask" + roundedTotalAsk);
    console.log("Total bid" + roundedTotalBid);
  }

  $(".btn-comprar, .btn-vender").on('click', function() {
    operacion = $(this).text();
    $("#form-operation").submit();
  });

  // Needed for "stopLoss" and "takeprofit" inputs (decimal values)
  $.validator.addMethod("regx", function(value) {
    var expression = /^\d+\.\d\d\d\d\d$/;
    if (expression.test(value) || value == "")
      return true;
    else
      return false;
  }, "");
  $("#form-operation").validate({
    rules: {
      stopLoss: {
        number: true,
        regx: true
      },
      takeProfit: {
        number: true,
        regx: true
      }
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "stopLoss") {
        error.appendTo(".errorStopLoss");
      } else {
        error.appendTo(".errorTakeProfit");
      }
    },
    messages: {
      stopLoss: "Añade 5 decimales",
      takeProfit: "Añade 5 decimales"
    },
    submitHandler: function() {
      console.log("all ok");
      console.log("margen: "+totalAsk);
      console.log("margen libre: "+margenLibreFixed);
      if (totalAsk <= margenLibreFixed || totalBid <= margenLibreFixed) {
        lanzar_operacion();
      } else {
        $('.marginModal').modal('show');
      }
    }
  });

  function lanzar_operacion() {

    console.log("Entra lanzar_operacion");
    stopLoss = $("#inputStopLoss").val();
    takeProfit = $("#inputTakeProfit").val();
    comentario = $("#inputcomment").val();

    var inEurosAskFixed = inEurosAsk.toFixed(5);
    var inEurosBidFixed = inEurosBid.toFixed(5);

    var activo2 = divisaBase + "_" + divisaContraparte;

    $.ajax({
      type: 'POST',
      url: 'php/lanzar_operacion.php',
      data: {
        activo2: activo2,
        volume: volume,
        closeAsk: closeAsk,
        closeBid: closeBid,
        stopLoss: stopLoss,
        takeProfit: takeProfit,
        comentario: comentario,
        operacion: operacion,
        totalAsk: totalAsk,
        totalBid: totalBid,
        inEurosAskFixed: inEurosAskFixed,
        inEurosBidFixed: inEurosBidFixed
      },
      success: function(data) {
        console.log(data);
        terminal();
      }
    });
  }

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
