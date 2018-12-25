


var json_data=[
[1,"Produse lactate si analogi"],
[2,"Grasimi si uleiuri si emulsii de grasimi si uleiuri"],
[3,"Inghetata"],
[4,"Fructe si legume"],
[5,"Produse de cofetarie"],
[6,"Cereale si produse pe baza de cereale"],
[7,"Produse de panificatie"],
[8,"Carne"],
[9,"Peste si produse de pescarie"],
[10,"Oua si produse din oua"],
[11,"Saruri, condimente, supe, sosuri, salate si produse proteice"],
[12,"Zaharuri, siropuri, miere si indulcitori de masa"],
[13,"Bauturi"],
[14,"Zaharuri, siropuri, miere si indulcitori de masa"]
];



call_onsen();


  function call_onsen(){
    window.fn = {};

  window.fn.open = function() {
    var menu = document.getElementById('menu');
    menu.open();
  };


  window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page).then(menu.close.bind(menu));

  };

  }

  function showModal(data_id,modal_open_type) {
    var modal = document.querySelector('ons-modal');
    //console.log(data_id);
    modal.show();
    if(modal_open_type==1){
      $.getJSON( "json/food_vegetable.json", function( data ) {

        $("#tit_modal").replaceWith(data[data_id].food_and_serving);

        $(".primary_content").append("Calories:"+data[data_id].calories+"</br>");
        $(".primary_content").append("Sodium:"+data[data_id].sodium_g+"</br>");
        $(".primary_content").append("Potassium:"+data[data_id].potassium_g+"</br>");
        $(".primary_content").append("Total carbohydrate:"+data[data_id].total_carbo_hydrate_g+"</br>");
        $(".primary_content").append("Sugars:"+data[data_id].sugars_g+"</br>");
        $(".primary_content").append("Protein:"+data[data_id].protein_g+"</br>");
        $(".primary_content").append("Vitamin A:"+data[data_id].vitamin_a_dv+"</br>");
        $(".primary_content").append("Vitamin C:"+data[data_id].vitamin_c_dv+"</br>");
        $(".primary_content").append("Calcium:"+data[data_id].calcium_dv+"</br>");
        $(".primary_content").append("Cholesterol:"+data[data_id].chole_sterol_dv+"</br>");

      });
    }
    $("#close_modal").click(function(){
      $(".primary_content").empty();
      modal.hide();

    });

  }

  function clicked_it_and_load(id_info,page_to_interact){
//    console.log(id_info);
    if(page_to_interact==1){
      fn.load('page.html');
      food_shop_page(id_info);
    }
    //else if(page_to_interact==2){


    //}

  }



  function show_data(){
    var json_data=[
    [1,"Produse lactate si analogi"],
    [2,"Grasimi si uleiuri si emulsii de grasimi si uleiuri"],
    [3,"Inghetata"],
    [4,"Fructe si legume"],
    [5,"Produse de cofetarie"],
    [6,"Cereale si produse pe baza de cereale"],
    [7,"Produse de panificatie"],
    [8,"Carne"],
    [9,"Peste si produse de pescarie"],
    [10,"Oua si produse din oua"],
    [11,"Saruri, condimente, supe, sosuri, salate si produse proteice"],
    [12,"Zaharuri, siropuri, miere si indulcitori de masa"],
    [13,"Bauturi"],
    [14,"Zaharuri, siropuri, miere si indulcitori de masa"]
    ];
    for( i=0;i<=json_data.length-1;i++){
    //  console.log(json_data[i]);

      $(".show_list_foods").append("<ons-list-item onclick='clicked_it_and_load("+json_data[i][0]+",1);' tappable><div class='left'><img class='list-item__thumbnail' src='https://placekitten.com/g/40/40'>  </div>  <div class='center'>  <span class='list-item__title'>"+json_data[i][1]+"</span><span class='list-item__subtitle'>On the Internet</span></div></ons-list-item>");

    }

  }




  function food_shop_page(id_page){//id_page,name_page
    if(id_page==4 || id_page==9){
      $.getJSON( "json/food_vegetable.json", function( data ) {

        if(id_page==4){
          for(i=0;i<=40;i++){
            $(".content_to_show_foods").append( "<ons-list-item onclick='showModal("+i+",1)' modifier='longdivider'>"+data[i].food_and_serving+"</ons-list-item>");

          }

        }else if(id_page==9){
          for(i=40;i<=60;i++){
            $(".content_to_show_foods").append( "<ons-list-item onclick='showModal("+i+",1)' modifier='longdivider'>"+data[i].food_and_serving+"</ons-list-item>");
          //  console.log(data);
          }

        }



          });
    }

    /*  for (var i = 0; i < json_data.length; i++) {
        json_data[i];
      }
      */

  }
