$(function() {
  var id = localStorage.getItem('solicitud-seleccionada-id');
  var fuente = localStorage.getItem('solicitud-seleccionada-fuente');
  var recolectorSeleccionado = localStorage.getItem('recolector-seleccionado');
  localStorage.setItem('recolector-seleccionado', null);

  var minuteSteps = ["00","15","30","45"];
  var hourSteps = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  var ampmSteps = ["AM", "PM"];

  $(".minuto").click(function(e) {
    e.preventDefault();
    $(this).blur();

    var currentMinuteStep = function() {
      var current = minuteSteps.shift();
      minuteSteps.push(current);
      return minuteSteps[0];
    }();

    $(".minuto").text(currentMinuteStep)
  });

  $(".hora").click(function(e) {
    e.preventDefault();
    $(this).blur();

    var currentHourStep = function() {
      var current = hourSteps.shift();
      hourSteps.push(current);
      return hourSteps[0];
    }();

    $(".hora").text(currentHourStep)
  });

  $(".ampm").click(function(e) {
    e.preventDefault();
    $(this).blur();

    var currentAmPmStep = function() {
      var current = ampmSteps.shift();
      ampmSteps.push(current);
      return ampmSteps[0];
    }();

    $(".ampm").text(currentAmPmStep);
  });

  var recolectores = {
      diego: "Diego Armando",
      vicente: "Don Vicente",
      frida: "Doña Frida"
  };

  $("a.btn.confirmar").click(function() {
    var data = {
      id: id,
      fuente: fuente,
      asignadaA: recolectorSeleccionado,
      recolector: recolectores[recolectorSeleccionado],
      hora: function() {
        return [
          $(".hora").text(),
          ":",
          $(".minuto").text(),
          $(".ampm").text()
        ].join(" ");
      }()
    };

    $.post('/recogidas', data, function() {
      location.href = "Acopio 11.html";
    });
  });

  $("a.btn.reasignar").click(function() {
    console.log("rechazar");
    location.href = "Acopio 9.html";
  });
});
