const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


// Handlebars configuration
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Middleware servir contenido estatico
app.use( express.static( 'public'));

/*app.get('/', (req, res) => {
    res.send('Hello World!');
})*/

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jesus',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'jesus',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'jesus',
        titulo: 'Curso de node'
    });
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World!');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(8080, () => {
    console.log(`Example app listening on port ${port}`)
})