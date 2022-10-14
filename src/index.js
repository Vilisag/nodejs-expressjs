const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const route = require('./routes');

const app = express();
const port = 3000;

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Log engine
app.use(morgan('combined'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Route
route(app);

app.listen(port, () =>
    console.log(`Your site is running at http://localhost:${port}`)
);
