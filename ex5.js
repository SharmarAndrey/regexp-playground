/** 
 * 1. Explora como funciona el método .match de los strings: https://javascript.info/regexp-methods#str-match-regexp
 * 2. Modifica el cuerpo de la función para extraer todos los colores hexadecimales presentes en el string. Para simplificar, los colroes hexadecimales siempre tendrán 6 carácteres pero pueden ser tanto en mayúsculas como en minúsculas
 *  
 * * @param {string} s 
 * @returns {Array<string>} Devuelve un array con los colores hexadecimales encontrados
 */


function extractHexColors(s) {
	/** Modifica solamente el cuerpo de la función */
	const regex = /#([A-F0-9]{6})gi/;
	const matches = s.match(regex);
	return matches || [];
}

// Juegos de pruebas


// Prueba 1: Cadena con un color hexadecimal 
// Explicación: "#123123 is a short form for #112233."
// Resultado esperado: ["#123"]
console.log(extractHexColors("#0041C2 is a blue called 'Blueberry Blue' ")); // ["#123"]

// Prueba 1: Cadena con colores hexadecimales
// Explicación: "#ff5733 is a bright color and #33ff57 is a green color."
// Resultado esperado: ["#ff5733", "#33ff57"]
console.log(extractHexColors("#ff5733 is a bright color and #33FF57 is a green color.")); // ["#ff5733", "#33FF57"]


// Prueba 3: Cadena sin colores hexadecimales
// Explicación: "This string has no hex colors."
// Resultado esperado: []
console.log(extractHexColors("This string has no hex colors.")); // []
