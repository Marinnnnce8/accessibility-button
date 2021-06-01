<?php

/**
 * Code Indexer
 *
 * Copy into code-directory/index.php and add the project title
 *
 */

$title = "Accessibility Toolbar";

$curl = curl_init();
curl_setopt_array($curl, [
	CURLOPT_RETURNTRANSFER => 1,
	CURLOPT_URL => "https://nbpw.nbcom.co.uk/code/" . basename(__DIR__) . "?dirs=1",
]);

$page = curl_exec($curl);

curl_close($curl);

echo str_replace("<h1>Code", "<h1>$title - Code", $page);
