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
            res.render('rest', { result })
        }
    })
})

/**
 * // router.get('/', (req, res) => {
//     functions.getAllRest((err, result) => {
//         if (err) {
           
//             console.log(err)
//         } else {
            
//             res.render('rest', { result })
//         }
//     })
    
// })
 */



app.use('/review', review);
app.use('/restaurant', restaurant);
app.listen(PORT, (err, result) => {
    console.log(`http://localhost:${PORT}/`);
})