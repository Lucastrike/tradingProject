
$("document").ready(function() {

  $(".activo").on('click', function() {
    var activo = $(this).text();
    console.log(activo);
    localStorage.setItem("activo", activo);
    location.href="index.php";
});

});
