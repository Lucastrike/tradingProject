switch (activo) {

  // MAJOR PAIRS

  case "EURUSD":
  case "EURAUD":
  case "EURCAD":
  case "EURCHF":
  case "EURGBP":
  case "EURNZD":
  case "EURAUD":
  case "EURCZK":
  case "EURHUF":
  case "EURNOK":
  case "EURPLN":
  case "EURSEK":
  case "EURZAR":
    inEurosAsk = 1 / closeAsk;
    inEurosBid = 1 / closeBid;
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

          inEurosAsk = closeAsk * USDEURcloseAsk;
          inEurosBid = closeBid * USDEURcloseBid;
        }
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

            inEurosAsk = closeAsk * CHFEURcloseAsk;
            inEurosBid = closeBid * CHFEURcloseBid;
          }
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

              inEurosAsk = closeAsk * JPYEURcloseAsk;
              inEurosBid = closeBid * JPYEURcloseBid;
            }
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

                inEurosAsk = closeAsk * CADEURcloseAsk;
                inEurosBid = closeBid * CADEURcloseBid;
              }
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

                      inEurosAsk = closeAsk * NZDEURcloseAsk;
                      inEurosBid = closeBid * NZDEURcloseBid;
                    }
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

                                inEurosAsk = closeAsk * AUDEURcloseAsk;
                                inEurosBid = closeBid * AUDEURcloseBid;
                              }
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

                                                    inEurosAsk = closeAsk * SGDEURcloseAsk;
                                                    inEurosBid = closeBid * SGDEURcloseBid;
                                                  }
                                                });
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

                                                          inEurosAsk = closeAsk * PLNEURcloseAsk;
                                                          inEurosBid = closeBid * PLNEURcloseBid;
                                                        }
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

                                                            inEurosAsk = closeAsk * SGDEURcloseAsk;
                                                            inEurosBid = closeBid * SGDEURcloseBid;
                                                          }
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

                                                              inEurosAsk = closeAsk * ZAREURcloseAsk;
                                                              inEurosBid = closeBid * ZAREURcloseBid;
                                                            }
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

                                                                      inEurosAsk = closeAsk * CZKEURcloseAsk;
                                                                      inEurosBid = closeBid * CZKEURcloseBid;
                                                                    }
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

                                                                          inEurosAsk = closeAsk * HUFEURcloseAsk;
                                                                          inEurosBid = closeBid * HUFEURcloseBid;
                                                                        }
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

                                                                            inEurosAsk = closeAsk * NOKEURcloseAsk;
                                                                            inEurosBid = closeBid * NOKEURcloseBid;
                                                                          }
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

                                                                                inEurosAsk = closeAsk * SEKEURcloseAsk;
                                                                                inEurosBid = closeBid * SEKEURcloseBid;
                                                                              }
                                                                            });
                                                                            break;
                                                                            case "USDSGD":
                                                                              //Repetir llamada
                                                                              break;
  default:
    inEurosAsk = 1 / closeAsk;
    inEurosBid = 1 / closeBid;
}
