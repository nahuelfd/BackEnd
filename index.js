const ProductManager = require('./nuevo')

const manager = new ProductManager('products.json');

(async () => {
    await manager.addProduct({
        name: 'Telmo',
        description: 'remara cuello redondo',
        price: 120,
        thumbnail: "./images/telmo",
        stock: 10
    })

    await manager.addProduct({
        name: 'Francis',
        description: 'remera escote en v',
        price: 120,
        thumbnail: "./images/francis",
        stock: 25
    })

    console.log(await manager.getProducts());
})()




