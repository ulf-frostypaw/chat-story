// ajusta el contenedor al tamaño de la imagen

function adjustImageContainer(img) {
  const container = img.parentElement;
  const aspectRatio = img.naturalWidth / img.naturalHeight;

  if (aspectRatio <= 1) {
    // Imagen vertical o cuadrada
    container.style.paddingBottom = `${
      (img.naturalHeight / img.naturalWidth) * 100
    }%`;
  } else {
    // Imagen horizontal
    container.style.paddingBottom = "0";
  }
}
