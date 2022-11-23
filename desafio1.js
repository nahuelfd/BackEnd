

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

    addProduct = (name, description, price, thumbnail, code, stock) => {
        const id = this.getNextID()

        const product = {
            id,
            name, 
            description, 
            price,
            thumbnail,
            code,
            stock,
        }

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
item.addProduct("Remera Classic", "Remera escote redondo", 100, './images/remera', 0, 10)
item.addProduct("Jean Telmo", "hot jean negro", 150, null, 1, 7)
console.log(item.products);
getProductsById()