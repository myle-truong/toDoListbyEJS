const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();

let items = ["Shopping", "Studying", "Enjoying"];
let workItems = [];

//ejs documents: link: github
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
//embed public file 
app.use(express.static("public"));

app.get('/', (req, res) => {

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    res.render('list', { listTitle: day, newListItems: items });

});

app.post('/', function(req, res) {

    let item = req.body.newItem;

    items.push(item);

    res.redirect('/');
});


app.get('/work', (req, res) => {
    // res.render('list', { listTitle: 'Work List', newListItems: 'workItems' });
    res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.post('/work', (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/')
});


app.listen(3000, function() {
    console.log('Server start on port 3000');
});