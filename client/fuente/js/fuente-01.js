$(function() {
  var selectedMaterials = {};

  $("ul.lista-materiales .glyphicon-ok").click(function(e) {
    var material = $(this).parent().find("p").text()
    if(selectedMaterials[material]) {
      $(this).addClass("empty");
      selectedMaterials[material] = null;
    } else {
      $(this).removeClass("empty");
      selectedMaterials[material] = true;
    }
  });

  $(".boton-recoger").click(function(e) {
    var data = {};
    $.post('/recogidas', data, function(res, status, xhr) {
      location.href = "/fuente/Fuente 03.html"
    });
  });
});
