let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego() {
    let seleccionarAtaque = document.getElementById("seleccionar-ataque")
    seleccionarAtaque.style.display = "none"

    let seleccionarReinicio = document.getElementById("reiniciar")
    seleccionarReinicio.style.display = "none"

    let botonMascotaJugador = document.getElementById("elige-mokepon")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonAgua = document.getElementById("agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonFuego = document.getElementById("fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonTierra = document.getElementById("tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReinicio = document.getElementById("reinicio")
    botonReinicio.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let seleccionarAtaque = document.getElementById("seleccionar-ataque")
    seleccionarAtaque.style.display = "block"

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMokeponJugador = document.getElementById("mokepon-jugador")

    if (inputHipodoge.checked) {
        spanMokeponJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMokeponJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMokeponJugador.innerHTML = "Ratigueya"
    } else {
        alert("Debes seleccionar un Mokepon")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let seleccionarMokepon = document.getElementById("seleccionar-mokepon")
    seleccionarMokepon.style.display = "none"

    let mokeponAleatorio = aleatoria(1, 3)
    let spanMokeponEnemigo = document.getElementById("mokepon-enemigo")

    if (mokeponAleatorio == 1) {
        spanMokeponEnemigo.innerHTML = "Hipodoge"
    } else if (mokeponAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = "Capipepo"
    } else if (mokeponAleatorio == 3) {
        spanMokeponEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatoria(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "FUEGO"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    resultadoJuego()
}

function resultadoJuego() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE🥴")
    } else if (
        ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" ||
        ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ||
        ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"
    ) {
        crearMensaje("GANASTE🤩")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE😡")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    finalizarJuego()
}

function finalizarJuego() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicidades, Ganaste!")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo lamento, Perdiste!")
    }
}

function crearMensajeFinal(resultadoFinal) {
    let seleccionarReinicio = document.getElementById("reiniciar")
    seleccionarReinicio.style.display = "block"

    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonAgua = document.getElementById("agua")
    botonAgua.disabled = true
    let botonFuego = document.getElementById("fuego")
    botonFuego.disabled = true
    let botonTierra = document.getElementById("tierra")
    botonTierra.disabled = true
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mokepon atacó con " + ataqueJugador + ", el mokepon enemigo atacó con " + ataqueEnemigo + ": " + resultado
    sectionMensajes.appendChild(parrafo)
}

function reiniciarJuego() {
    location.reload()
}

function aleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)