<?php
include 'config.php';
include 'php_debug.php';


$GLOBALS['get_food_user']=$_POST['id_food_vegetable'];
$GLOBALS['get_user_id']=1;
$GLOBALS['select_data']=$_REQUEST["id_select"];
$GLOBALS['type_to_show_global']=$_REQUEST['type_to_show'];
/*
$GLOBALS['food_calories']=$_POST['food_calories'];
$GLOBALS['food_sodium_g']=$_POST['food_sodium_g'];
$GLOBALS['potassium_g']=$_POST['potassium_g'];
$GLOBALS['dietary_fiber_g']=$_POST['dietary_fiber_g'];
$GLOBALS['sugars_g']=$_POST['sugars_g'];
$GLOBALS['protein_g']=$_POST['protein_g'];
$GLOBALS['calcium_dv']=$_POST['calcium_dv'];
$GLOBALS['saturated_fat_dv']=$_POST['saturated_fat_dv'];
$GLOBALS['food_type']=$_POST['id_food_vegetable'];
*/




manipulate_movement_of_function();



function manipulate_movement_of_function(){
  if($GLOBALS['select_data']==1){
    insert_data_into_user_food();
  }
  if($GLOBALS['type_to_show_global']==1){
    select_data_from_user_food();
  }
  return 0;
}


function insert_data_into_user_food(){
  //type_of_food array with all types_of food
    mysql_query("INSERT INTO user_food VALUES('','".$GLOBALS['get_user_id']."','".$GLOBALS['get_food_user']."','','','','','','','','','','wreewq','1','1')");
    return 0;

}





function select_data_from_user_food(){

  $sel=mysql_query("SELECT * FROM user_food");


    while($row=mysql_fetch_assoc($sel)){
        $var=0;
        $var=$row['color'];
        if($var==1){
          echo   "<ons-list-item><div class='left'><ons-icon icon='md-face' class='list-item__icon'></ons-icon></div><div class='center'>".$row['food_name']."<div class='main_color_div color_red'></div></div></ons-list-item>";
        }else if($var==2){
          echo   "<ons-list-item><div class='left'><ons-icon icon='md-face' class='list-item__icon'></ons-icon></div><div class='center'>".$row['food_name']."<div class='main_color_div color_yellow'></div></div></ons-list-item>";
        }else if($var==3){
          echo   "<ons-list-item><div class='left'><ons-icon icon='md-face' class='list-item__icon'></ons-icon></div><div class='center'>".$row['food_name']."<div class='main_color_div color_green'></div></div></ons-list-item>";
        }
    }

  return 0;
}



 ?>
