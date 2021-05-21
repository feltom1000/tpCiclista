let vueltas = [];

function NuevaVuelta(nroVueltaValor, durationValor){
    vueltas.push({nroVuelta: nroVueltaValor, Duracion: durationValor})
}

let cantidad = prompt("Ingresa la cantidad de vueltas que deseas registrar")
let cantidadN = Number(cantidad)

while(cantidadN > 0){
let nroVuelta = prompt("Ingresa el Nro de la vuelta a ingresar")
let nroVueltaN = Number(nroVuelta)

let duration = prompt("Ingresa la duración de la vuelta")
let durationN = Number(duration)
NuevaVuelta(nroVuelta, duration)

cantidadN -= 1
}
