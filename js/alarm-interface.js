var alarm;
$(document).ready(function(){
  $("#image").hide();
 function update(){
  $("#time1").text(moment().format("H:mm:ss"));
  var currentTime=moment().format("H:mm");
  if(alarm===currentTime){
    $("#image").show();
    }
    else{
      $("#image").hide();
    }
 }
 setInterval(update, 1000);

$("#ring").click(function(){
  alarm= $("#alarm").val();
  $("#set").text(alarm);



});


});
