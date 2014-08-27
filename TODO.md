TODO:
- "echo" command
	Add feature to echo content into file
       Handle quotations better, right now it strips all single and double quotes
        
- "cat" command
	Add arguments so it can read content from files, not just sample file
- "uname" command
	Create a fake uname output for fun ;)
- Editor
	Allow saving of files to /guest directory with custom filename (as long as it ends in  .txt)
    Use database to keep track of IPs creating files to cut down on spam,
    only one file per IP, no larger than x amount of bytes
    Allow returning IPs to edit their file 
- Mail
	Make it look more like a mail client
- Folder
	Hasn't been worked on yet
    Make it look like a typical file manager, and show all files
	in /guest
    Double-clicking on a file should open it in the 'Editor'
    Ability for owner of file to delete their file
- Settings
	Add some sort of control panel
	Features might include changing wallpaper (to be saved in 	database for each IP), set name that shows in terminal (to be saved per IP), more to come
- Add boot screen
- Add mobile version with mobile os view