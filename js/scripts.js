// Business (or back-end) logic:


// User interface UI (or front-end) logic:

$(document).ready(function() {

  $("#quiz form").submit(function(event) {
    event.preventDefault();

<<<<<<< HEAD
    var name = $("input#name").val();
    var seasons = $("select#seasons").val();
    // var location = $("div#locations").val();
    // var activities = $("div#activities").val();
    // var preference = $("div#preference").val();
    // var importance = $("div#importance").val();
    if (seasons) {
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
        $(".name").append(surveyResults);
        $("#surveyresults").show();

      }
      }
      }
      }
      }
    }


    // $(".name").text(nameInput);
    // $("#capetown").show();
=======
    var nameInput = $("input#name").val();
    var seasons = $("#seasons").val();

    $(".name").text(nameInput);
    // if (seasons === )
    $("#capetown").show();
>>>>>>> 9c1602638b157f8babb23a8c77c57e2233096148

  });
});


    // if (seasons === 1) {
    //   $("#capetown").show();

      // var question1 = ($("#question1").val());
      // var question2 = ($("#question2").val());
      // var question3 = ($("#question3").val());
      // var question4 = ($("#question4").val());
      // var question5 = ($("#question5").val());



      // } else if (seasons === 2) {
      //   $("#borabora").show();

//     }
//   })
<<<<<<< HEAD
=======
// })
>>>>>>> 9c1602638b157f8babb23a8c77c57e2233096148
