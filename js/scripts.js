// Business (or back-end) logic:


// User interface UI (or front-end) logic:

$(document).ready(function() {

  $("#quiz form").submit(function(event) {
    event.preventDefault();

    var seasons = $("select#seasons").val();
    var location = $("select#locations").val();
    var activities = $("select#activities").val();
    var preference = $("select#preference").val();
    var importance = $("select#importance").val();
    var nameInput = $("input#name").val();
    $(".name").append(nameInput);
    
      if (seasons === "spring") {
        $("#capetown").show();
        $("#borabora").hide();
        $("#montreal").hide();
        $("#erfurt").hide();
      } else if (seasons === "summer") {
        $("#capetown").hide();
        $("#borabora").show();
        $("#montreal").hide();
        $("#erfurt").hide();
      } else if (seasons === "fall") {
        $("#capetown").hide();
        $("#borabora").hide();
        $("#montreal").show();
        $("#erfurt").hide();
      } else if (seasons === "winter") {
        $("#capetown").hide();
        $("#borabora").hide();
        $("#montreal").hide();
        $("#erfurt").show();
      } else {
        alert("Please make sure to answer all the questions!");

        $("#surveyresults").show();
      };

    })
  });
