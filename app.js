let amigos = [];

function agregarAmigos(nombre) {
    let input = document.getElementById("amigo"); // obtengo el input
    let valor = input.value; // obtengo lo que el usuario escribió

    if (valor.trim() == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(valor);
        limpiarValor();
        mostrarAmigos();
    }
}

function limpiarValor() {
   document.getElementById("amigo").value = "";
}


function mostrarAmigos() {
    // 1. Obtengo el elemento de la lista 
    let lista = document.getElementById("listaAmigos");
    // 2. Limpio la lista existente
    lista.innerHTML = "";
    // 3. Itero sobre el arreglo 'amigos'
    for (let i = 0; i < amigos.length; i++) {
        // 4. Creo un nuevo <li> por cada amigo
        let li = document.createElement("li");
        li.innerText = amigos[i];
        // Agrego el <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un nombre antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}


