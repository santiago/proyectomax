$(function() {
  setInterval(function() {
    $.get("/recogidas", function(res, status, xhr) {
      res.forEach(function(i) {
        if(!i) { return; }
        if(!localStorage.getItem("solicitud-"+i.id)) {
          localStorage.setItem("solicitud-"+i.id, true);
          localStorage.setItem("solicitud-seleccionada-id", i.id);
          localStorage.setItem("solicitud-seleccionada-fuente", i.fuente);
          localStorage.setItem("solicitud-seleccionada-materiales", i.materiales);
          location.href = "Acopio 08.html"
        } else {
          console.log("No hay solicitudes nuevas");
        }
      });
    });
  }, 2000);
});
