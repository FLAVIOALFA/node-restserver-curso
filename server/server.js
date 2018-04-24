require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// pase application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})