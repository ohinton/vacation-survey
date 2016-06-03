$(document).ready(function() {
  $("form#vacation-survey").submit(function(event) {
   var question1 = $("select#question1").val();
   var question2 = $("select#question2").val();
   var question3 = $("select#question3").val();
   var question4 = $("select#question4").val();
   var question5 = $("select#question5").val();

   if (question1 === "1" && question2 ==="1"){
     $('#destination1').show();
   } else if (question1 === "2" && question2 ==="2"){
     $('#destination2').show();
   } else if (question1 === "3" && question2 ==="3"){
     $('#destination3').show();
   }

  $("#blanks").submit(function(event) {
    var yourNameInput = $("input#yourName").val();

    $(".yourName").text(yourNameInput);

   event.preventDefault();
  });
});
});
