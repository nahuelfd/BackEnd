
class ProductManager {
    
    constructor() {
        this.products = []
    }

    getProducts = () => { return this.products }
    getNextID = () => {
        const count = this.products.length
        if (count == 0) return 1

        const lastProduct = this.products[count-1]
        const lastID = lastProduct.id
        const nextID = lastID + 1

        return nextID
        
    }

    

    getNextCode = () => {
        const count = this.products.length
        if (count == 0) return 1

        const lastProduct = this.products[count-1]
        const lastCode = lastProduct.code
        const nextCode = lastCode + 1

        return nextCode
        
    }

    addProduct = (product) => {
        const { title, description, price, thumbnail, code, stock} = product

        // Verificar que estan todos los campos y code > 0
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("falta uno o mas parametros");
            return
        }

        const products = this.getProducts()
        if (products.find(tmpProd => tmpProd.code === code)) {
           console.log('El code ya pertenece a un producto'); return 
        }
        
        const id = this.getNextID()
        product.id = id
        
        this.products.push(product)
    }

}

getProductsById = () => {
    const product = () => this.ProductManager.find(product => product.id === productId)
    if(product == undefined) {
        return null
    } else{
        return product
    }
}

const item = new ProductManager()
item.addProduct({title: "Remera Classic", description: "Remera escote redondo", price: 100, thumbnail: './images/remera', code: 5, stock: 10})
item.addProduct("Jean Telmo", "hot jean negro", 150, null, 1, 7)
item.addProduct({title: "Bermuda de jean", description: "short", price: 1220, thumbnail: './images/remera', code: 5, stock: 10})

console.log(item.products);
getProductsById()