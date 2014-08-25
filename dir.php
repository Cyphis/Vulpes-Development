<?php
$origin = "./guest/*";
echo ".   ..   ";
foreach(glob($origin, GLOB_ONLYDIR) as $dir) {
	$dir = str_replace("./guest/", "", $dir);
	echo $dir;
	echo " ";
}
?>
