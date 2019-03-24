
$(document).ready(function(){
  $("#buttoncookie").click(function(){
    $("#cookie-notification").slideUp();
  });
});

$(window).scroll(function() {
   if ($(this).scrollTop() >= 1) {
      document.getElementById("newsletter").className = "slideUp";
   } 
});

$(document).ready(function(){
   $("#buttonnews").click(function(){
     $("#newsletter").slideUp();
   });
 });

var notif = document.getElementById('newsletter');
var notifHidden = localStorage.getItem('hidden') ? localStorage.getItem('hidden') : false;
var timePast = localStorage.getItem('newsletter');
var intervalDate;

let checkDate = () => {
  let timeNow = new Date().getTime();
  let diff = Math.round((timeNow - timePast) / 60000);
  if(notifHidden && diff >= 1){
    notif.style.display="block";
    localStorage.setItem('hidden',false);
    clearInterval(intervalDate);
  }
}

let intervalCheck = () =>{
  clearInterval(intervalDate);
  intervalDate = setInterval(() => {
    checkDate();
  }, 1000);
}

let checkNotif = () => {
  if(notifHidden){
    notif.style.display="none";
    intervalCheck();
  }
}

checkNotif();

notif.onclick = () => {
  let timeNow = new Date().getTime();
  notif.style.display="none";
  notifHidden = true;
  timePast = timeNow;
  localStorage.setItem('hidden',true);
  localStorage.setItem('newsletter',timeNow);
  intervalCheck();
}

