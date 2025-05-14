const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('¡Hola gente, mundo desde Express!');
});

app.get('/Adios', (req, res) => {

    res.json({
        message: 'Adios gente, mundo desde Express!'});
});

app.post('/login' , (req, res) =>{

     res.json({
    message: 'LOgin correcto'
 });
});

app.post('/registro', (req, res) => {
     res.json({
    message: 'recibiendo datos'
 });
});

app.get('/api/food', (req, res) => {

    res.json({
        message: 'api de comida'});
});

app.get('/api/users', (req, res) => {

    res.json({
        message: 'Api de usuarios'});
});


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
