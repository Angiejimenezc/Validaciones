const formBuscar = document.getElementById("mySearch");
const formLogin = document.getElementById("myFormId1");
const formRegistro = document.getElementById("myFormId");

//Función validación buscador
function validacionBusqueda() {
  var acumErrores = 0;
  formBuscar.classList.remove("is-invalid");

  var buscar = document.forms["mySearch"]["busqueda"];

  if (buscar.value == "") {
    buscar.classList.add("is-invalid");
    document.getElementById("errorBusqueda").textContent =
      "Introduce una criterio de búsqueda.";
    acumErrores++;
  } else if (buscar.value.length <= 3) {
    buscar.classList.add("is-invalid");
    document.getElementById("errorBusqueda").textContent =
      "El campo debe contener más de 3 caracteres";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

formBuscar.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
  },
  true
);

//Función validación Login

function validarLogin() {
  var acumErrores = 0;
  formLogin.classList.remove("is-invalid");

  var inputCorreo = document.forms["myForm1"]["email"];
  var inputPass = document.forms["myForm1"]["pwd"];

  if (inputCorreo.value == "") {
    inputCorreo.classList.add("is-invalid");
    document.getElementById("errorCorreoLogin").textContent =
      "Introduce por favor un correo electrónico.";
    acumErrores++;
  } else if (!validarCorreo(correo.value)) {
    inputCorreo.classList.add("is-invalid");
    document.getElementById("errorCorreoLogin").textContent =
      "El correo debe ser válido.";
    acumErrores++;
  }

  if (inputPass.value == "") {
    inputPass.classList.add("is-invalid");
    document.getElementById("errorPassLogin").textContent =
      "Introduce un Password.";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

formLogin.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
  },
  true
);

//Función Registro
function validacionRegistro() {
  var acumErrores = 0;

  formRegistro.classList.remove("is-invalid");

  var usuario = document.forms["myForm"]["user"];
  var provincia = document.forms["myForm"]["provincia"];
  var correo = document.forms["myForm"]["email"];
  var pass = document.forms["myForm"]["pwd"];
  var pass2 = document.forms["myForm"]["pwd2"];
  var privacidad = document.forms["myForm"]["gridCheck"];

  if (usuario.value == "") {
    usuario.classList.add("is-invalid");
    document.getElementById("errorUsuario").textContent =
      "Introduce por favor un nombre de usuario.";
    acumErrores++;
  }

  if (provincia.value == "") {
    provincia.classList.add("is-invalid");
    document.getElementById("errorProvincia").textContent =
      "Selecciona una provincia.";
    acumErrores++;
  }

  if (correo.value == "") {
    correo.classList.add("is-invalid");
    document.getElementById("errorCorreo").textContent =
      "Introduce por favor un correo electrónico.";
    acumErrores++;
  } else if (!validarCorreo(correo.value)) {
    correo.classList.add("is-invalid");
    document.getElementById("errorCorreo").textContent =
      "El correo deber ser válido.";
    acumErrores++;
  }

  if (pass.value == "") {
    pass.classList.add("is-invalid");
    document.getElementById("errorPass").textContent = "Introduce un Password.";
    acumErrores++;
  } else if (!validarPass(pass.value)) {
    pass.classList.add("is-invalid");
    document.getElementById("errorPass").textContent =
      "Por favor introduce 8 caracteres, una mayúscula y un número";
    acumErrores++;
  }
  if (pass2.value == "") {
    pass2.classList.add("is-invalid");
    document.getElementById("errorPass2").textContent =
      "Introduce nuevamente el Password.";
    acumErrores++;
  } else if (pass.value != pass2.value) {
    pass2.classList.add("is-invalid");
    document.getElementById("errorPass2").textContent =
      "Los Password no coinciden.";
    acumErrores++;
  }

  if (!privacidad.checked) {
    privacidad.classList.add("is-invalid");
    document.getElementById("errorCheck").textContent =
      "Por favor acepta las condiciones.";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

formRegistro.addEventListener(
  "blur",
  (event) => {
    console.log(event);
    if (event.target.value != "") event.target.classList.remove("is-invalid");
  },
  true
);

//Función validación correo electrónico
function validarCorreo(correo) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(correo) ? true : false;
}

// funcion validacion Pass

function validarPass(pass) {
  var regex1 = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\.\_\-]{8,}$/;
  return regex1.test(pass) ? true : false;
}
