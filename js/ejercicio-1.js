let numeroMagico;

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;

  document.getElementById("juego").style.display = "block";

  document.querySelector("button").style.display = "none";
}

function verificarNumero() {
  const numeroUsuario = parseInt(
    document.getElementById("numeroUsuario").value
  );

  if (isNaN(numeroUsuario)) {
    alert("Por favor, ingresa un número válido.");
  } else {
    if (numeroUsuario === numeroMagico) {
      alert("¡Felicidades! Adivinaste el número mágico.");
      reiniciarJuego();
    } else {
      const mensaje =
        numeroUsuario < numeroMagico
          ? "El número es mayor."
          : "El número es menor.";
      alert(mensaje);
    }
  }
}

function reiniciarJuego() {
  comenzarJuego();

  document.getElementById("numeroUsuario").value = "";
}
