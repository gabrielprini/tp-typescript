export {};

// 1. Enum de strings
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
  CANCELADO = "CANCELADO",
}

let estadoTarea: Estado = Estado.PENDIENTE;
console.log("Estado inicial:", estadoTarea);

estadoTarea = Estado.COMPLETADO;
console.log("Estado actualizado:", estadoTarea);

function describirEstado(estado: Estado): string {
  switch (estado) {
    case Estado.PENDIENTE:
      return "La tarea todavía no se hizo";
    case Estado.COMPLETADO:
      return "La tarea está terminada";
    case Estado.CANCELADO:
      return "La tarea fue cancelada";
  }
}

console.log(describirEstado(Estado.CANCELADO));

// 2. Enum numérico (los valores se asignan desde 0)
enum Nivel {
  BAJO,
  MEDIO,
  ALTO,
}

console.log("Nivel.ALTO vale:", Nivel.ALTO);

// 3. Tipos literales
type Rol = "ADMIN" | "USER" | "GUEST";
type Dado = 1 | 2 | 3 | 4 | 5 | 6;

const rol: Rol = "ADMIN";
const tirada: Dado = 4;

console.log("Rol:", rol);
console.log("Tirada:", tirada);

function puedeEditar(rolActual: Rol): boolean {
  return rolActual === "ADMIN" || rolActual === "USER";
}

console.log("¿ADMIN puede editar?", puedeEditar("ADMIN"));
console.log("¿GUEST puede editar?", puedeEditar("GUEST"));

// 4. Alternativa moderna: objeto "as const" + tipo literal
const Prioridad = {
  BAJA: "BAJA",
  MEDIA: "MEDIA",
  ALTA: "ALTA",
} as const;

type Prioridad = (typeof Prioridad)[keyof typeof Prioridad];

const prioridadTarea: Prioridad = Prioridad.ALTA;
console.log("Prioridad:", prioridadTarea);

// 5. Errores que TypeScript detecta (comentados a propósito)
// const rolInvalido: Rol = "SUPERADMIN"; // Error: no es un valor permitido
// const estadoInvalido: Estado = "OTRO";  // Error: no es un miembro del enum