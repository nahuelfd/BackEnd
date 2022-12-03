const fs = require('fs')

 
class ProductManager {
    
    constructor(filename) {
        this.filename = filename
        this.format = 'utf-8'
        this.products = []
    }

    getProducts = async () => { 
        return fs.promises.readFile(this.filename, this.format)
        .then(content => JSON.parse(content))
        .catch(e => {
            console.log('error', e);
            return []
        })
     }
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

    addProduct = async (name, description, price, thumbnail, code, stock) => {
        this.getProducts()
            .then(products => {
                products.push({name, description, price, thumbnail, code, stock})
                return products
            })
            .then(newProduct => fs.promises.writeFile(this.filename, JSON.stringify(newProduct)) )
        //const id = this.getNextID()
        //const code = this.getNextCode()

      //  const product = {
       //     id,
       //     name, 
      //      description, 
      //      price,
       //     thumbnail,
      //      code,
            //path: "./desafioentregable.js",
      //      stock,
      //  }

       // this.products.push(product)
       return
    }

}

getProductsById = (productId) => {
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
//console.log(item.products);
console.log("hlo");

async function run(){
    const prodM = new ProductManager('./products.json')
    await prodM.addProduct('vicente',null)
    console.log( await prodM.getProducts());
}

run()
