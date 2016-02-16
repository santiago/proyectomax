$(function() {
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
});
