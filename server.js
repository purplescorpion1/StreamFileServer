const express = require('express');
const axios = require('axios');

const serverPort = 6025; // Set your desired port number
const serverRoot = 'C:/folder/folder'; // Set the path to your server root directory
const expectedUsername = 'username'; // Set your desired username
const expectedPassword = 'password'; // Set your desired password

// Middleware to ignore requests for favicon.ico
function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).end();
    } else {
        next();
    }
}

// Custom authentication middleware
async function authenticate(req, res, next) {
    const { username, password } = req.query;
    const requestedFile = req.path;

    // Get the client's public IP address using ipify.org
    let publicIp;
    try {
        const ipifyResponse = await axios.get('https://api.ipify.org?format=json');
        publicIp = ipifyResponse.data.ip;
    } catch (error) {
        console.error('Error retrieving public IP address:', error);
        publicIp = 'Not available';
    }

    // Get the client's local IP address
    const localIp = req.connection.remoteAddress;

    // Log the connection attempt and requested file
    console.log(`Connection attempt from Public IP: ${publicIp}, Local IP: ${localIp} for file: ${requestedFile}`);

    // Check if username and password are provided
    if (!username || !password) {
        console.log('Unauthorized: Username and password are required.');
        return res.status(401).send('Unauthorized: Username and password are required.');
    }

    // Check if username and password are correct
    if (username === expectedUsername && password === expectedPassword) {
        console.log('Authentication successful.');
        next(); // Proceed to the next middleware
    } else {
        console.log('Unauthorized: Invalid username or password.');
        return res.status(401).send('Unauthorized: Invalid username or password.');
    }
}

// Create an Express app
const app = express();

// Ignore requests for favicon.ico
app.use(ignoreFavicon);

// Authenticate before serving files
app.use(authenticate);

// Serve files from the server root directory
app.use(express.static(serverRoot));

// Handle requests to the root path
app.get('/', (req, res) => {
    res.send('Server is running.');
});

// Start the server
app.listen(serverPort, () => {
    console.log(`Express server running at http://localhost:${serverPort}/`);
});
