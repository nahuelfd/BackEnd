const express = require('express')
const ProductManager = require('./nuevo.js')

const app = express()
const manager = new ProductManager('products.json')

app.get('/', async (req, res) => {
    const products = await manager.getProducts()

    res.json(products)
})

app.get('/add', async (req, res) => {

    const body = req.query
    const obj = await manager.addProduct(body)

    res.json(obj)
})

app.get('/products', async (req, res) => {
    const body = req.query
    const productList = await manager.getProducts()
    
    const limit = parseInt(body.limit)
    if (limit !== NaN && limit > 0) {
        res.json(productList.slice(0, limit))
        return
    } 
    res.json(productList)
})

app.listen(8081)