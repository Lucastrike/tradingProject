$("document").ready(function() {


  setTimeout(function(){

    var activo = localStorage.getItem('activo');
    var roundedClose = localStorage.getItem('roundedClose');
    console.log(activo);
    console.log(roundedClose);
    var inEuros;
    var total;

    switch (activo) {
      case "EURUSD":
        inEuros = 1 / roundedClose;
        break;
      default:
        inEuros = 1 / roundedClose;
    }

      // ========== Lotes Slider ===========
      var sliderLotes = $('#lotes').slider({
          formatter: function(value) {
              return value;
          }
      });

      sliderLotes.on('change', function() {
          value = sliderLotes.slider('getValue');
          console.log(value);
          $("#spanLotes").html(value);

          total = inEuros * value * 100000;

          var roundedtotal = total.toFixed(2);
          $("#inputTotal").val(roundedtotal);
      });

    }, 1000);

});
