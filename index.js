function idun(){
    let id = Math.random().toString(30).substring(2);
    return id;
}


class Product {
    constructor(title, description,price,thumbnail,code,stock){
        this.id=idun();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    
     
}

class ProductManager {
    constructor(){
        this.products = [];
    }

    addProducts(title, description,price,thumbnail,code,stock){
        for (let i = 0; i < this.products.length; i++){
        if(this.products[i].code === code){
            console.log("error: el codigo ya existe");
            return;
         }
        }
        if( !title || !description||!price || !thumbnail || !code || !stock ){
            console.log("Error: Todos los campos son obligatorios");
            return;
        }
        this.products.push(new Product(title, description,price,thumbnail,code,stock))
        console.log("Producto agregado con éxito");    
    }
    getProducts(){
        return this.products;
    }
    getProductById(id){
        for (let i = 0; i < this.products.length; i++){
        if (this.products[i].id === id){
            return this.products[i];
        }
         }
        console.log("Not found");
    }
}


const newManager= new ProductManager();
console.log(newManager.getProducts());
console.log (newManager.addProducts('title', 'description',220,'nno hay','abc456',52));//agregando producto//
console.log(newManager.getProducts());
console.log (newManager.addProducts('title', 'description',220,'nno hay','abc456',52));//agregando mismo producto//
console.log (newManager.addProducts('title2', 'description',550,'nno hay','axcz456',55));//agregando otro producto//
console.log(newManager.getProducts());
console.log(newManager.getProductById(123));
