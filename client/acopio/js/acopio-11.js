$(function() {
  var $tplAsignadas = $(".lista-solicitudes.asignadas li:first");
  var $tplNuevas = $(".lista-solicitudes.nuevas li:first");

  var nuevas = [];
  var asignadas = [];

  localStorage.setItem('solicitud-seleccionada-id', null);
  localStorage.setItem('solicitud-seleccionada-fuente', null);

  timerDelegate = render;
  // $.get("/recogidas", render);

  function render(res, status, xhr) {
    if(!res.length) {
      $(".lista-solicitudes li:not(.hidden,.sin-solicitudes)").remove();
      $(".sin-solicitudes").show();
      return;
    }

    nuevas = res.filter(function(i) {
      return !i.asignadaA
    });

    asignadas = res.filter(function(i) {
      return !!i.asignadaA
    });

    if(!nuevas.length) {
      $(".lista-solicitudes.nuevas .sin-solicitudes").show();
    } else {
      $(".lista-solicitudes.nuevas .sin-solicitudes").hide();
    }

    if(!asignadas.length) {
      $(".lista-solicitudes.asignadas .sin-solicitudes").show();
    } else {
      $(".lista-solicitudes.asignadas .sin-solicitudes").hide();
    }
    console.log("wtf");
    console.log();
    $(".lista-solicitudes li:not(.hidden,.sin-solicitudes)").remove();

    res.forEach(function(i) {
      var fuente = i.fuente;
      var id = i.id;
      var $solicitud;

      localStorage.setItem("solicitud-"+i.id, true);

      if(i.asignadaA) {
        $solicitud = $tplAsignadas.clone();
      } else {
        $solicitud = $tplNuevas.clone();
      }

      $solicitud.removeClass("hidden");
      $solicitud.attr("fuente", fuente);
      $solicitud.attr("id", id);
      $solicitud.find(".fuente").text(fuente);

      if(i.asignadaA) {
        $solicitud.find(".recolector").text(i.recolector);
        $solicitud.find(".hora").text(i.hora);
        $(".lista-solicitudes.asignadas ul").append($solicitud);
      } else {
        $(".lista-solicitudes.nuevas ul").append($solicitud);
      }
    });

    $(".lista-solicitudes li").click(function(e) {
      var id = $(this).attr("id");
      var fuente = $(this).attr("fuente");
      localStorage.setItem('solicitud-seleccionada-id', id);
      localStorage.setItem('solicitud-seleccionada-fuente', fuente);
      location.href = "Acopio 9.html";
    });
  }
});
