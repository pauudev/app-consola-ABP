// Función para realizar operaciones aritméticas básicas

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir por cero";
  }
  return a / b;
}

// Validación simple de números
function esNumeroValido(valor) {
  return !isNaN(valor) && valor !== "";
}

// Función para usar la calculadora

function usarCalculadora() {
  let n1 = prompt("Ingresa el primer número:");
  let n2 = prompt("Ingresa el segundo número:");

  if (!esNumeroValido(n1) || !esNumeroValido(n2)) {
    alert("Debes ingresar números válidos.");
    return;
  }

  let numero1 = Number(n1);
  let numero2 = Number(n2);

  let operacion = prompt("Escribe: sumar, restar, multiplicar o dividir");

  let resultado;

  switch (operacion) {
    case "sumar":
      resultado = sumar(numero1, numero2);
      break;
    case "restar":
      resultado = restar(numero1, numero2);
      break;
    case "multiplicar":
      resultado = multiplicar(numero1, numero2);
      break;
    case "dividir":
      resultado = dividir(numero1, numero2);
      break;
    default:
      resultado = "Operación no válida";
  }

  console.log("===== CALCULADORA =====");
  console.log("Resultado:", resultado);
  alert("Resultado: " + resultado);
}

// Función para mostrar números mayores que 20 en un array

function mostrarNumerosMayores() {
  let numeros = [10, 25, 30, 5, 15, 40];
  let limite = 20;

  console.log("Números mayores que 20:");
  console.log("Array:", numeros);
  console.log("Números mayores que " + limite + ":");

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      console.log(numeros[i]);
    }
  }
  alert("Revisa la consola: se mostraron los números mayores que " + limite);
}

// Función para mostrar información de un usuario

function mostrarUsuario() {
  let usuario = {
    nombre: "Sofía",
    edad: 28,
    ciudad: "Rosario",
  };

  let mensaje =
    usuario.nombre +
    " tiene " +
    usuario.edad +
    " años y vive en " +
    usuario.ciudad;
  console.log(mensaje);
  alert(mensaje);
}

// Función para mostrar la tabla de multiplicar de un número

function mostrarTabla() {
  let n = prompt("Ingresa un número para ver su tabla:");
  if (!esNumeroValido(n)) {
    alert("Debes ingresar un número válido.");
    return;
  }

  let numeroTabla = Number(n);

  console.log("===== TABLA DE MULTIPLICAR =====");
  let contador = 1;

  while (contador <= 10) {
    console.log(
      numeroTabla + " x " + contador + " = " + numeroTabla * contador,
    );
    contador++;
  }

  alert("Tabla generada. Revisa la consola.");
}

// Función principal para iniciar la aplicación

function iniciarAplicacion() {
  console.log("Aplicación iniciada");

  let opcion;

  do {
    opcion = prompt(
      "MENÚ\n" +
      "1) Calculadora\n" +
      "2) Arreglo (mayores que 20)\n" +
      "3) Objeto (usuario)\n" +
      "4) Tabla de multiplicar\n" +
      "0) Salir\n\n" +
      "Elige una opción:"
    );

    switch (opcion) {
      case "1":
        usarCalculadora();
        break;
      case "2":
        mostrarNumerosMayores();
        break;
      case "3":
        mostrarUsuario();
        break;
      case "4":
        mostrarTabla();
        break;
      case "0":
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida. Intenta nuevamente.");
    }

  } while (opcion !== "0");

  console.log("Aplicación finalizada");
}

iniciarAplicacion();