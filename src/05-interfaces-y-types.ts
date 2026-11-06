export {};

// 1. Interface para describir un objeto
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number; // propiedad opcional
  readonly creadoEn: Date; // solo lectura
}

const usuario1: Usuario = {
  id: 1,
  nombre: "María",
  email: "maria@example.com",
  creadoEn: new Date(),
};

const usuario2: Usuario = {
  id: 2,
  nombre: "Juan",
  email: "juan@example.com",
  edad: 28,
  creadoEn: new Date(),
};

console.log("Usuario sin edad:", usuario1.nombre, usuario1.edad);
console.log("Usuario con edad:", usuario2.nombre, usuario2.edad);

// 2. Interface con métodos
interface Producto {
  nombre: string;
  precio: number;
  calcularDescuento(porcentaje: number): number;
}

const camiseta: Producto = {
  nombre: "Camiseta",
  precio: 10000,
  calcularDescuento(porcentaje: number): number {
    return this.precio - (this.precio * porcentaje) / 100;
  },
};

console.log("Precio con 20% de descuento:", camiseta.calcularDescuento(20));

// 3. Extender interfaces
interface Empleado extends Usuario {
  legajo: string;
  salario: number;
}

const empleado: Empleado = {
  id: 3,
  nombre: "Carlos",
  email: "carlos@example.com",
  creadoEn: new Date(),
  legajo: "A-100",
  salario: 900000,
};

console.log("Empleado:", empleado.nombre, empleado.legajo);

// 4. Type alias
type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST";

const idUsuario: ID = "ABC123";
const rolUsuario: Rol = "ADMIN";

console.log("ID:", idUsuario, "| Rol:", rolUsuario);

// 5. Type para objetos
type Coordenada = {
  x: number;
  y: number;
};

const punto: Coordenada = { x: 10, y: 20 };
console.log("Coordenada:", punto);

// 6. Intersección de types
type EmpleadoCompleto = Empleado & {
  departamento: string;
};

const completo: EmpleadoCompleto = {
  ...empleado,
  departamento: "Sistemas",
};

console.log("Departamento:", completo.departamento);