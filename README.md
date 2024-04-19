# Stream File Server
A File Server To Host Your m3u Files Across Your Network

### How To Insstall
``` git clone https://github.com/purplescorpion1/StreamFileServer.git ```
``` cd StreamFileServer ```
``` npm install express axios ``` 

### How To Configure
Open the script in notepad++ 

``` const serverPort = 6025; // Set your desired port number ```
Change port number to what you want

``` const serverRoot = 'C:/foler/folder'; // Set the path to your server root directory ```
Change C:/foler/folder
To where the script is running containing all your m3u files

``` const expectedUsername = 'username'; // Set your desired username ```
``` const expectedPassword = 'password'; // Set your desired password ```
Change the username and password fields to your user name and password leaving the ' in place

### How To Run
``` node server.js ```

### How to Access m3u in apps
You can either use localhost (if accessing on the machine the server is running on) or the ip address of the machine running the script for other devices

To access files use the following url
if username = 123
if password = abc

``` http://ipaddress:portnumber/file.m3u?username=123&password=abc ```
