// Business (or back-end) logic:
asdfjkl;asldkfj

// User interface UI (or front-end) logic:

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var nameInput = $("input#name").val();

    $("#name").text(nameInput);

    if (question1 === 1 &&)

    event.preventDefault();
  });
});
