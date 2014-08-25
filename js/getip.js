window.onload = function() {
	$.get("getip.php", function(ip) {
		return ip;
	});
}