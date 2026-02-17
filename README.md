# Aplicación de Consola – Fundamentos de JavaScript  
Proyecto Front-End desarrollado como **Proyecto Módulo #4 | ABP**.

Esta aplicación fue creada con el objetivo de practicar los conceptos fundamentales del lenguaje JavaScript mediante una implementación funcional ejecutada en la consola del navegador.

La aplicación permite realizar operaciones matemáticas básicas, trabajar con arreglos y objetos, e implementar estructuras condicionales y de repetición.

---

## Tabla de contenidos

- [Objetivos](#objetivos)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Cómo ejecutar](#cómo-ejecutar)
- [Notas](#notas)

---

## Objetivos

- Aplicar la sintaxis básica de JavaScript.
- Implementar funciones para modularizar el código.
- Utilizar estructuras condicionales (`if / else`).
- Implementar estructuras de repetición (`for`, `while`).
- Trabajar con arreglos y objetos.
- Ejecutar una aplicación interactiva mediante `prompt`, `alert` y `console.log`.

---

## Tecnologías

- JavaScript (ES6 básico)
- HTML5 (estructura mínima para ejecutar el script)
- Consola del navegador (DevTools)

---

## Estructura del Proyecto

```text
/
├── index.html        # Archivo principal para ejecutar la aplicación
├── app.js            # Lógica completa de la aplicación en consola
├── screenshots/      # Capturas de pantalla del funcionamiento
└── README.md         # Documentación del proyecto
```
---

## Funcionalidades

1. Calculadora básica

Permite al usuario ingresar dos números mediante prompt y elegir una operación:

Suma

Resta

Multiplicación

División (incluye validación para evitar división por cero)

Las operaciones están separadas en funciones individuales para mantener el código modular y organizado.

2. Trabajo con Arreglos

Se utiliza un arreglo predefinido de números:

[10, 25, 30, 5, 15, 40]


Mediante un bucle for, se recorren los valores y se muestran en consola aquellos mayores a 20.

3. Uso de Objetos

Se implementa un objeto usuario con las siguientes propiedades:

nombre

edad

ciudad

La información del usuario se muestra en consola utilizando concatenación de strings.

4. Tabla de Multiplicar

El usuario ingresa un número y se genera su tabla de multiplicar del 1 al 10 utilizando un bucle while.

---

## Cómo ejecutar

1. Descargar o clonar el repositorio.
2. Abrir el archivo index.html en el navegador.
3. Abrir la consola del navegador (F12 → Console).
4. Seguir las instrucciones que aparecen mediante prompt.

---

## Notas

- El proyecto fue desarrollado con enfoque en fundamentos, priorizando claridad y comprensión del código.

- Se evitó el uso de librerías externas para reforzar el aprendizaje de JavaScript puro.

- Se implementó modularización mediante funciones para mejorar la organización del código.

- Todas las funcionalidades solicitadas en la consigna fueron implementadas y probadas en la consola del navegador.