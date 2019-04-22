<?php
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
 

   echo $_GET['name']." ";

   // if(!empty($_GET['name']) and !empty($_GET['email'] !empty($_GET['telephone'])) 
   // and !empty($_GET['message'])){
      $name = trim(strip_tags($_GET['name']));
      $phone = trim(strip_tags($_GET['telephone']));
      $mail = trim(strip_tags($_GET['email']));
      $message = trim(strip_tags($_GET['message']));
 
      mail('isakura313@gmail.com', 'Cообщение с вебсайта nchizhikova.ru', 
      'Кто вам пишет '.$name.'<br />Телефончик: '.$phone.'<br />Его почта '.$mail.'<br />
      Сообщение пользователя '.$message,"Content-type:text/html;charset=utf-8");
 
      echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в 
      ближайшее время<Br> $back";
 
      exit;
   // } 
   // else{
   //    echo "you fuck up";
   // }
?>