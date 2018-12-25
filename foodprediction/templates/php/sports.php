<?php
include 'config.php';
include 'php_debug.php';

$GLOBALS["sports_var"]=$_REQUEST['show'];

main_redirect();

function main_redirect(){
  if($GLOBALS["sports_var"]==1){
    select_sports();
  }elseif ($GLOBALS["sports_var"]==2) {
    select_user_sports();
  }

}

function select_sports(){

  $row=mysql_query("SELECT * FROM sports LIMIT 8" );
  while($new_row=mysql_fetch_assoc($row)){
      echo"<ons-list-item>".$new_row['sport']."<ons-button class='button_class_add' id='add' onclick=''>Add</ons-button></div></ons-list-item>";
  }
}


function select_user_sports(){

  $row=mysql_query("SELECT * FROM user_sports,sports WHERE user_sports.sport_id=sports.id LIMIT 8");
  while ($new_row=mysql_fetch_assoc($row)) {
    echo"<ons-list-item>".$new_row['sport']."<ons-button class='button_class_add' id='add' onclick=''>DELETE</ons-button></div></ons-list-item>";
  }
}

?>
