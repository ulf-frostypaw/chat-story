function adjustImageContainer(img) {
  const container = img.parentElement;
  const aspectRatio = img.naturalWidth / img.naturalHeight;

  if (aspectRatio > 1) {
    // Imagen horizontal
    container.style.paddingBottom = `${(1 / aspectRatio) * 100}%`;
  } else {
    // Imagen vertical o cuadrada
    container.style.paddingBottom = `${
      (img.naturalHeight / img.naturalWidth) * 100
    }%`;
  }
}

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
