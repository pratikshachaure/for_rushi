const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Custom-Header', 'CustomHeaderValue');

    res.json([
        {
            a: "b",
            c: "d",
            e: "f",
            g: "h"
        }
    ]);
});

app.post('/api', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Custom-Header', 'CustomHeaderValue');

     
    console.log('Form data:', req.body);

    res.json({ message: "Data received successfully", data: req.body });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
