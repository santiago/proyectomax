$(function() {
  var $tpl = $(".lista-solicitudes li:first");

  $.get("/recogidas", function(res, status, xhr) {
    res.forEach(function(i) {
      var fuente = i.fuente;
      var id = i.id;

      var $solicitud = $tpl.clone();
      $solicitud.text(fuente);

      if(i.asignadaA) {
        $(".lista-solicitudes.asignadas ul").append($solicitud);
      } else {
        $(".lista-solicitudes.nuevas ul").append($solicitud);
      }
    });

    $(".lista-solicitudes li").click(function(e) {
      location.href = "Acopio 9.html";
    });
  });
});
