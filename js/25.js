

const carrito = [
    {nombre:'monitor 20 pulgadas', precio: 500},
    {nombre:'monitor 58 pulgadas', precio: 700},
    {nombre:'tablet', precio: 300},
    {nombre:'audifonos', precio: 200},
    {nombre:'teclado', precio: 200},
    {nombre:'celular', precio: 500},
    {nombre:'monitor 20 pulgadas', precio: 500},
];

//ForEach
carrito.forEach(producto => {
    console.log(producto)
    console.log(producto.nombre)
});

//map
carrito.map(producto => {
    console.log(producto)
    console.log(producto.nombre)
});// se usa para crear un nuevo 

const arreglo1=carrito.map(producto => producto.nombre);
console.log(arreglo1);