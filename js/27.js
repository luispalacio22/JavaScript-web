//Poo

//object literal
// const producto={
//     nombre: 'tablet',
//     precio: 300,
// }

//Object constructor 

function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
}
//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto=function(){
    return `El producto: ${this.nombre} tiene un precio de: ${this.precio}`;
}
const producto2=new Producto('Monitor curvo de 49 pulgadas',800);
console.log(producto2);
console.log(producto2.formatearProducto());


function Cliente(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}
const cliente1=new Cliente('Luis','Palacio');
console.log(cliente1);

function formatearProducto(producto){
    return(`El producto: ${producto.nombre} tiene un precio de: ${producto.precio}`);
}
console.log(formatearProducto(producto2));


