$(document).ready(function() {
  $("form#vacation-survey").submit(function(event) {
   var question1 = $("select#question1").val();
   var question2 = $("select#question2").val();
   var question3 = $("select#question3").val();
   var question4 = $("select#question4").val();
   var question5 = $("select#question5").val();

   if (question1 === "a"){
     $('#destination1').show();
   } else if (question1 === "b"){
     $('#destination2').show();
   } else if (question1 === "c"){
     $('#destination3').show();
   }

  $("#blanks").submit(function(event) {
    var yourNameInput = $("input#yourName").val();

    $(".yourName").text(yourNameInput);

   event.preventDefault();
  });
});
});
