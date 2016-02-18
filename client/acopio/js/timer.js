var timerDelegate = function() {};

$(function() {
  setInterval(function() {
    $.get("/recogidas", function(res, status, xhr) {
      if(!res || !res.length) {
        return timerDelegate(res);
      }

      res.forEach(function(i) {
        if(!localStorage.getItem("solicitud-"+i.id)) {
          localStorage.setItem("solicitud-"+i.id, true);
          localStorage.setItem("solicitud-seleccionada-id", i.id);
          localStorage.setItem("solicitud-seleccionada-fuente", i.fuente);
          localStorage.setItem("solicitud-seleccionada-materiales", i.materiales);
          location.href = "Acopio 08.html"
        }
      });

      timerDelegate(res);
    });
  }, 1500);
});
