//arrow functions

//Expresion de la funcion

const sumar2=(n1,n2)=>console.log(n1+n2);
sumar2(5,10);

const aprendiendo=(tecnologia)=>console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript')

///////////
const meses=['enero','febrero','marzo','abril'];

const carrito = [
    {nombre:'monitor 20 pulgadas', precio: 500},
    {nombre:'monitor 58 pulgadas', precio: 700},
    {nombre:'tablet', precio: 300},
    {nombre:'audifonos', precio: 200},
    {nombre:'teclado', precio: 200},
    {nombre:'celular', precio: 500},
    {nombre:'monitor 20 pulgadas', precio: 500},
];

//forEach------arrow function  15.js
meses.forEach(mes=>{
    if (mes=='marzo'){
        console.log('Marzo si existe');
    }
});

//includes arreglo plano
const resultado=meses.includes('marzo');
console.log(resultado);

//some ideal para arreglo de objetos
const resultado2 = carrito.some(producto=>{
    return producto.nombre=='celular'    
});
console.log(resultado2);

//Calcular total a pagar 
//.reduce
const resultado3=carrito.reduce(function(total,producto){
    return total+producto.precio
},0);

console.log(resultado3);

//filter  obtener elementos de un arreglo de objetos

const resultado4=carrito.filter(function(producto){
    return producto.precio>400
});

const resultado5=carrito.filter(function(producto){
    return producto.nombre=='celular'
});
console.log(resultado4);
console.log(resultado5);
