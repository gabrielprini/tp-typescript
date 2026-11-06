export {};

// 1. Parámetros y tipo de retorno
function sumar(a: number, b: number): number {
  return a + b;
}

console.log("Suma:", sumar(5, 3));

// 2. Parámetro opcional (?)
function saludar(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola ${nombre} ${apellido}`;
  }
  return `Hola ${nombre}`;
}

console.log(saludar("Ana"));
console.log(saludar("Ana", "Pérez"));

// 3. Parámetro por defecto
function crearUsuario(nombre: string, rol: string = "USER"): string {
  return `Usuario ${nombre} con rol ${rol}`;
}

console.log(crearUsuario("Luis"));
console.log(crearUsuario("María", "ADMIN"));

// 4. Función que no devuelve valor (void)
function mostrarMensaje(mensaje: string): void {
  console.log(`Mensaje: ${mensaje}`);
}

mostrarMensaje("Esta función no retorna nada");

// 5. Arrow function con tipos
const multiplicar = (a: number, b: number): number => a * b;
console.log("Multiplicación:", multiplicar(4, 6));

// 6. Rest parameters
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log("Suma de todos:", sumarTodos(1, 2, 3, 4));