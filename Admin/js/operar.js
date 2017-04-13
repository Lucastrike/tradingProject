$("document").ready(function() {

  $(".js-embed-widget-head").remove();

  $('#lotes').slider({
    formatter: function(value) {
      return value;
    }
    });

  var activoSeleccionado = localStorage.getItem('activo');
  if (activoSeleccionado == null) {
    new TradingView.widget({
      "autosize": true,
      "symbol": "OANDA:EURUSD",
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
    $("#inputNombre").val("EURUSD");
  } else {
    new TradingView.widget({
      "autosize": true,
      "symbol": "OANDA:"+activoSeleccionado,
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
    $("#inputNombre").val(activoSeleccionado);
  }

  $(".activo").on('click', function() {
    var activo = $(this).text();
    console.log(activo);
    localStorage.setItem("activo", activo);
    new TradingView.widget({
      "autosize": true,
      "symbol": "OANDA:"+activo,
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
});
