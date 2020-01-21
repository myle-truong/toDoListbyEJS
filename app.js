//Framwork
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// pass the post value into this variable
// let item = [];
let items = [];
let workItems = [];

//creat app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


//setup the route
app.get('/', function(req, res) {

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        listTitle: day,
        newListItems: items
    });
});

//Get data from the form
app.post('/', function(req, res) {
    console.log(req.body);
    let items = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');

    } else {
        items.push(item);
        res.redirect('/');
    }
});


app.get('/work', function(req, res) {
    let items = req.body.newItem;

    res.render('list', {
        listTitle: 'Work List',
        newListItems: workItems
    });
});

// app.post('/work', (req, res) => {
//     let item = req.body.newItem;

//     workItems.push(item);
//     res.redirect('/')
// });


app.listen(3000, function() {
    console.log('Server start on port 3000');
});