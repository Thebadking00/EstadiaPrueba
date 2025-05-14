const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});

app.post('/registro', (req, res) => {
    res.send('recibiendo datos');
});




app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
