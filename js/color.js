function getAccentColor(imgElement, callback) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Usar un canvas muy pequeño para obtener un color promedio
  canvas.width = 1;
  canvas.height = 1;

  const img = new Image();
  img.crossOrigin = "Anonymous"; // Esto puede ayudar con algunas imágenes cross-origin
  img.src = imgElement.src;

  img.onload = function () {
    // Dibujar la imagen escalada en el canvas de 1x1
    ctx.drawImage(img, 0, 0, 1, 1);

    // Obtener los datos de color del único píxel
    const imageData = ctx.getImageData(0, 0, 1, 1);
    const [r, g, b] = imageData.data;

    // Convertir a formato hexadecimal
    const hexColor =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    callback(hexColor);
  };

  img.onerror = function () {
    console.error("Error al cargar la imagen");
    callback(null);
  };
}

// uso
const img = document.querySelector("img");
getAccentColor(img, function (color) {
  if (color) {
    document.querySelector(".color").textContent = color;

    // se asigna el color al fondo de la página
    document.body.style.backgroundColor = color;
  } else {
    console.log("No se pudo obtener el color de acento");
  }
});
