var alarm;
$(document).ready(function(){
  $("#image").hide();
 function update(){
  $("#time1").html(moment().format("H:mm:ss"));
  var currentTime=moment().format("HH:mm");
  console.log(currentTime);
  console.log(alarm);
  if(alarm===currentTime){
    $("#image").show();
    console.log("SAME!");
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
