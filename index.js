let vueltas = [];
let duraciones = [];
let spliter = [];
let duracionesSpliteadas = [];
let numerosSpliteados = [];
let minutos = [];
let segundos = [];
let indexDeMinutosIguales = []
let vueltaRapida
let vueltaLenta

function NuevaVuelta(nroVueltaValor, durationValor, circuitoKm){
    vueltas.push({nroVuelta: nroVueltaValor, duracion: durationValor, circuito: circuitoKm + "Km"})
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
    let duration = prompt("Ingresa el tiempo de la vuelta")
    NuevaVuelta(nroVueltaN, duration, extensionKmN)
    cantidadN -= 1
}

duraciones = vueltas.map(function(vuelta){
    return vuelta.duracion
})

function spliteador(){
    for(let i = 0; i < duraciones.length; i++){
        spliter = duraciones[i].split(":")
        for(let j = 0; j < spliter.length; j++){
            duracionesSpliteadas.push(spliter[j])
        }
    }
}

function integerSplit(){
    for (let i = 0; i < duracionesSpliteadas.length; i++){
        numerosSpliteados.push(parseInt(duracionesSpliteadas[i]))
    }
}

function minutosDeVueltas(){
    for(let i = 0; i < numerosSpliteados.length; i += 2){
        minutos.push(numerosSpliteados[i])
    }
}

function segundosDeVueltas(){
    for(let i = 1; i < numerosSpliteados.length; i += 2){
        segundos.push(numerosSpliteados[i])
    }
}

function vueltaMasRapida(){
    if (comprobadorDeTiemposIguales() == true){
        Math.min(segundos[indexDeMinutosIguales])
    }
}



function comprobadorDeTiemposIguales(){
    for (let i = 0; i < minutos.length; i++) {
        for (let j = 1; j < minutos.length; j++) {
            if (minutos[i] === minutos[j]) {
              if (segundos[i] === segundos[j]){
                  console.log(vueltas[i])
                  console.log(vueltas[j])
              } else {
                indexDeMinutosIguales.push(i)
                indexDeMinutosIguales.push(j)
                return true
              }
            } else {
                return false
            }
        }
    }
}

spliteador()
integerSplit()
minutosDeVueltas()
segundosDeVueltas()


// let vueltaMasRapida = Math.min((duraciones);
// console.log(vueltaMasRapida);

// let vueltaMasLenta = Math.max(duraciones);
// console.log(vueltaMasLenta);

// velocidadMedia(vueltaMasRapida, vueltaMasLenta, extensionKmN);




