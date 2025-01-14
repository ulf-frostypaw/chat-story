// CONTINUA LA HISTORIA Y MANTIENE EL SCROLL ABAJO

const messageGroups = document.querySelectorAll(".message-group");
const continueButton = document.querySelector(".button");
let currentGroup = 0;

function showNextGroup() {
  if (currentGroup < messageGroups.length) {
    messageGroups[currentGroup].style.display = "flex";
    currentGroup++;

    if (currentGroup === messageGroups.length) {
        continueButton.disabled = true;
        //console.log("La historia ha terminado");
    }

    // Asegurarse de que el scroll se mantenga al final
    const chatContainer = document.querySelector(".chat");
    chatContainer.scrollTop = chatContainer.scrollHeight;

    if (currentGroup === messageGroups.length) {
        continueButton.disabled = true;
        continueButton.textContent = "La historia ha concluido";
        //console.log("La historia ha terminado");
    }
  }
}

continueButton.addEventListener("click", showNextGroup);

// Mostrar el primer grupo al cargar la página
showNextGroup();

// Inicializar el scroll al final
const chatContainer = document.querySelector(".chat");
chatContainer.scrollTop = chatContainer.scrollHeight;
