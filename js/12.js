//objetos 

const producto={
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponile:true,
}

Object.freeze(producto); //no permite agregar ni eliminar propiedades ni modificar 
producto.imagen='imagen.jpg';
//.seal .freeze seal si deja modificar
console.log(Object.isFrozen(producto));
console.log(producto)