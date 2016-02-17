$(function() {
  var id = localStorage.getItem("solicitud-nueva-id");
  setInterval(function() {
    $.get("/recogidas/"+id, function(res, status, xhr) {
      if(res.asignadaA) {
        localStorage.setItem("solicitud-asignada-recolector", res.asignadaA);
        localStorage.setItem("solicitud-asignada-hora", res.hora);
        location.href = "Fuente 04.html";
      }
    });
  }, 2000);

});
