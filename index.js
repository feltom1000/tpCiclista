let vueltas = [];
let duraciones = [];
let spliter = [];
let duracionesSpliteadas = [];
let numerosSpliteados = [];
let duracionEnSegundos = [];
let velocidadDeLAsVueltas = [];
let vueltaIngresadaParaVerInfo = [];
let vueltaMasRapidaEnSegundos
let indexVueltaMasRapida
let vueltaMasLentaEnSegundos
let indexVueltaMasLenta


function NuevaVuelta(nroVueltaValor, durationValor, circuitoKm, fecha){
    vueltas.push({nroVuelta: nroVueltaValor, duracion: durationValor, circuito: circuitoKm + "Km", fecha: fecha})
}

function velocidadMedia(velocidadMax, velocidadMin, distancia){
    return distancia / (velocidadMax - velocidadMin)
}

let fechaDeEntrenamiento = prompt("Ingrese la fecha de su entrenamiento")

let extensionKm = prompt("Ingresa la extension en Km tiene del circuito recorrido")
let extensionKmN = Number(extensionKm)

let cantidadDeVueltas = prompt("Ingresa la cantidad de vueltas que deseas registrar")
let cantidadDeVueltasN = Number(cantidadDeVueltas)


while(cantidadDeVueltasN > 0){
    let nroVuelta = prompt("Ingresa el Nro de la vuelta a ingresar")
    let nroVueltaN = Number(nroVuelta)
    let duration = prompt("Ingresa el tiempo de la vuelta")
    NuevaVuelta(nroVueltaN, duration, extensionKmN, fechaDeEntrenamiento)
    cantidadDeVueltasN -= 1
}

vueltas.sort(function(a,b){
    if(a.nroVuelta < b.nroVuelta){
        return -1
    }
    if(a.nroVuelta > b.nroVuelta){
        return 1
    }
    return 0
})

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

function convertirLasDuracionesASegundos(){
    for(let i = 0; i < numerosSpliteados.length; i += 2){
        duracionEnSegundos.push(numerosSpliteados[i] * 60)
    }
    let i = 0
    for(let j = 0; j < duracionEnSegundos.length; j++){
        duracionEnSegundos[j] += numerosSpliteados[i + 1]
        i += 2
    }
}

function vueltaMasRapida(){
    vueltaMasRapidaEnSegundos = Math.min.apply(null, duracionEnSegundos)
    indexVueltaMasRapida = duracionEnSegundos.indexOf(vueltaMasRapidaEnSegundos)
    console.log("Vuelta echa en menor tiempo: ")
    console.log(vueltas[indexVueltaMasRapida])
}

function vueltaMasLenta(){
    vueltaMasLentaEnSegundos = Math.max.apply(null, duracionEnSegundos)
    indexVueltaMasLenta = duracionEnSegundos.indexOf(vueltaMasLentaEnSegundos)
    console.log("Vuelta echa en mayor tiempo: ")
    console.log(vueltas[indexVueltaMasLenta])
}

function velocidadMedia(){
    let velocidadMediaEnMxS = ((extensionKmN * 1000) / (duracionEnSegundos[0] - duracionEnSegundos[duracionEnSegundos.length - 1]))
    console.log("Velocidad media: " + velocidadMediaEnMxS + "m/s")
}

for(let i = 0; i < duracionEnSegundos.length; i++){
    velocidadDeLAsVueltas.push((extensionKmN * 1000) / duracionEnSegundos[i])
} // Esto no funciona aun.

let vueltasPorArribaDeLaMedia = velocidadDeLAsVueltas.filter(function(velocidades){
    return velocidades > velocidadMediaEnMxS
})

function ingresarNumeroDeUnaVuelta(){
    let infoDeVueltas = prompt("Ingrese el numero de la vuelta cuya información desea ver")
    vueltaIngresadaParaVerInfo = vueltas.find(function(vuelta){
        return vuelta.nroVuelta == infoDeVueltas
    })
}


spliteador()
integerSplit()
convertirLasDuracionesASegundos()
console.log(vueltas)
vueltaMasRapida()
vueltaMasLenta()
velocidadMedia()
console.log(vueltasPorArribaDeLaMedia)
ingresarNumeroDeUnaVuelta()
console.log(vueltaIngresadaParaVerInfo)







