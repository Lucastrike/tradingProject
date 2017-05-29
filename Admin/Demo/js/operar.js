$("document").ready(function() {

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

});
