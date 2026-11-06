const descomponer = document.getElementById("activarDescomponer");
const girar = document.getElementById("activarGirar");
const cambiarColor = document.getElementById("selectorColores");
const divCubo = document.getElementById("contenedor");

// 2. Escuchar el evento 'change'
descomponer.addEventListener("change", (event) => {
  if (event.target.checked) {
    divCubo.classList.add("descomponer");
  } else {
    divCubo.classList.remove("descomponer");
  }
});

girar.addEventListener("change", (event) => {
  if (event.target.checked) {
    divCubo.classList.add("girarcubo");
  } else {
    divCubo.classList.remove("girarcubo");
  }
});

cambiarColor.addEventListener("change", (event) => {
  Array.from(cambiarColor.options).forEach((elemento) => {
    divCubo.classList.remove(elemento.value);
  });
  divCubo.classList.add(event.target.value);
});
