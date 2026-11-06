1. TypeScript

Lenguaje desarrollado por Microsoft que agrega tipos a JavaScript. Todo código JavaScript válido también es TypeScript válido.
ej:
const lenguaje: string = "TypeScript";

2. Tipado estático

Verificación de los tipos mientras se escribe el código, antes de ejecutarlo. Los errores aparecen en el editor o al compilar.
ej:
let edad: number = 30;
// edad = "treinta"; // Error: string no se puede asignar a number

3. tsc

Compilador oficial de TypeScript. Verifica los tipos y genera los archivos .js.

npx tsc            # verifica tipos y genera JavaScript en dist/
npx tsc --noEmit   # solo verifica tipos

4. tsconfig.json

Archivo de configuración del proyecto. Indica qué archivos incluir, qué tan estricta es la verificación y cómo se genera el JavaScript.

5. Tipos primitivos (string, number, boolean)

Tipos básicos para texto, números y valores verdadero/falso.

const nombre: string = "Ana";
const edad: number = 25;
const esEstudiante: boolean = true;

6. Array tipado

Lista donde todos los elementos son del mismo tipo. Se escribe con tipo[] o Array<tipo>.

const notas: number[] = [8, 9, 10];
const materias: Array<string> = ["Programación", "Bases de datos"];

7. Tipo unión

Tipo que permite que un valor sea de uno u otro tipo, separados por |.

let id: string | number = "ABC123";
id = 456;

8. any

Tipo que desactiva la verificación: acepta cualquier valor y permite cualquier operación. Se recomienda evitarlo porque se pierden los errores de tipos.

let cualquierCosa: any = "texto";
cualquierCosa = 42;

9. unknown

Tipo que acepta cualquier valor, pero obliga a verificar el tipo antes de usarlo. Es la alternativa segura a any.

let dato: unknown = "hola";
if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}

10. Parámetro opcional

Parámetro de una función que se puede omitir. Se marca con ? y dentro de la función puede ser undefined.

function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

