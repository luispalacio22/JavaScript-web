//Async/await

function descargaNuevosClientes(){
    return new Promise(resolve=>{
        console.log('Descargando clientes...espere...');
        setTimeout(function(){
            resolve('Los clientes fueron descargados')
        },5000);
    });
}
function descargaUltimosPedidos(){
    return new Promise(resolve=>{
        console.log('Descargando pedidos...espere...');
        setTimeout(function(){
            resolve('Los pedidos fueron descargados')
        },3000);
    });
}

// setTimeout(function(){
//     console.log('set timeout...')
// },5000);

// setInterval(function(){
//     console.log('set timeout...')
// },5000);

async function app(){
    try{
        // const resultado= await descargaNuevosClientes();
        // const pedidos=await descargaUltimosPedidos();
        // console.log(resultado);{}
        // console.log(pedidos);
        const resultado= await Promise.all([descargaNuevosClientes(),descargaUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch(error){
        console.log(error)
    }
}

app();
console.log('Este codigo no se bloquea')