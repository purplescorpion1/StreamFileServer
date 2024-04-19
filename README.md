# Stream File Server
A File Server To Host Your m3u Files Across Your Network

### How To Insstall
``` git clone https://github.com/purplescorpion1/StreamFileServer.git ``` <br>
``` cd StreamFileServer ``` <br>
``` npm install express axios ``` <br>

### How To Configure
Open the script in notepad++ 

``` const serverPort = 6025; // Set your desired port number ``` <br>
Change port number to what you want

``` const serverRoot = 'C:/foler/folder'; // Set the path to your server root directory ``` <br>
Change C:/foler/folder <br>
To where the script is running containing all your m3u files

``` const expectedUsername = 'username'; // Set your desired username ``` <br>
``` const expectedPassword = 'password'; // Set your desired password ``` <br>
Change the username and password fields to your user name and password leaving the ' in place

### How To Run
``` node server.js ```

### How to Access m3u in apps
You can either use localhost (if accessing on the machine the server is running on) or the ip address of the machine running the script for other devices <br>
<br>
To access files use the following url <br>
if username = 123 <br>
if password = abc <br>
<br>
``` http://ipaddress:portnumber/file.m3u?username=123&password=abc ```
