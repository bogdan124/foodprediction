<?php
include 'php_debug.php';
function localhostconnect(){
  $link = mysql_connect('localhost', 'root', '');
  if (!$link) {

    die('Could not connect: ' . mysql_error());
  }else{
    mysql_select_db("foodprediction") or die("error_no_db");
    //echo 'Connected successfully';
  }
  return 0;
}

localhostconnect();
?>
