const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Choose a port for your server

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to my backe;sfhnd server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
