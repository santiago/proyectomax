$(function() {
  $("#input-plastico").TouchSpin({
    verticalbuttons: true
  });

  $("#input-vidrio").TouchSpin({
    verticalbuttons: true
  });

  $("#input-latas").TouchSpin({
    verticalbuttons: true
  });

  $("#input-papel").TouchSpin({
    verticalbuttons: true
  });

  var selectedMaterials = {};

  $("#lista-materiales .panel .panel-heading .panel-title .glyphicon-ok").click(function(e) {
    var material = $(this).parent().find("a").text()
    if(selectedMaterials[material]) {
      $(this).addClass("empty");
      selectedMaterials[material] = null;
    } else {
      $(this).removeClass("empty");
      selectedMaterials[material] = true;
    }
  });

  $(".boton-confirmar-recogida a.btn").click(function(e) {
    location.href = "Fuente 01.html"
  });
});
