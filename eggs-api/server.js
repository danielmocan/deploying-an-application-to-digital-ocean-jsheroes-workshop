const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

const dbUrl = "http://localhost:3004";

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 

app.get('/eggs', async (req, res ) => {
    const response = await fetch(`${dbUrl}/eggs`);
    const eggs = await response.json();
    console.log("EGGS ", eggs)
    res.send(eggs);
} )

app.post('/eggs', async (req, res) => {
    console.log( "req.body ", req.body );
    const response = await fetch(`${dbUrl}/eggs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
    });

    res.send(200);
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000)