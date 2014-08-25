<?php
foreach (glob("./guest/*.txt") as $filename) {
	$filename = str_replace("./guest/", "", $filename);
	echo $filename;
	echo " ";
}
?>