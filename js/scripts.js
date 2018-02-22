// Business (or back-end) logic:


// User interface UI (or front-end) logic:

$(document).ready(function() {

  $("#quiz form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var seasons = $("#seasons").val();

    $(".name").text(nameInput);
    // if (seasons === )
    $("#capetown").show();

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
// })
