<?php
ini_set('display_errors', 'off');



/*$data = array(

  'project_name' => 'project_name',
  'order_type' =>'order_type',
  'page_url' =>'page_url',
  'name' => 'name',
  'phone'     => 'phone',
  // 'email'     => $email,
  'date_visited' => date("d.m.Y"),
  'time_visited' => date("G:i:s"),
  'registration_type' =>'registration_type',
  'user_agent' =>'user_agent',
  'utm_source' =>'utm_source',
  'utm_campaign' =>'utm_campaign',
  'utm_medium' =>'utm_medium',
  'utm_term' =>'utm_term',
  'utm_content' =>'utm_content',
  'ref' =>'ref',
  'ip_address' =>'ip_address',
  'city' =>'city',
  'region' =>'region',
  'country' =>'country',
  'client_id' =>'client_id',
  'utmcsr' =>'utmcsr',
  'utmccn' =>'utmccn',
  'utmcmd' =>'utmcmd',
  'click_id' =>'click_id',
  'affilliate_id' =>'affilliate_id'
);
*/


 $db_host = "localhost";
$db_user = " "; // Логин БД
$db_password = " "; // Пароль БД
$database = " "; // БД

// Подключение к базе данных
$link = mysqli_connect($db_host, $db_user, $db_password, $database);
 
// Выборка базы
// mysql_select_db($database, $db);
 mysqli_set_charset($link,"SET NAMES 'utf8'");

mysqli_query($link, "SET NAMES 'utf8'"); 
mysqli_query($link, "SET CHARACTER SET 'utf8'");
mysqli_query($link, "SET SESSION collation_connection = 'utf8_general_ci'");


$fullName = explode(' ', $data['name'], 2);

// Построение SQL-оператора, отправка в базу
  $query = "INSERT INTO
            `leads`(
                      `first_name`,
                      `last_name`,
                      `email`,
                      `phone`,
                      `orderType`,
                      `date_visited`,
                      `time_visited`,
                      `page_url`,
                      `user_agent`,
                      `utm_source`,
                      `utm_campaign`,
                      `utm_medium`,
                      `utm_term`,
                      `utm_content`,
                      `ref`,
                      `ip_address`,
                      `city`,
                      `client_id`,
                      `utmcsr`,
                      `utmccn`,
                      `utmcmd`,
                      `affiliate_id`,
                      `click_id`
                      ) 
            VALUES('".$fullName[0]."',
                    '".(empty($fullName[1]) ? '-' : $fullName[1])."',
                    '".$data['email']."',
                    '".$data['phone']."',
                    '".$data['orderType']."',
                    '".$data['date_visited']."',
                    '".$data['time_visited']."',
                    '".$data['page_url']."',
                    '".$data['user_agent']."',
                    '".$data['utm_source']."',
                    '".$data['utm_campaign']."',
                    '".$data['utm_medium']."',
                    '".$data['utm_term']."',
                    '".$data['utm_content']."',
                    '".$data['ref']."',
                    '".$data['ip_address']."',
                    '".$data['city']."',
                    '".$data['client_id']."',
                    '".$data['utmcsr']."',
                    '".$data['utmccn']."',
                    '".$data['utmcmd']."',
                    '".$data['affiliate_id']."',
                    '".$data['click_id']."')";
// SQL-оператор выполняется
$result = mysqli_query($link,$query) or die (mysqli_connect_error());

// Закрытие соединения
mysqli_close();


die(json_encode([
  'status' => 'success'
]));

