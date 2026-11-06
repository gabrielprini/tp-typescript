TP Integrador: Investigación en TypeScript

Tema 1: ¿Qué es TypeScript?

¿Qué es TypeScript y quién lo desarrolla?
TypeScript es JavaScript con tipos. Lo creo y lo mantiene Microsoft. Todo lo que funciona en JavaScript funciona en TypeScript, y tambien podemos indicar de qué tipo es cada dato.

¿Qué diferencias tiene con JavaScript?
JavaScript es un lenguaje dinámico interpretado, mientras que TypeScript es un superconjunto tipado de JavaScript que se compila a JS para mejorar seguridad y escalabilidad.

¿Qué ventajas ofrece?
Detecta errores mientras se escribe el código
Hace el codigo mas escalable
Los tipos funcionan como documentacion del propio codigo 

¿Cuál es su versión actual?
TypeScript 7 salió el 8 de julio de 2026. Es una reescritura completa del compilador en Go, unas 10
veces más rápida. Se instala igual que antes, con npm i -D typescript.

Tema 2: Crear y ejecutar un proyecto

¿Cómo se instala TypeScript en un proyecto?
tenemos que verificar la instalacion de npm y node, despues creamos el proyecto, instalamos las herramientas (npm i -D typescript @types/node@24 tsx) y despues verificamos la versión de TypeScript (npx tsc -v)

¿Para qué sirve el archivo tsconfig.json?
Es el archivo de configuración del proyecto. Le indica a TypeScript tres cosas:
1. Qué archivos forman el proyecto: include. 
2. Qué tan estricto debe ser al verificar tipos: strict y opciones relacionadas. 
3. Cómo generar el JavaScript: versión (target), sistema de módulos (module) y carpeta de salida
(outDir)

¿Qué hace el comando tsc?
Es el compilador. Cuando se ejecuta sin argumentos:
1. Busca el tsconfig.json en la carpeta actual. 
2. Toma los archivos indicados en include. 
3. Verifica los tipos de todo el código y muestra los errores 
4. Genera los archivos .js en la carpeta outDir

¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
tsc archivo.ts	Compila TypeScript a JavaScript y verifica tipos.
npx tsx archivo.ts	Ejecuta TypeScript directamente, sin verificación completa de tipos.
node archivo.js	Ejecuta JavaScript.

Tema 3: Tipos básicos

¿Qué son los tipos string, number y boolean?
string: representa cadenas de texto
number: representa valores numéricos
boolean: representa valores lógicos de verdadero o falso

¿Cómo se declara un array con tipo?
Se declara especificando el tipo de los elementos que contendrá el arreglo seguido de corchetes []

¿Qué es un tipo unión?
Es un tipo que permite que una variable o valor pueda ser de uno u otro tipo mediante el uso del operador barra vertical (|)

¿Por qué se recomienda evitar any?
Porque el uso de any desactiva la verificación de tipos de TypeScript.  

Tema 4: Funciones

¿Cómo se indican los tipos de los parámetros?
Se indican colocando dos puntos (:) seguidos del tipo correspondiente inmediatamente después del nombre de cada parámetro dentro de los paréntesis de la función.

¿Cómo se indica el tipo de retorno?
Se indican colocando dos puntos (:) seguidos del tipo correspondiente inmediatamente después del nombre de cada parámetro dentro de los paréntesis de la función.

¿Qué es un parámetro opcional?
Es un parámetro que se marca añadiendo un signo de interrogación (?) al final de su nombre (por ejemplo, apellido?: string).

¿Qué es un parámetro por defecto?
Es un parámetro al que se le asigna un valor predeterminado directamente en su declaración utilizando el signo =; por ejemplo, rol: string = "user"

Fuentes 
Guía teórico-práctica Unidad 4: Introducción a TypeScript