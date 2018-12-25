show_sport_data();
function show_sport_data(){
  $.ajax({
    url: "php/sports.php?show=1",
    cache:false,
    success: function(result){
      $(".our_sports").append(result);
   }
 });

}
show_sport_user_data();
function show_sport_user_data(){
  $.ajax({
    url: "php/sports.php?show=2",
    cache:false,
    success: function(result){
      $(".your_sports").append(result);
   }
 });

}
