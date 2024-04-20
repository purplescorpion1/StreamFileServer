# Stream File Server
A file server to host your m3u (or other files) files across your network with url password protection

### How To Install - Windows
If on Windows you have the option of just running the bundled version from the release section <br>
https://github.com/purplescorpion1/StreamFileServer/releases <br>

When you run the program it will ask you to enter <br>
The port number you wish to use <br>
The username you wish to use <br>
The password you wish to use <br>
The location where your files are - important to use forward slashes in the file path eg C:/folder/folder <br>
<br>
Alternatively you can use the source code as explained below

### How To Install via source code - All opperating systems that can run node
Requires node.js https://nodejs.org/en <br>
``` git clone https://github.com/purplescorpion1/StreamFileServer.git ``` <br>
``` cd StreamFileServer ``` <br>
``` npm install express axios ``` <br>

### How To Configure
Open the script in notepad++ 

``` const serverPort = 6025; // Set your desired port number ``` <br>
Change port number to what you want

``` const serverRoot = 'C:/folder/folder'; // Set the path to your server root directory ``` <br>
Change C:/folder/folder <br>
To where the script is running containing all your files you want host on the server

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

### How to Access m3u in apps whilst outside your network
Setup port forwarding on your router <br>
Set a public port to forward to local port the script is running on <br>
<br>
if username = 123 <br>
if password = abc <br>
<br>
``` http://publicipaddress:publicportnumber/file.m3u?username=123&password=abc ```


