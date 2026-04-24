const express = require('express')
const app= express();
app.use(express.json()); 
·· · 
1et productos = [
    { id: 1, nombre: "Psp", precio:590, stock:10},
    { id: 2, nombre: "Teclado inalambrico", precio:250, stock:20}
];

app.get('/productos',(req, res)=> {
    res.json(productos);
});

app.listen(3001, ()=> {
    console.log('Servicios Productos ejecutandose en puerto 3001');
});
