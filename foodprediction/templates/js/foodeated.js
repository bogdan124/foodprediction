function search(){


       var search = $("#search_from_food_array").val();
       var store_;
       var name_aliment;
        if(search != '')
          {

              $.getJSON( "json/food_vegetable.json", function( data1 ) {

                      for(i=0;i<=data1.length-1;i++){
                          name_aliment=data1[i].food_and_serving;

                          if(name_aliment.indexOf(search)!=-1)
                          {
                            console.log(data1[i].food_and_serving);
                            $(".append_search_results").append("<ons-list-item><div class='left'><ons-icon icon='md-face' class='list-item__icon'></ons-icon></div><div class='center'>"+data1[i].food_and_serving+"</div><div class='right'> <ons-button id='add_"+i+"' onclick='add_to_fav_food("+i+")'>Add</ons-button></div>  </ons-list-item>  ");
                          }

                      }

                });





          }
          else
          {
            $(".append_search_results").html("");

          }
  }

function  add_to_fav_food(i) {
  document.getElementById("add_"+i).disabled = true;
  $(".food_you_eat").prepend("<ons-list-item><div class='left'><ons-icon icon='md-face' class='list-item__icon'></ons-icon></div><div class='center'>sf</div>  </ons-list-item>  ");
  $.ajax({
    url: "php/index.php?id_select=1",
    data:{"id_food_vegetable":i},
    cache:false,
    success: function(result){

     $("#div1").html(result);
   }
 });


}
show_food_data();
function show_food_data(){
  $.ajax({
    url: "php/index.php?type_to_show=1",
    cache:false,
    success: function(result){
  $(".food_you_eat").append(result);
   }
 });

}
