
//Cookie Notification

$(document).ready(function(){
  $("#buttoncookie").click(function(){
    $("#cookie-notification").slideUp();
  });
});




//newsletter
$(window).scroll(function() {
   if ($(this).scrollTop() >= 1) {
      document.getElementById("newsletter").className = "slideUp";
   } 
});

$(document).ready(function(){
   $("#button-close").click(function(){
     $("#newsletter").slideUp();
   });
 });
