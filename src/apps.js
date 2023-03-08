import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();
const productManager = new ProductManager('./productos1.json')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Endponit general
app.get('/', (req, res)=>{
    res.send('Papelería Online')
})

// Endpoint todos los productos
app.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit;

        const products = await productManager.getProducts();

        if (limit) {
            const productsLimit = products.slice(0, limit);
            res.json(productsLimit);
        } else {
            res.json(products);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
});


// Endpoint producto por id
app.get('/products/:pid', async (req, res) => {
    try {
        const { pid } = req.params;

        const product = await productManager.getProductById(parseInt(pid));

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error' });
    }
});

app.listen(8080, ()=>{
    console.log('Escuchando al puerto 8080');
})