//objetos

const producto={
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponile:true,
}

//obtener valores de un objeto
const precioProducto=producto.precio;
//const nombreProducto=producto.nombreProducto;

//Forma anterior
console.log(precioProducto);
//console.log(nombreProducto);

//Destructuring
const {precio}=producto;
const {nombreProducto}=producto;
//const {precio, nombreProducto}=producto;
console.log(precio);
console.log(nombreProducto);