const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola gente, mundo desde Express!');
});

app.get('/Adios', (req, res) => {
    res.send('Adios gente, mundo desde Express!');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
