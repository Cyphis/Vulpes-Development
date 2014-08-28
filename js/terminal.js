$(function() {

	/* Welcome message */
	$("#welcome").dialog({
		autoOpen: true,
		modal: false,
		width: "350px",
	});
	
	/* Terminal window */
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
		if (command == "echo") {
			term.echo("Usage: echo requires arguments");
		}
		else if (command.substr(0, 4) == "echo" && command.charAt(4) == " ") {
			var sliced = command.slice(5, command.length);
			var dquote = sliced.replace(/"/g, "");
			var squote = dquote.replace(/'/g, "");
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
				else if (command.slice(5, command.length) == "pwd") {
					term.echo("Usage: pwd prints current working directory.");
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
			$.get("php/getip.php", function(ip) {
				term.echo(ip);
			});
		}
		
		else if (command == "pwd") {
			term.echo("/home/guest");
		}
		
		else if (command.substr(0,3) == "cat") {
			var file = command.slice(4, command.length);
			$.post("/php/read.php",
			{
				cat: file
			},
			function(data, textStatus)
			{
				term.echo(data);
			});
		}
		else if (command == "ip ") {
			term.echo("Usage: ip does not accept arguments");
		}

		/* ls */
		else if (command == "ls") {
			$.when($.get("php/file.php"),
				$.get("php/dir.php")).done(function(file, dir) {
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

/* DOM Loaded */
$(function() {
	
	/* Mail window */
	$("#contact").dialog({
		autoOpen: false,
		modal: false,
		width: "400px"
	});
	
	/* Text editor window */
	$("#editor").dialog({
		autoOpen: false,
		modal: false,
		resizable: false,
		width: "750px",
	});
	
	/* File manager window */
	$("#manager").dialog({
		autoOpen: false,
		modal: false,
		buttons: {
			Ok: function() {
				$(this).dialog("close");
			}
		}
	});
	
	/* Settings window */
	$("#settings").dialog({
		autoOpen: false,
		modal: false,
		buttons: {
			Ok: function() {
				$(this).dialog("close");
			}
		}
	});
	
	/* Bio window */
	$("#about").dialog({
		autoOpen: false,
		modal: false,
	});
	
	/* ##### Click funcions ##### */
	
	/* Terminal Window */
	$("#terminal_icon").on("click", function() {
		$("#terminal").dialog("open");
	});
	
	/* Mail Window */
	$("#contact_icon").on("click", function() {
		$("#contact").dialog("open");
	});
	
	/* Text Edit Window */
	$("#edit_icon").on("click", function() {
		$("#editor").dialog("open");
	});
	
	/* File Manager */
	$("#folder_icon").on("click", function() {
		$("#manager").dialog("open");
	});
	
	/* Settings Window */
	$("#settings_icon").on("click", function() {
		$("#settings").dialog("open");
	});
	
	/* Bio */
	$("#info_icon").on("click", function() {
		$("#about").dialog("open");
	});
	
	/* This one is for the link on the welcome window */
	$("#about_link").on("click", function() {
		$("#about").dialog("open");
		return false;
	});
	
});
