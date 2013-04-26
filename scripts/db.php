<?php
$db = new SQLite3('../db/' . $_POST["db"]);
$results = $db->query($_POST["query"]);
$data = array();
while ($row = $results->fetchArray(SQLITE3_ASSOC)){
    $data[] = $row;
}

print json_encode($data);
