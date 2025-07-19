function verificar() {
  const respuesta = document.getElementById("respuesta").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje");

  if (respuesta === "hijo" || respuesta === "hijos") {
    mensaje.style.color = "green";
    mensaje.textContent = "✅ ¡Respuesta correcta! (acá va tu mensaje especial)";
    // Cuando tengas el mensaje especial, reemplazamos esa línea.
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "❌ Esa no es la respuesta correcta, intenta de nuevo.";
  }
}
