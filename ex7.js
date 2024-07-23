/**
 * DIFÍCIL: Nos pasan dos strings por parámetro. Queremos usar expresiones regulares para determinar si un string pertenece a otro (es decir es un substring)
 * 
 * Ayuda: https://lenguajejs.com/javascript/regexp/expresiones-regulares/#c%C3%B3mo-crear-una-regexp
 */

function isSubstring(s1, s2) {
	const regex = new RegExp(escapeRegExp(s2), 'i');
	return regex.test(s1);
}
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& significa toda la cadena coincidente
}
// Prueba 1: Substring presente en la cadena principal
// Explicación: "world" es un substring de "Hello, world!"
// Resultado esperado: true
console.log(isSubstring("Hello, world!", "world")); // true

// Prueba 2: Substring no presente en la cadena principal
// Explicación: "planet" no es un substring de "Hello, world!"
// Resultado esperado: false
console.log(isSubstring("Hello, world!", "planet")); // false

// Prueba 3: Substring igual a la cadena principal
// Explicación: "test" es igual a "test"
// Resultado esperado: true
console.log(isSubstring("test", "test")); // true

// Prueba 4: Cadena vacía como cadena principal
// Explicación: Una cadena vacía no puede contener otro substring no vacío
// Resultado esperado: false
console.log(isSubstring("", "text")); // false

// Prueba 5: Cadena vacía como cadena secundaria
// Explicación: Una cadena vacía siempre es un substring de otra cadena de texto
// Resultado esperado: true
console.log(isSubstring("text", "")); // true