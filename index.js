const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('¡Hola gente, mundo desde Express!');
});

app.get('/Adios', (req, res) => {
  //  res.send('Adios gente, mundo desde Express!');
    res.json({
        message: 'Adios gente, mundo desde Express!'});
});

app.post('/login' , (req, res) =>{
 //   res.send('Bienvenido a la pagina de login');
     res.json({
    message: 'LOgin correcto'
 });
});

app.post('/registro', (req, res) => {
 //   res.send('recibiendo datos');
 res.json({
    message: 'recibiendo datos'
 });
});




app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
