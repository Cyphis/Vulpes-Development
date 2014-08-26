jQuery(document).ready(function($) {
	var onDockSleep = function() {
			var dock = $(".jqDock", this);
			dock.animate({
				top: -1 * (dock.height()),
				opacity: 0
			}, 500);
			$(this).one("mousemove", function() {
				dock.stop().animate({
					opacity: 1,
					top: 0
				}, 500);
				$(this).trigger("docknudge");
				return false;
			});
			return false;
		},
		dockOptions = {
			align: "top",
			labels: false,
			idle: 1500,
			onSleep: onDockSleep
		};
	$("#menu").jqDock(dockOptions);
});