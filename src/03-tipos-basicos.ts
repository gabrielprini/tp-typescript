export {};

// 1. Tipos primitivos
const nombre: string = "Ana";
const edad: number = 25;
const esEstudiante: boolean = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?", esEstudiante);

// 2. Arrays con tipo
const notas: number[] = [8, 9, 10];
const materias: Array<string> = ["Programación", "Bases de datos"];

console.log("Notas:", notas);
console.log("Materias:", materias);
// Esta línea calcula el promedio de las notas.
// reduce() recorre el array y acumula sus valores.
// total: acumula la suma.
// n: representa cada nota.
// total + n: suma la nota actual al acumulador.
// 0: es el valor inicial del acumulador.
// Con [8, 9, 10], obtiene 27.
// length devuelve la cantidad de elementos del array. En este caso, 3
console.log("Promedio:", notas.reduce((total, n) => total + n, 0) / notas.length);

// 3. Tipo unión
let id: string | number = "ABC123";
console.log("ID (string):", id);

id = 456;
console.log("ID (number):", id);

function mostrarId(valor: string | number): string {
  if (typeof valor === "string") {
    return `ID de texto en mayúsculas: ${valor.toUpperCase()}`;
  }
  return `ID numérico con decimales: ${valor.toFixed(2)}`;
}

console.log(mostrarId("abc"));
console.log(mostrarId(7));

// Acepta cualquier valor sin controles estrictos.
let cualquierCosa: any = "texto";
cualquierCosa = 42;
console.log("any acepta cualquier valor:", cualquierCosa);

// unknown no podés utilizar el valor hasta comprobar qué tipo tiene.
let dato: unknown = "hola";
// dato.toUpperCase(); // Error: hay que verificar el tipo antes
// toUpperCase() convierte el texto a mayúsculas.
if (typeof dato === "string") {
  console.log("unknown verificado:", dato.toUpperCase());
}