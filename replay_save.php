<?php
header("Content-Type: application/json");
include "dp.php";

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);
echo $data -> pelaaja1;
echo $data -> pelaaja2;

?>