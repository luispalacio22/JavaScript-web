//metodos de propiedad

const reproductor={
    reproducir:function(id){
        console.log(`reproduciendo cancion con el ID: ${id}`)
    },
    pausar:function(){
        console.log('pausando...')
    },
    crearPlayList:function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList:function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.borrarCancion=function(id){
    console.log(`Eliinando la cancion numero: ${id}`)
}

console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Heavy metal');
reproductor.reproducirPlayList('Heavy metal');




