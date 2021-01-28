//This

const reservacion= {
    nombre:'Luis',
    apellido: 'Palacio',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su total a pagar es ${this.total} `);
    }
}

console.log(reservacion.nombre)
reservacion.informacion();