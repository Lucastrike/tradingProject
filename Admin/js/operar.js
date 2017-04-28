$("document").ready(function() {

    var roundedClose;

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
    // var total;

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
        //   type: 'GET',
        //   beforeSend: function(request) {
        //     request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
        //   },
        //   // url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_USD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
        //   url: 'https://api-fxtrade.oanda.com/v1/candles?instrument='+divisaBase+'_'+divisaContraparte+'&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
        //
        //   // url: 'http://lucassalinas.com.es/tradingProject/data/current.json',
        //   dataType: 'json',
        //   success: function(data){
        //     console.log(data);
        //     for (var i=0; i<data.candles.length; i++) {
        //       // openAsk = data.candles[i].openAsk;
        //       // openBid = data.candles[i].openBid;
        //       // lowAsk = data.candles[i].lowAsk;
        //       // lowBid = data.candles[i].lowBid;
        //       // highAsk = data.candles[i].highAsk;
        //       // highBid = data.candles[i].highBid;
        //       closeAsk = data.candles[i].closeAsk;
        //       closeBid = data.candles[i].closeBid;
        //     }
        //
        //     closeAskprev = data.candles[0].closeAsk;
        //     closeBidprev = data.candles[0].closeBid;
        //     closePrev = ((closeAskprev - closeBidprev) / 2) + closeBidprev;
        //
        //     if (close > closePrev) {
        //       $("#inputPrice").css("color", "green");
        //     }else if (close < closePrev) {
        //       $("#inputPrice").css("color", "red");
        //     }
        //
        //     numbersSettings();
        //
        //     setTimeout(function(){
        //       forexQuotes();
        //     }, 60000);
        //   },
        //   completed: function(){
        //     console.log("completed");
        //   },
        //   error: function(jqXHR, textStatus, errorThrown){
        //     errors();
        //   }
        // });
    }

    function numbersSettings(){
      spread = closeAsk - closeBid;
      $("#inputPriceBid").val(closeBid);
      $("#inputPriceAsk").val(closeAsk);

      decimalPart = spread.toString().split(".")[1]; ///after
      visualSpread = decimalPart.toString().substr(3, 2);
      firstNumber = visualSpread.substr(0, 1);
      secondNumber = visualSpread.substr(1, 1);
      $(".spread").html(firstNumber + "." + secondNumber);

      switch (activo) {

        // MAJOR PAIRS

        case "EURUSD":
          inEurosAsk = 1 / closeAsk;
          inEurosBid = 1 / closeBid;
          //Necesita ser redondeado a 5 decimales***********************
          break;
          case "GBPUSD":
            $.ajax({
              type: 'GET',
              beforeSend: function(request) {
                request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
              },
              url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_USD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
              dataType: 'json',
              success: function(data){
                console.log("Segunda llamada");
                var EURUSDcloseAsk = data.candles[1].closeAsk;
                var EURUSDcloseBid = data.candles[1].closeBid;

                var USDEURcloseAsk = 1 / EURUSDcloseAsk;
                var USDEURcloseBid = 1 / EURUSDcloseBid;
                //Necesita ser redondeado a 5 decimales***********************

                inEurosAsk = closeAsk * USDEURcloseAsk;
                inEurosBid = closeBid * USDEURcloseBid;
              },
              error: errors();
            });
            break;
            case "USDCHF":
              $.ajax({
                type: 'GET',
                beforeSend: function(request) {
                  request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                },
                url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_CHF&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                dataType: 'json',
                success: function(data){
                  console.log("Segunda llamada");
                  var EURCHFcloseAsk = data.candles[1].closeAsk;
                  var EURCHFcloseBid = data.candles[1].closeBid;

                  var CHFEURcloseAsk = 1 / EURCHFcloseAsk;
                  var CHFEURcloseBid = 1 / EURCHFcloseBid;
                  //Necesita ser redondeado a 5 decimales***********************

                  inEurosAsk = closeAsk * CHFEURcloseAsk;
                  inEurosBid = closeBid * CHFEURcloseBid;
                },
                error: errors();
              });
              break;
              case "USDJPY":
                $.ajax({
                  type: 'GET',
                  beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                  },
                  url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_JPY&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                  dataType: 'json',
                  success: function(data){
                    console.log("Segunda llamada");
                    var EURJPYcloseAsk = data.candles[1].closeAsk;
                    var EURJPYcloseBid = data.candles[1].closeBid;

                    var JPYEURcloseAsk = 1 / EURJPYcloseAsk;
                    var JPYEURcloseBid = 1 / EURJPYcloseBid;
                    //Necesita ser redondeado a 5 decimales***********************

                    inEurosAsk = closeAsk * JPYEURcloseAsk;
                    inEurosBid = closeBid * JPYEURcloseBid;
                  },
                  error: errors();
                });
                break;

                // MINOR PAIRS

                case "AUDCAD":
                  $.ajax({
                    type: 'GET',
                    beforeSend: function(request) {
                      request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                    },
                    url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_CAD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                    dataType: 'json',
                    success: function(data){
                      console.log("Segunda llamada");
                      var EURCADcloseAsk = data.candles[1].closeAsk;
                      var EURCADcloseBid = data.candles[1].closeBid;

                      var CADEURcloseAsk = 1 / EURCADcloseAsk;
                      var CADEURcloseBid = 1 / EURCADcloseBid;
                      //Necesita ser redondeado a 5 decimales***********************

                      inEurosAsk = closeAsk * CADEURcloseAsk;
                      inEurosBid = closeBid * CADEURcloseBid;
                    },
                    error: errors();
                  });
                  break;
                  case "AUDCHF":
                    //Repetir llamada
                    break;
                    case "AUDJPY":
                      //Repetir llamada
                      break;
                      case "AUDNZD":
                        $.ajax({
                          type: 'GET',
                          beforeSend: function(request) {
                            request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                          },
                          url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_NZD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                          dataType: 'json',
                          success: function(data){
                            console.log("Segunda llamada");
                            var EURNZDcloseAsk = data.candles[1].closeAsk;
                            var EURNZDcloseBid = data.candles[1].closeBid;

                            var NZDEURcloseAsk = 1 / EURNZDcloseAsk;
                            var NZDEURcloseBid = 1 / EURNZDcloseBid;
                            //Necesita ser redondeado a 5 decimales***********************

                            inEurosAsk = closeAsk * NZDEURcloseAsk;
                            inEurosBid = closeBid * NZDEURcloseBid;
                          },
                          error: errors();
                        });
                        break;
                        case "AUDUSD":
                          //Repetir llamada
                          break;
                          case "CADCHF":
                            //Repetir llamada
                            break;
                            case "CADJPY":
                              //Repetir llamada
                              break;
                              case "EURAUD":
                              case "EURCAD":
                              case "EURCHF":
                              case "EURGBP":
                              case "EURNZD":
                              case "EURAUD":
                                inEurosAsk = 1 / closeAsk;
                                inEurosBid = 1 / closeBid;
                                //Necesita ser redondeado a 5 decimales***********************
                                break;
                                case "GBPAUD":
                                  $.ajax({
                                    type: 'GET',
                                    beforeSend: function(request) {
                                      request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                    },
                                    url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_AUD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                    dataType: 'json',
                                    success: function(data){
                                      console.log("Segunda llamada");
                                      var EURAUDcloseAsk = data.candles[1].closeAsk;
                                      var EURAUDcloseBid = data.candles[1].closeBid;

                                      var AUDEURcloseAsk = 1 / EURAUDcloseAsk;
                                      var AUDEURcloseBid = 1 / EURAUDcloseBid;
                                      //Necesita ser redondeado a 5 decimales***********************

                                      inEurosAsk = closeAsk * AUDEURcloseAsk;
                                      inEurosBid = closeBid * AUDEURcloseBid;
                                    },
                                    error: errors();
                                  });
                                  break;
                                  case "GBPCAD":
                                    //Repetir llamada
                                    break;
                                    case "GBPCHF":
                                      //Repetir llamada
                                      break;
                                      case "GBPJPY":
                                        //Repetir llamada
                                        break;
                                        case "GBPNZD":
                                          //Repetir llamada
                                          break;
                                          case "NZDCAD":
                                            //Repetir llamada
                                            break;
                                            case "NZDCHF":
                                              //Repetir llamada
                                              break;
                                              case "NZDJPY":
                                                //Repetir llamada
                                                break;
                                                case "NZDUSD":
                                                  //Repetir llamada
                                                  break;
                                                  case "USDCAD":
                                                    //Repetir llamada
                                                    break;
                                                    case "AUDSGD":
                                                      $.ajax({
                                                        type: 'GET',
                                                        beforeSend: function(request) {
                                                          request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                        },
                                                        url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_SGD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                        dataType: 'json',
                                                        success: function(data){
                                                          console.log("Segunda llamada");
                                                          var EURSGDcloseAsk = data.candles[1].closeAsk;
                                                          var EURSGDcloseBid = data.candles[1].closeBid;

                                                          var SGDEURcloseAsk = 1 / EURSGDcloseAsk;
                                                          var SGDEURcloseBid = 1 / EURSGDcloseBid;
                                                          //Necesita ser redondeado a 5 decimales***********************

                                                          inEurosAsk = closeAsk * SGDEURcloseAsk;
                                                          inEurosBid = closeBid * SGDEURcloseBid;
                                                        },
                                                        error: errors();
                                                      });
                                                      break;
                                                      case "EURCZK":
                                                      case "EURHUF":
                                                      case "EURNOK":
                                                      case "EURPLN":
                                                      case "EURSEK":
                                                      case "EURZAR":
                                                        inEurosAsk = 1 / closeAsk;
                                                        inEurosBid = 1 / closeBid;
                                                        //Necesita ser redondeado a 5 decimales***********************
                                                        break;
                                                        case "GBPHKD":
                                                          //HACE FALTA MAS DE UNA LLAMADA AJAX
                                                          break;
                                                          case "GBPPLN":
                                                            $.ajax({
                                                              type: 'GET',
                                                              beforeSend: function(request) {
                                                                request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                              },
                                                              url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_PLN&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                              dataType: 'json',
                                                              success: function(data){
                                                                console.log("Segunda llamada");
                                                                var EURPLNcloseAsk = data.candles[1].closeAsk;
                                                                var EURPLNcloseBid = data.candles[1].closeBid;

                                                                var PLNEURcloseAsk = 1 / EURPLNcloseAsk;
                                                                var PLNEURcloseBid = 1 / EURPLNcloseBid;
                                                                //Necesita ser redondeado a 5 decimales***********************

                                                                inEurosAsk = closeAsk * PLNEURcloseAsk;
                                                                inEurosBid = closeBid * PLNEURcloseBid;
                                                              },
                                                              error: errors();
                                                            });
                                                            break;
                                                            case "GBPSGD":
                                                              $.ajax({
                                                                type: 'GET',
                                                                beforeSend: function(request) {
                                                                  request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                                },
                                                                url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_SGD&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                                dataType: 'json',
                                                                success: function(data){
                                                                  console.log("Segunda llamada");
                                                                  var EURSGDcloseAsk = data.candles[1].closeAsk;
                                                                  var EURSGDcloseBid = data.candles[1].closeBid;

                                                                  var SGDEURcloseAsk = 1 / EURSGDcloseAsk;
                                                                  var SGDEURcloseBid = 1 / EURSGDcloseBid;
                                                                  //Necesita ser redondeado a 5 decimales***********************

                                                                  inEurosAsk = closeAsk * SGDEURcloseAsk;
                                                                  inEurosBid = closeBid * SGDEURcloseBid;
                                                                },
                                                                error: errors();
                                                              });
                                                              break;
                                                              case "GBPZAR":
                                                                $.ajax({
                                                                  type: 'GET',
                                                                  beforeSend: function(request) {
                                                                    request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                                  },
                                                                  url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_ZAR&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                                  dataType: 'json',
                                                                  success: function(data){
                                                                    console.log("Segunda llamada");
                                                                    var EURZARcloseAsk = data.candles[1].closeAsk;
                                                                    var EURZARcloseBid = data.candles[1].closeBid;

                                                                    var ZAREURcloseAsk = 1 / EURZARcloseAsk;
                                                                    var ZAREURcloseBid = 1 / EURZARcloseBid;
                                                                    //Necesita ser redondeado a 5 decimales***********************

                                                                    inEurosAsk = closeAsk * ZAREURcloseAsk;
                                                                    inEurosBid = closeBid * ZAREURcloseBid;
                                                                  },
                                                                  error: errors();
                                                                });
                                                                break;
                                                                case "HKDJPY":
                                                                  //Repetir llamada
                                                                  break;
                                                                  case "NZDSGD":
                                                                    //Repetir llamada
                                                                    break;
                                                                    case "USDCNH":
                                                                      //HACE FALTA MAS DE UNA LLAMADA AJAX
                                                                      break;
                                                                      case "USDCZK":
                                                                        $.ajax({
                                                                          type: 'GET',
                                                                          beforeSend: function(request) {
                                                                            request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                                          },
                                                                          url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_CZK&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                                          dataType: 'json',
                                                                          success: function(data){
                                                                            console.log("Segunda llamada");
                                                                            var EURCZKcloseAsk = data.candles[1].closeAsk;
                                                                            var EURCZKcloseBid = data.candles[1].closeBid;

                                                                            var CZKEURcloseAsk = 1 / EURCZKcloseAsk;
                                                                            var CZKEURcloseBid = 1 / EURCZKcloseBid;
                                                                            //Necesita ser redondeado a 5 decimales***********************

                                                                            inEurosAsk = closeAsk * CZKEURcloseAsk;
                                                                            inEurosBid = closeBid * CZKEURcloseBid;
                                                                          },
                                                                          error: errors();
                                                                        });
                                                                        break;
                                                                        case "USDHKD":
                                                                          //HACE FALTA MAS DE UNA LLAMADA AJAX
                                                                          break;
                                                                          case "USDHUF":
                                                                            $.ajax({
                                                                              type: 'GET',
                                                                              beforeSend: function(request) {
                                                                                request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                                              },
                                                                              url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_HUF&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                                              dataType: 'json',
                                                                              success: function(data){
                                                                                console.log("Segunda llamada");
                                                                                var EURHUFcloseAsk = data.candles[1].closeAsk;
                                                                                var EURHUFcloseBid = data.candles[1].closeBid;

                                                                                var HUFEURcloseAsk = 1 / EURHUFcloseAsk;
                                                                                var HUFEURcloseBid = 1 / EURHUFcloseBid;
                                                                                //Necesita ser redondeado a 5 decimales***********************

                                                                                inEurosAsk = closeAsk * HUFEURcloseAsk;
                                                                                inEurosBid = closeBid * HUFEURcloseBid;
                                                                              },
                                                                              error: errors();
                                                                            });
                                                                            break;
                                                                            case "USDNOK":
                                                                              $.ajax({
                                                                                type: 'GET',
                                                                                beforeSend: function(request) {
                                                                                  request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                                                },
                                                                                url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_NOK&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                                                dataType: 'json',
                                                                                success: function(data){
                                                                                  console.log("Segunda llamada");
                                                                                  var EURNOKcloseAsk = data.candles[1].closeAsk;
                                                                                  var EURNOKcloseBid = data.candles[1].closeBid;

                                                                                  var NOKEURcloseAsk = 1 / EURNOKcloseAsk;
                                                                                  var NOKEURcloseBid = 1 / EURNOKcloseBid;
                                                                                  //Necesita ser redondeado a 5 decimales***********************

                                                                                  inEurosAsk = closeAsk * NOKEURcloseAsk;
                                                                                  inEurosBid = closeBid * NOKEURcloseBid;
                                                                                },
                                                                                error: errors();
                                                                              });
                                                                              break;
                                                                              case "USDPLN":
                                                                                //Repetir llamada
                                                                                break;
                                                                                case "USDSEK":
                                                                                  $.ajax({
                                                                                    type: 'GET',
                                                                                    beforeSend: function(request) {
                                                                                      request.setRequestHeader("Authorization", "Bearer 2c7d369cd43f6880268a2dcde5b4edf9-38812a173828c88f87f833a8868826eb");
                                                                                    },
                                                                                    url: 'https://api-fxtrade.oanda.com/v1/candles?instrument=EUR_SEK&count=2&dailyAlignment=0&alignmentTimezone=Europe%2FMadrid',
                                                                                    dataType: 'json',
                                                                                    success: function(data){
                                                                                      console.log("Segunda llamada");
                                                                                      var EURSEKcloseAsk = data.candles[1].closeAsk;
                                                                                      var EURSEKcloseBid = data.candles[1].closeBid;

                                                                                      var SEKEURcloseAsk = 1 / EURSEKcloseAsk;
                                                                                      var SEKEURcloseBid = 1 / EURSEKcloseBid;
                                                                                      //Necesita ser redondeado a 5 decimales***********************

                                                                                      inEurosAsk = closeAsk * SEKEURcloseAsk;
                                                                                      inEurosBid = closeBid * SEKEURcloseBid;
                                                                                    },
                                                                                    error: errors();
                                                                                  });
                                                                                  break;
                                                                                  case "USDSGD":
                                                                                    //Repetir llamada
                                                                                    break;
        default:
          inEurosAsk = 1 / closeAsk;
          inEurosBid = 1 / closeBid;
          //Necesita ser redondeado a 5 decimales***********************
      }
      totalUpdate();
    }

    function errors(){
      function(jqXHR, textStatus, errorThrown){
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
    }


    // ========== Lotes Slider ===========
    var sliderLotes = $('#lotes').slider({
        formatter: function(volume) {
            return volume;
        }
    });

    sliderLotes.on('change', function() {
        volume = sliderLotes.slider('getvalue');
        console.log(volume);
        $("#spanLotes").html(volume);
        totalUpdate();
    });

    function totalUpdate(){
      if (isNaN(volume)) {
        volume = 0;
      }
      console.log(volume);
      total = inEuros * volume * 100000;

      // var roundedtotal = total.toFixed(2);
      // $("#inputTotal").val(roundedtotal+" €");
    }

});
