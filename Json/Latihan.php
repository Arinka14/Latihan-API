<?php

// $mahasiswa = [
//     [ 
//         "nama" => "shandika galih",
//         "nrp" => "0987654321",
//         "email" => "shandika@gmail.com"
//     ],
//     [ 
//         "nama" => "galih",
//         "nrp" => "623456789009",
//         "email" => "galih@gmail.com"
//     ],
// ];


$dbh = new PDD('mysql:host=localhost:dbname=phpdasar','root',
'root')
$db = $db->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->dba_fetch)PDD::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>
 