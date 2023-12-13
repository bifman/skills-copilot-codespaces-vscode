// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// import the comments.json file
const comments = require('./comments.json');
// import the cors module
const cors = require('cors');
// use cors
app.use(cors());
// create a route for the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// listen to the port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// run the server with node comments.js
// go to localhost:3000/comments
// you should see the comments.json file
// now we can use this data to create a frontend
