const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', { day: day });

});

app.listen(3000, function() {
    console.log('Server start on port 3000');
});