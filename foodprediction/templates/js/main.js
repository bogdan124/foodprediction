


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
    content.load(page)
      .then(menu.close.bind(menu));

  };

  }

  function clicked_it_and_load(id_info,page_to_interact){
    console.log(id_info);
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




  function food_shop_page(id_page,name_page){
      for (var i = 0; i < json_data.length; i++) {
        json_data[i];
      }

  }
