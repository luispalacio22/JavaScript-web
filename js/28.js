//clases

class Producto {
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto: ${this.nombre} tiene un precio de: ${this.precio}`;

    }

    retornarPrecio(){
        return this.precio;
    }
}
const producto2=new Producto('Monitor curvo de 49 pulgadas',800);

//Herencia
class Libro extends Producto {
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;

    }
}

const libro1=new Libro('Java',200,'1234567')

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto2.retornarPrecio());
console.log(libro1.formatearProducto());
 