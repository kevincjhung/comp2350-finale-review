const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const dbConection = require('./databaseConnection');
const app = express();

const PORT = process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./databaseConnection'); // ../databaseConection
const functions = require('./databaseFunctions'); // ./databaseFunction

/* const app = require("../server"); */

const restaurant = require('./routes/items');
const review = require('./routes/review')

app.get('/', (req, res) => {
    functions.getAllItems((err, result) => {
        if (err) {
            console.error(err)
        } else {
            res.render('purchaseItems', { result })
        }
    })
})

app.post('/addItem', (req, res) => {
    console.log(req.body);
    
    functions.addItem(req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`result of item added ${result}`);
            res.redirect('/')
        }
    })
})

app.post('/deleteItem', (req, res) => {
    console.log(req.body);
    
    functions.addItem(req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`result of item added ${result}`);
            res.redirect('/')
        }
    })
})


app.post('/plusItem', (req, res) => {
    // console.log(req.body);
    
    // functions.addItem(req.body, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(`result of item added ${result}`);
    //         res.redirect('/')
    //     }
    // })
    res.redirect("/")
})

app.post('/minusItem', (req, res) => {
    // console.log(req.body);
    
    // functions.addItem(req.body, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(`result of item added ${result}`);
    //         res.redirect('/')
    //     }
    // })
    res.redirect("/")
})


app.use('/review', review);
app.use('/restaurant', restaurant);
app.listen(PORT, (err, result) => {
    console.log(`http://localhost:${PORT}/`);
})