const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', { thatDay: day });

});

app.post('/', function(req, res) {
    let item = req.body.newItem;
    //console.log(item)
    res.render('list', { newListItem: item });

});


app.listen(3000, function() {
    console.log('Server start on port 3000');
});