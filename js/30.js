//Promises

const usuarioAutenticado=new Promise((resolve,reject)=>{
    const auth =true;
    if (auth){
        resolve('Usuario autenticado');//El primise se cumple
    }else{
        reject('No se pudo iniciar sesion');//promise no se cumple
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then(function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)
    })

//en las promises existen 3 valores 
//pending: no se ha cumplido pero tampoco rechazado
//fulfilled: ya se cumplio
//reject: no se pudo cumplir 

