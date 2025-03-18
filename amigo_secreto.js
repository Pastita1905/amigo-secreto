let listaNombres = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".input-name").addEventListener("keypress", (e) => {
        if (e.key === "Enter") agregarNombre();
    });
});

function agregarNombre() {
    let campoNombre = document.querySelector(".input-name");
    let nuevoNombre = campoNombre.value.trim();

    if (nuevoNombre) {
        listaNombres.push(nuevoNombre);
        mostrarLista();
        limpiarInput();
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function limpiarInput() {
    document.querySelector(".input-name").value = "";
}

function mostrarLista() {
    let contenedorLista = document.getElementById("listaAmigos");
    contenedorLista.innerHTML = "";

    listaNombres.forEach(nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre;
        contenedorLista.appendChild(elemento);
    });
}

function seleccionarAmigo() {
    if (listaNombres.length < 2) {
        alert("Se necesitan al menos dos nombres para realizar el sorteo.");
        return;
    }

    let elegido = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    document.getElementById("resultado").innerHTML = `<li>Amigo Secreto: <strong>${elegido}</strong> 🎁</li>`;
    
    listaNombres.length = 0;
    mostrarLista();
}
