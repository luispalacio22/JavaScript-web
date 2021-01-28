//funciones 

//declaracion de funcion

function sumar(){
    console.log(10+10)
};

sumar();

//Expresion de la funcion

const sumar2=function(){
    console.log(3+3)
};

sumar2();

//IIFE previene que no se lea en otro archivo 
(function(){
    console.log('esto es una funcion');
})();


