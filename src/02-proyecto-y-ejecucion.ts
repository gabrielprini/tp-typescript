export {};

// 1. Información del entorno donde se ejecuta el archivo
// process.version: muestra qué versión de Node.js estás utilizando.
// __filename: muestra la ruta completa del archivo que se está ejecutando.
console.log("Versión de Node:", process.version);
console.log("Archivo ejecutado:", __filename);

// 2. Los tipos no existen en tiempo de ejecución
// Que TypeScript utiliza los tipos para controlar el código antes de ejecutarlo, 
// pero cuando se transforma en JavaScript, las anotaciones desaparecen.
// se covierte en let edad = 30;
let edad: number = 30;
// typeof es un operador de JavaScript que permite conocer el tipo de un valor durante la ejecución.
console.log("Tipo en ejecución:", typeof edad);

// 3. Este código es válido para tsx, node y tsc
const herramientas: string[] = ["tsc", "tsx", "node"];

for (const herramienta of herramientas) {
  console.log(`Herramienta disponible: ${herramienta}`);
}

// 4. Argumentos pasados por la terminal (process.argv)
// slice(2) crea un nuevo arreglo comenzando desde la posición 2, El resultado será: [ 'Gabriel', '25' ]
const argumentos: string[] = process.argv.slice(2);
console.log("Argumentos recibidos:", argumentos);
