<?php  
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");

header("Access-Control-Allow-Headers: X-Requested-With");


$json_discList = file_get_contents('./data.json');

$discList = json_decode($json_discList);

header('Content-Type: application/json');

echo json_encode($discList);