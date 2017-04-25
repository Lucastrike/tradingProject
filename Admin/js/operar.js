$("document").ready(function() {

    var roundedClose;

    var value; //Lotes

    var openBid;
    var lowBid;
    var highBid;
    var closeBid;
    var openAsk;
    var lowAsk;
    var highAsk;
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
          url: 'https://api-fxtrade.oanda.com/v1/candles?instrument='+divisaBase+'_'+divisaContraparte+'&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',

          // url: 'http://lucassalinas.com.es/tradingProject/data/current.json',
          dataType: 'json',
          success: function(data){
            console.log(data);
            for (var i=0; i<data.candles.length; i++) {
              openAsk = data.candles[i].openAsk;
              openBid = data.candles[i].openBid;
              lowAsk = data.candles[i].lowAsk;
              lowBid = data.candles[i].lowBid;
              highAsk = data.candles[i].highAsk;
              highBid = data.candles[i].highBid;
              closeAsk = data.candles[i].closeAsk;
              closeBid = data.candles[i].closeBid;
            }

            closeAskprev = data.candles[0].closeAsk;
            closeBidprev = data.candles[0].closeBid;
            closePrev = ((closeAskprev - closeBidprev) / 2) + closeBidprev;

            if (close > closePrev) {
              $("#inputPrice").css("color", "green");
            }else if (close < closePrev) {
              $("#inputPrice").css("color", "red");
            }

            numbersSettings();

            setTimeout(function(){
              forexQuotes();
            }, 5000);
          },
          completed: function(){
            console.log("completed");
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

    function numbersSettings(){
    spread = (closeAsk - closeBid) / 2;
    close = spread + closeBid;
    roundedClose = close.toFixed(5);
    localStorage.setItem("roundedClose", roundedClose);
    $("#inputPrice").val(roundedClose);
    // $("#inputPrice").val("1.06154");

    decimalPart = spread.toString().split(".")[1]; ///after
    visualSpread = decimalPart.toString().substr(3, 2);
    firstNumber = visualSpread.substr(0, 1);
    secondNumber = visualSpread.substr(1, 1);
    $(".spread").html(firstNumber + "." + secondNumber);
    }

});
