// Business (or back-end) logic:


// User interface UI (or front-end) logic:

$(document).ready(function() {

  $("#quiz form").submit(function(event) {
    event.preventDefault();


    var name = $("input#name").val();
    var seasons = $("select#seasons").val();
    var location = $("select#locations").val();
    var activities = $("select#activities").val();
    var preference = $("select#preference").val();
    var importance = $("select#importance").val();
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
        var surveyResults = $("input#name").val();
        // $(".name").text(surveyResults);
        $(".name").text(nameInput);
        $("#surveyresults").show();

      }
    })
      // }
      // }
      // }
    })


    // $(".name").text(nameInput);
    // $("#capetown").show();
    //
    // var nameInput = $("input#name").val();
    // var seasons = $("#seasons").val();
    //
    // $(".name").text(nameInput);
    // // if (seasons === )
    // $("#capetown").show();
