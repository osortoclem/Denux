function copiarCodigo(id) {
  const codigo = document.getElementById(id).textContent;
  navigator.clipboard.writeText(codigo).then(() => {
    const boton = document.querySelector(`button[onclick="copiarCodigo('${id}')"]`);
    const original = boton.textContent;
    boton.textContent = "¡Copiado!";
    setTimeout(() => boton.textContent = original, 2000);
  });
}