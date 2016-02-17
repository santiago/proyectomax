// acopio-08.js
$(function() {
  var id = localStorage.getItem("solicitud-seleccionada-id");
  var fuente = localStorage.getItem("solicitud-seleccionada-fuente");
  var materiales = localStorage.getItem("solicitud-seleccionada-materiales");

  if(!id) { return; }

  $("h1.fuente").text(fuente);
  $("h3.materiales").text(materiales);

  function clearStorage() {
    localStorage.setItem("solicitud-nueva-id", nil);
    localStorage.setItem("solicitud-nueva-fuente", nil);
    localStorage.setItem("solicitud-nueva-materiales", nil);
  }

  $("td.aceptar a").click(function(e) {
    e.preventDefault();
    location.href = "Acopio 9.html";
  });

  $("td.cancelar a").click(function(e) {
    e.preventDefault();
    location.href = "Acopio 11.html";
  });
});
