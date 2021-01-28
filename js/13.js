

const producto={
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponile:true,
}

const medidas={
    peso:'1kg',
    medida:'1m',
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);
