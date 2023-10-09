const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("<h1>Demo deploy application to EC2 by CI/CD</h1><h4>Message: Success</h4><p>Version: 0.1</p>");
})

app.get('/teams', (req, res) => {
    res.send([
        {
            teamId: '1',
            price: "free"
        },
        {
            teamId: '2',
            price: "200.000"
        },
        {
            teamId: '3',
            price: "240.000"
        },
        {
            teamId: '4',
            price: "280.000"
        },
        {
            teamId: '5',
            price: "320.000"
        }
    ]);
})

app.listen(port, () => {
    console.log(`Application is up and listening to port: ${port}`);
})
