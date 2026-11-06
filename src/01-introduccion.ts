export {};

// 1. TypeScript agrega tipos a JavaScript
const lenguaje: string = "TypeScript";
const desarrollador: string = "Microsoft";
const versionMayor: number = 7;

console.log(`${lenguaje} lo desarrolla ${desarrollador} (versión ${versionMayor}.x)`);

// 2. Los tipos detectan errores antes de ejecutar
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad;
}

console.log("Total correcto:", calcularTotal(1500, 3));

// El editor marca error porque "3" es string y no number.
// @ts-expect-error: demostración de un error de tipos
const totalConError = calcularTotal(1500, "3");

// 3. Pero tsx y node NO verifican tipos: el programa se ejecuta igual
console.log("Total con error (se ejecuta igual):", totalConError);