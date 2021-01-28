//Arrays

const numeros=[10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const meses=new Array('enero','febrero','marzo','abril');
console.log(meses);
console.table(meses);

const arreglo=['hola', 1,2,true,'luis',{nombre:'luis', trabajo:'programador'},[1,2,3,4]]
console.log(arreglo);

//acceder a los valores de un arreglo
console.log(numeros[4])

//cantidad de elementos de un arreglo
console.log(meses.length);


numeros.forEach(function(numero){
    console.log(numero);
})

//modificar valores de arrays
//agregar
numeros[5]=60;
numeros.push(50);
numeros.push(50,60,70);//agrega al final
numeros.unshift(-1,-2)//agrega al inicio
console.table(numeros);

//eliminar
numeros.pop();//elimina el ultimo elemento
numeros.shift();//elimina el primer elemento

numeros.splice(2,1);//elimina por indice


//modificar
numeros[3]=20;

//Rest operator o spread operator

const nuevoArreglo=[...meses,'junio'];
console.log(nuevoArreglo);