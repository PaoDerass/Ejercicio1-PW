
function validarCampos() {
    const longitud = document.getElementById("longitud");
    const ancho = document.getElementById("ancho");
    let esValido = true;
  
    if (longitud.value === "" || longitud.value <= 0) {
        longitud.classList.add("is-invalid");
      esValido = false;
    } else {
        longitud.classList.remove("is-invalid");
    }
  
    if (ancho.value === "" || ancho.value <= 0) {
        ancho.classList.add("is-invalid");
      esValido = false;
    } else {
        ancho.classList.remove("is-invalid");
    }
  
    return esValido;
  }

  function calcularArea() {
    if (!validarCampos()) {
      return;
    }
  
    const longitud = parseFloat(document.getElementById("longitud").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const area = longitud * ancho;
  
    const res = document.getElementById("res");
    res.textContent = `El área del rectángulo es: ${area}`;
    res.classList.remove("d-none");
  }
  

  function limpiarCampos() {
    document.getElementById("longitud").value = "";
    document.getElementById("ancho").value = "";
    document.getElementById("res").classList.add("d-none");

    document.getElementById("longitud").classList.remove("is-invalid");
    document.getElementById("ancho").classList.remove("is-invalid");
  }
  