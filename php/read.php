<?PHP
$cat = $_REQUEST['cat'];
if (file_exists("../guest/" . $cat)) {
	$file = new SPLFileObject("../guest/" . $cat);
	foreach($file as $line) {
	print $line;
	}
}
else {
	print "File not found: " . "'" . $cat . "'";
}
?>