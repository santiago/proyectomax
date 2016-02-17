$(function() {
  $("ul.lista-recolectores li").click(function(e) {
    e.preventDefault();

    var recolector = $(this).attr("id");
    localStorage.setItem('recolector-seleccionado', recolector);
    location.href = "Acopio 10.html";
  });
});
