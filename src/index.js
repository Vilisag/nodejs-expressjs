const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const hbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;

// Connect DB
db.connect();

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
        helpers: {
            inc: a => a + 1,
        }
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Log engine
// app.use(morgan('combined'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// URL encode
app.use(express.urlencoded({extended: true}));

// Route
route(app);

app.listen(port, () =>
    console.log(`Your site is running at http://localhost:${port}`)
);
