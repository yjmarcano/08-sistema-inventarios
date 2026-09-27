const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let inventario = [
  { id: 1, nombre: 'Laptop HP', stock: 12, precio: 650.00 },
  { id: 2, nombre: 'Teclado Mecánico', stock: 25, precio: 45.50 }
];

app.get('/api/inventario', (req, res) => res.json(inventario));

app.post('/api/inventario', (req, res) => {
  const nuevoItem = { 
    id: Date.now(), 
    nombre: req.body.nombre, 
    stock: parseInt(req.body.stock), 
    precio: parseFloat(req.body.precio) 
  };
  inventario.push(nuevoItem);
  res.json(nuevoItem);
});

app.listen(PORT, () => console.log(`Inventarios en http://localhost:${PORT}`));