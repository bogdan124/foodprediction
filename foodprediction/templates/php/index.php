<?php

localhostconnect();
function localhostconnect(){
  $link = mysql_connect('localhost', 'root', '');
  if (!$link) {

    die('Could not connect: ' . mysql_error());
  }else{
    mysql_select_db($con,"test");
    echo 'Connected successfully';
  }
  return 0;
}





 ?>
