//PROGRAMACIÓN BACKEND
//DESAFÍO ENTREGABLE
//MARÍA ANAYA FERNÁDEZ
//COMISIÓN: 51125


import { existsSync, promises } from 'fs';

export default class ProductManager {

    //Método constructor
    constructor (path){
    this.path = path
    }

   //Método getProducts  
   getProducts = async () =>{
    if (existsSync(this.path)){
        const productsList= await promises.readFile(this.path,'utf-8')
        const productos = JSON.parse(productsList)
        return (productos)
    } else{
        console.log('Archivo creado')
        return []
    }
   }


   //Método addProductos
   addProducts = async (product) => {
    const productos = await this.getProducts()
    let id
    if (productos.length === 0 ){
        id = 1
    } else {
        id = productos[productos.length - 1].id + 1
    }
    const newProducts = {id, ... product}
    productos.push(newProducts)
    await promises.writeFile(this.path, JSON.stringify(productos))
    return newProducts
   }


      //Método getProductoById
      getProductById= async (id) => {
        const productos = await this.getProducts()
        const foundProduct = productos.find(p => p.id === id)
        if (foundProduct){
            return foundProduct
        } else {
            return 'No encontrado'
        }
  
      }

       //Método updateProduct
   
       updateProduct = async (id, obj) => {
        const productos = await this.getProducts()
        const foundProduct = productos.findIndex(p => p.id === id)
        if (foundProduct === -1){
            return 'Producto no encontrado'
        }
        const update = {... productos [foundProduct], ... obj}
        productos.splice(foundProduct, 1, update)
        await promises.writeFile(this.path, JSON.stringify(productos)) 
         console.log('Producto actualizado') 
       }
   
   
       //Método deleteProduct
   
       deleteProduct = async (id) => {
        const productos = this.getProducts()
        const arrayDelete = productos.filtar((p) => p.id !== id)
        await promises.writeFile(this.path, JSON.stringify(arrayDelete))
         return 'Producto eliminado'
        }

}

    const producto1 = {
        title: 'Producto Pureba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin Imagen',
        code: 'abc123',
        stock: 25
      }
      const producto2 = {
        title: 'Producto Pureba 2',
        description: 'Este es un producto prueba 2',
        price: 400,
        thumbnail: 'Sin Imagen',
        code: 'xyz987',
        stock: 25
      }

      const producto3 = {
        title: 'Producto Pureba 3',
        description: 'Este es un producto prueba 3',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'jlm567',
        stock: 30
      }

      const producto4 = {
        title: 'Calculadora',
        description: 'Este es un producto prueba 4',
        price: 900,
        thumbnail: 'Sin Imagen',
        code: 'jdh567',
        stock: 50
      }
    
      const producto5 = {
        title: 'Grapas',
        description: 'Este es un producto prueba 5',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'pls567',
        stock: 24
      }
    
      const producto6 = {
        title: 'Tijeras',
        description: 'Este es un producto prueba 6',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'uys567',
        stock: 46
      }
    
      const producto7 = {
        title: 'Colores',
        description: 'Este es un producto prueba 7',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'wts567',
        stock: 45
      }
    
      const producto8 = {
        title: 'Cartulina',
        description: 'Este es un producto prueba 8',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'tyc567',
        stock: 90
      }
    
      const producto9 = {
        title: 'Marcador',
        description: 'Este es un producto prueba 9',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'qaj567',
        stock: 45
      }
    
      const producto10 = {
        title: 'Clips',
        description: 'Este es un producto prueba 10',
        price: 800,
        thumbnail: 'Sin Imagen',
        code: 'xod567',
        stock: 20
      }
    


    async function test() {
        const shop = new ProductManager('productos1.json')
        //await shop.addProducts(producto1)
        //await shop.addProducts(producto2)
        //await shop.addProducts(producto3)
        //await shop.addProducts(producto4)
        //await shop.addProducts(producto5)
        //await shop.addProducts(producto6)
        //await shop.addProducts(producto7)
        //await shop.addProducts(producto8)
        //await shop.addProducts(producto9)
        //await shop.addProducts(producto10)
        console.log(await shop.getProducts())
        //console.log(await shop.getProductById(1))
        //await shop.updateProduct(1, {title:'Tijeras'})
        //await shop.deleteProduct(1)

    }

    test();




   









