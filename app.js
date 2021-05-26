

require ('dotenv').config ();
const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const path = require ('path');
const port = process.env.PORT || 80;
const hbs = require ('hbs');
const { RouteHandler } = require (path.resolve (__dirname, 'routes', 'RouteHandler'));

mongoose.Promise = global.Promise;
mongoose.connect (process.env.MONGO_DATABASE_URL, { useUnifiedTopology: true }).then (() => {
    console.log (`Connected Database ${process.env.MONGO_DATABASE_URL}`);
}).catch ((error) => {
    console.log (`Error: DB Connection ${error.message}`);
});

const app = express ();
app.use (bodyParser.json ({ limit: '10kb' }))
app.use (express.static (path.resolve (__dirname, 'public')));
app.set ('view engine', 'hbs');
hbs.registerPartials (path.resolve (__dirname, 'views', 'partials'));

app.use ('/api', RouteHandler);
app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})