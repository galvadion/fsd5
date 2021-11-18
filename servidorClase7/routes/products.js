

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  // Devolvemos la lista de productos
  res.send({ success: true, products: products });
})

router.post('/', (req, res) => {
  const newProduct = req.body;

  if (newProduct.id && newProduct.name && newProduct.price) {
    products.push(newProduct);
    res.send({ success: true, products });
  }
  else {
    res.status(500);
    res.send({ success: false, error: 'Faltan datos' });
  }
});

// Acceder a un producto por ID
router.get('/:id', function(req, res) {
  const idParam = parseInt(req.params.id);
  const prod = products.find(p => p.id === idParam);
  if (prod) {
    return res.send({ success: true, product: prod });
  }
  else {
    return res.send(
      { 
        success: false, 
        message: `Producto con Id ${idParam} no encontrado` 
      }
    );
  }
});

// Actualizar a un producto por ID
router.put('/:id', (req, res) => {
  const idParam = parseInt(req.params.id);
  const newName = req.body.name;
  const newPrice = req.body.price;

  const prodIndex = products.findIndex(p => p.id === idParam);
  if (prodIndex >= 0) {

    products[prodIndex].name = newName;
    products[prodIndex].price = newPrice;

    return res.send({ success: true, product: products[prodIndex] });
  }
  else {
    return res.send(
      { 
        success: false, 
        message: `Producto con Id ${idParam} no encontrado` 
      }
    );
  }
});

// Borrar a un producto por ID
router.delete('/:id', (req, res) => {
  const idParam = parseInt(req.params.id);
 
  const prodIndex = products.findIndex(p => p.id === idParam);
  if (prodIndex >= 0) {

    products.splice(prodIndex, 1);

    return res.send({ success: true, products: products });
  }
  else {
    return res.send(
      { 
        success: false, 
        message: `Producto con Id ${req.params.id} no encontrado` 
      }
    );
  }
});

module.exports = router;

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200
  },
  {
    id: 2,
    name: 'Bread',
    price: 5
  },
  {
    id: 3,
    name: 'Mouse',
    price: 70
  },
  {
    id: 4,
    name: 'Headphones',
    price: 150
  }
];