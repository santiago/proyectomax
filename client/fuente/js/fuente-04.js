$(function() {
  var recolector = localStorage.getItem("solicitud-asignada-recolector");
  var hora = localStorage.getItem("solicitud-asignada-hora");

  var nombreRecolector = {
      diego: "Diego Armando",
      vicente: "Don Vicente",
      frida: "Doña Frida"
  }[recolector];

  $(".img-recolector").attr("src", recolector+".png");
  $(".nombre-recolector h1").text(nombreRecolector);
  $(".hora h1").text(hora);

  $(".confirmar-recogida").click(function(e) {
    location.href = "Fuente 05.html";
  });
});
