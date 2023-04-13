const modal = document.getElementById("modalon")
const container = document.getElementById("container")
const bot = document.getElementById("showbuton")
const input = document.getElementById("barraTexto")
const containerPublicacion = document.getElementById("containerPublicacion")
const blur = document.getElementById("efect")
const publish = document.getElementById("publish")
const modalcontainer = document.getElementById("Modal")
const boton1 = document.getElementById("boton1")

function mostrarModal() {
    modal.classList.remove("modaloff")
    modal.classList.add("modalon")
    blur.classList.remove("modaloff")
    blur.classList.add("efect")
}


function ocultarModal() {
    modal.classList.remove("modalon")
    modal.classList.add("modaloff")
    blur.classList.remove("efect")
    blur.classList.add("modaloff")
    input.value = ""
}

function publicar() {
    var publicacion = `
    <div class="publicacion">
        <div class="barraSuperior">
            <div class="imagen"><img src="user.png" alt="" width="60px"></div>
            <p class="th">Thomas Medina</p>
        </div>
        <div class="value">
        <p>${input.value}</p>
        </div>
    </div>
    `
    containerPublicacion.innerHTML += publicacion

    ocultarModal()
}

function botonsexy() {
    if (input.value) {
        publish.classList.add("boton4")
        publish.classList.remove("boton4on")
    } else {
        publish.classList.remove("boton4")
        publish.classList.add("boton4on")
    }
}

