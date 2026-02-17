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

// Función para usar la calculadora

function usarCalculadora() {
  let numero1 = Number(prompt("Ingresa el primer número:"));
  let numero2 = Number(prompt("Ingresa el segundo número:"));
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

  console.log("Resultado:", resultado);
  alert("Resultado: " + resultado);
}


// Función para mostrar números mayores que 20 en un array

function mostrarNumerosMayores() {
  let numeros = [10, 25, 30, 5, 15, 40];
  let limite = 20;

  console.log("Números mayores que 20:");

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 20) {
      console.log(numeros[i]);
    }
  }
}

// Función para mostrar información de un usuario

function mostrarUsuario() {
  let usuario = {
    nombre: "Paola",
    edad: 28,
    ciudad: "Santiago"
  };

  console.log(
    usuario.nombre +
    " tiene " +
    usuario.edad +
    " años y vive en " +
    usuario.ciudad
  );
}

// Función para mostrar la tabla de multiplicar de un número

function mostrarTabla() {
  let numeroTabla = Number(prompt("Ingresa un número para ver su tabla"));

  let contador = 1;

  while (contador <= 10) {
    console.log(
      numeroTabla + " x " + contador + " = " + (numeroTabla * contador)
    );
    contador++;
  }
}

// Función principal para iniciar la aplicación

function iniciarAplicacion() {
  console.log("Aplicación iniciada");

  usarCalculadora();
  mostrarNumerosMayores();
  mostrarUsuario();
  mostrarTabla();

  console.log("Aplicación finalizada");
}

iniciarAplicacion();
