const btnEnvio = document.getElementById("enviarCorreo");

btnEnvio.addEventListener("click", function (e) {
  e.preventDefault(); // Evita el envío predeterminado del formulario

  // Captura los valores de los campos
  const email = document.getElementById("mail").value;
  const nombre = document.getElementById("name").value;
  const mensaje = document.getElementById("message").value;

  // Verifica que los campos requeridos no estén vacíos
  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Genera el enlace mailto
  const mailtoLink = `mailto:karlacitlalivm@gmail.com?subject=Mensaje de ${nombre}&body=Nombre: ${nombre}%0AEmail: ${email}%0AMensaje: ${mensaje}`;

  // Redirige al enlace mailto
  window.location.href = mailtoLink;
});