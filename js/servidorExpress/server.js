const express = require('express');
const PORT = 8080;

const app = express();

app.get('/productos', (req,res) => {
    res.send('<h1 style="color:blue;">Lista de productos INICIO</h1>');
});
app.get('/', (req,res) => {
    res.send('<h1 style="color:blue;">Bienvenido al servidor Express</h1>');
});
app.get('/clientes', (req,res) => {
    //res.send('<h1 style="color:blue;">Lista de clientes info</h1>');
    //res.status(200).json({code:200, data:'Datos de respuesta'});
    res.json({code:200, data:'Datos de respuesta aaa'});
});
app.post('/productos', (req, res) => {
    res.send('<h1 style="color:green;">Agregar un producto</h1>');
});
app.put('/productos', (req, res) => {
    res.send('<h1 style="color:green;">Modifica un producto</h1>');
});
app.delete('/productos', (req, res) => {
    res.send('<h1 style="color:green;">Elimina un producto</h1>');
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`))
