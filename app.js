const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let today = new Date();
    let currentDay = today.getDay();
    let day = " ";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Woesnday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            console.log('Error: current day is equal to:' + currentday)

    }
    res.render('list', { day: day });
});

app.listen(3000, function() {
    console.log('Server start on port 3000');
});