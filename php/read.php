<?PHP

$handle = fopen("../guest/credits.txt", "r");

while (!feof($handle)) {
	$line = fgets($handle);
	print $line;
}

fclose($handle);

?>