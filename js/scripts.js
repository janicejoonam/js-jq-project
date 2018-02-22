// Business (or back-end) logic:


// User interface UI (or front-end) logic:

$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var seasons = $("#seasons").val();
    var nameInput = $("input#name").val();

    if (seasons === 1) {
      $("#capetown").show();

      // var question1 = ($("#question1").val());
      // var question2 = ($("#question2").val());
      // var question3 = ($("#question3").val());
      // var question4 = ($("#question4").val());
      // var question5 = ($("#question5").val());



      // } else if (seasons === 2) {
      //   $("#borabora").show();

    }
  })
})
