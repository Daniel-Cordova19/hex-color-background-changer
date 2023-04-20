// Implementar solución aquí
console.log("holi?");

/**
 * Intenta primero simplemente recuperar el elemento del DOM al  que debes aplicar el evento click
Comprueba que eres capaz de aplicarlo, haciendo una prueba simple, como por ejemplo, que al hacer clic, muestre un mensaje por la consola.
Después, haz que al hacer clic en el botón, el fondo del body cambie a cualquier color, el que tu quieras
 */

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector("#btn").addEventListener("click", function () {
  // Paso 5. Buscad por internet una función que os devuelve un color hexadecimal válido en CSS. Podéis probarla usando un console.log

  let hexColor = getRandomHexColor();
  // ¿Que debo modificar?
  document.body.style.backgroundColor = hexColor;
  // Quiero que el valor del color hexadecimal en el span con id="hex-value"
  // 1. Recuperar el nodo identificado con el id="hex-value"
  // 2. Actualizar la propiedad .textContent de dicho nodo con el valor hexadecimal
  document.querySelector("#hex-value").textContent = hexColor;
});
