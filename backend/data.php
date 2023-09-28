<?php  
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");

header("Access-Control-Allow-Headers: X-Requested-With");


$discList = file_get_contents('./')

header('Content-Type: application/json');

echo json_encode($discList);