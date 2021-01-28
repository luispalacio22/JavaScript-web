//for 
for(let i=0;i<10;i++){
    console.log(i);
}

for(let i=1;i<10;i++){
    if(i%2==0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
}

const carrito = [
    {nombre:'monitor 20 pulgadas', precio: 500},
    {nombre:'monitor 58 pulgadas', precio: 700},
    {nombre:'tablet', precio: 300},
    {nombre:'audifonos', precio: 200},
    {nombre:'teclado', precio: 200},
    {nombre:'celular', precio: 500},
    {nombre:'monitor 20 pulgadas', precio: 500},
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}

//while
let i=0;
while(i<10){
    if(i%2==0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
    i++;
}

let j=0;
while(j<carrito.length){
    console.log(carrito[j].nombre);
    j++;
}

//Do while

let x=0;

do {
    console.log(x);

    x++; 
} while (x<10);