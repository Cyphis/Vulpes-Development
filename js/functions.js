/* ##### Dock ##### */
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

/* ##### Dialogs ##### */

/* Welcome message */
$(function() {
	$("#welcome").dialog({
		autoOpen: true,
		modal: false,
		width: "350px",
	});
});

/* Terminal window */
$(function() {
	$("#terminal").dialog({
		autoOpen: false,
		modal: false,
		resizable: false,
		height: 500,
		width: 750
	});
});

jQuery(function($, undefined) {
	function greetings(term) {
    term.echo("Vulpes Terminal Emulator\n"+
				"Enter 'help' for a list of usable commands\n\n");
    }
	$("#js_term").terminal(function(command, term) {
		/* echo */
/*		if (command.substring(0,4) == "echo" && command.substring(4) == " " && command.substring(5)  !== "") {
			term.echo("asdf" + command.substring(4) + "asdf");
			dq = command.replace(/"/g, "");
			sq = dq.replace(/'/g, "");
			term.echo(sq);
		}
		else if (command.substring(0,4) == "echo" && command.substring(4) !== " ") {
			term.echo("0-4" + command.substring(0,4) + "4" + command.substring(4) + "4-4" + command.substring(4,4) + "end");
			term.echo("Usage: echo requires additional arguments.");
		}		
*/		

		/* echo */
		if (command == "echo") {
			term.echo("Usage: echo requires arguments");
		}
		else if (command.substr(0, 4) == "echo" && command.charAt(4) == " ") {
			var sliced = command.slice(5, command.length);
			dquote = sliced.replace(/"/g, "");
			squote = dquote.replace(/'/g, "");
			term.echo(squote);
		}
		/* help */
		else if (command.substr(0,4) == "help") {
			if (command.charAt(5) !== null && command.charAt(5) !== "") {
				if (command.slice(5, command.length) == "echo") {
					term.echo("Usage: echo [string] prints the string in the terminal.");
				}
				else if (command.slice(5, command.length) == "whoami") {
					term.echo("Usage: whoami prints current logged in user name.");
				}
				else if (command.slice(5, command.length) == "clear") {
					term.echo("Usage: clear removes all previously issued commands from screen.");
				}
				else if (command.slice(5, command.length) == "ip") {
					term.echo("Usage: ip prints your current IP address.");
				}
				else if (command.slice(5, command.length) == "ls") {
					term.echo("Usage: ls prints all files and directories in your current working directory.");
				}
				else {
					term.echo("Unknown command: '" + command.slice(5, command.length) + "'.\nEnter 'help' for a list of usable commands.");
				}
			}
			else {
				term.echo("Available commands are:\nhelp, echo, whoami, clear, ip, ls.\nHelp [command] for more information.");
			}
		}
		else if (command == "help ") {
			return false;
			term.echo("Usage: help does not accept arguments");
		}
		
		/* ip */
		else if (command == "ip") {
				$.get("getip.php", function(ip) {
					term.echo(ip);
				});
		}
		else if (command == "ip ") {
			term.echo("Usage: ip does not accept arguments");
		}

		/* ls */
		else if (command == "ls") {
			$.when($.get("file.php"),
				$.get("dir.php")).done(function(file, dir) {
				var files = [].concat(file[0]);
				var dirs = [].concat(dir[0]);
				term.echo("[[bg;#0147FA;#000000]" + dirs + "]" + files)
			});
		}
		else if (command == "ls ") {
			term.echo("Usage: ls does not accept arguments");
		}
		
		/* whoami */
		else if (command == "whoami") {
			term.echo("guest");
		}
		
		/* Not found */
		else {
			term.echo("Unknown Command: '" + command + "'");
		}
	}, {
		greetings: null,
		onInit: function(term) {
			greetings(term);
		},
		onClear: function(term) {
			greetings(term);
		},
		name: "js_term",
		width: "auto",
		height: 415,
		prompt: "guest@Vulpes: ",
	});
});

/* Mail window */
$(function() {
	$("#contact").dialog({
		autoOpen: false,
		modal: false,
		width: "400px"
	});
});

/* Text editor window */
$(function() {
	$("#editor").dialog({
		autoOpen: false,
		modal: false,
		resizable: false,
		width: "750px",
	});
});

/* File manager window */
$(function() {
	$("#manager").dialog({
		autoOpen: false,
		modal: false,
		buttons: {
			Ok: function() {
				$(this).dialog("close");
			}
		}
	});
});

/* Settings window */
$(function() {
	$("#settings").dialog({
		autoOpen: false,
		modal: false,
		buttons: {
			Ok: function() {
				$(this).dialog("close");
			}
		}
	});
});

/* Bio window */
$(function() {
	$("#about").dialog({
		autoOpen: false,
		modal: false,
	});
});

/* ##### Click funcions ##### */

/* Terminal Window */
$(document).ready(function() {
	$("#terminal_icon").on("click", function() {
		$("#terminal").dialog("open");
	});
});

/* Mail Window */
$(document).ready(function() {
	$("#contact_icon").on("click", function() {
		$("#contact").dialog("open");
	});
});

/* Text Edit Window */
$(document).ready(function() {
	$("#edit_icon").on("click", function() {
		$("#editor").dialog("open");
	});
});

/* File Manager */
$(document).ready(function() {
	$("#folder_icon").on("click", function() {
		$("#manager").dialog("open");
	});
});

/* Settings Window */
$(document).ready(function() {
	$("#settings_icon").on("click", function() {
		$("#settings").dialog("open");
	});
});

/* Bio */
$(document).ready(function() {
	$("#info_icon").on("click", function() {
		$("#about").dialog("open");
	});
});

/* This one is for the link on the welcome window */
$(document).ready(function() {
	$("#about_link").on("click", function() {
		$("#about").dialog("open");
		return false;
	});
});

$(function() {

	// Get the form.
	var form = $("#msg");

	// Get the messages div.
	var formMessages = $("#form-messages");

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: "POST",
			url: $(form).attr("action"),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the "success" class.
			$(formMessages).removeClass("error");
			$(formMessages).addClass("success");

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$("#name").val("");
			$("#email").val("");
			$("#message").val("");
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the "error" class.
			$(formMessages).removeClass("success");
			$(formMessages).addClass("error");

			// Set the message text.
			if (data.responseText !== "") {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text("Oops! An error occured and your message could not be sent.");
			}
		});

	});

});

tinymce.init({
	plugins: "autoresize",
	mode: "specific_textareas",
	editor_selector: "mce",
	autoresize_min_height: 300,
});
