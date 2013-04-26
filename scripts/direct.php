<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $_POST["url"]);
curl_setopt($ch, CURLOPT_HEADER, false);

if ($_POST["headers"] && count($_POST["headers"]) > 0) {
    $headers = array();
    foreach ($_POST["headers"] as $k => $v) {
        $headers[] = $k . ': ' . $v;
    }

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
}

if ($_POST["output"]) {
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
}

$result = curl_exec($ch);

$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
header("HTTP/1.0 " . $status);

if ($_POST["output"]) {
    $dir = $_POST["dir"] && $_POST["dir"] == "DBDIR" ? "../db" : "../jembedocs";
    file_put_contents($dir . "/" . $_POST["output"], $result, FILE_APPEND | LOCK_EX);
}

curl_close($ch);

