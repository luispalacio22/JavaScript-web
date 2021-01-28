//objetos


const nombreProducto='Monitor 20 pulgadas';
const precio=300;
const disponible=true;

const producto={
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponile:true,
}

console.log(producto);

console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponile);

console.log(producto['precio']);

//agregar propiedades
producto.imagen='imagen.jpg';
console.log(producto);

//eliminar propiedades
delete producto.disponile;
console.log(producto);
 