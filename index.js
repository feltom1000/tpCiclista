let vueltas = [];
let duraciones = [];

function NuevaVuelta(nroVueltaValor, durationValor, circuitoKm){
    vueltas.push({nroVuelta: nroVueltaValor, duracion: durationValor, circuito: circuitoKm + "Km"})
}

function llenarArrayDeDuraciones(){
    vueltas.forEach(function(vuelta){
        duraciones.push(vuelta.duracion)
    })
}

function convertirAPuntosFlotantes(){
    for(i = 0; i < duraciones.length; i++){
        parseFloat(duraciones[i])
    }
}

function velocidadMedia(velocidadMax, velocidadMin, distancia){
    return distancia / (velocidadMax - velocidadMin)
}


let extensionKm = prompt("Ingresa la extension en Km tiene del circuito recorrido")
let extensionKmN = Number(extensionKm)

let cantidad = prompt("Ingresa la cantidad de vueltas que deseas registrar")
let cantidadN = Number(cantidad)


while(cantidadN > 0){
let nroVuelta = prompt("Ingresa el Nro de la vuelta a ingresar")
let nroVueltaN = Number(nroVuelta)

let duration = prompt("Ingresa el tiempo de la vuelta en formato MM,SS")


NuevaVuelta(nroVueltaN, duration, extensionKmN)
cantidadN -= 1
}

llenarArrayDeDuraciones();
convertirAPuntosFlotantes();
let vueltaMasRapida = Math.min(duraciones);
console.log(vueltaMasRapida);

let vueltaMasLenta = Math.max(duraciones);
console.log(vueltaMasLenta);

velocidadMedia(vueltaMasRapida, vueltaMasLenta, extensionKmN);




