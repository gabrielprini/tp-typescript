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

Tema 5: Interfaces y type

¿Qué es una interfaz y para qué sirve?
Es una estructura que describe la forma de los datos, utilizada principalmente para definir la estructura de objetos y clases.

¿Qué es un type?
Es un alias de tipo (type alias) que también se utiliza para describir la forma de los datos y estructurar objetos.

¿Cómo se declara una propiedad opcional?
Se declara añadiendo un signo de interrogación (?) al final del nombre de la propiedad, justo antes de los dos puntos

¿Cuándo conviene usar cada uno?
interface: Se recomienda para definir estructuras de objetos y clases, especialmente cuando se necesita herencia o extender otras estructuras mediante extends.   type: Se recomienda para uniones (|), intersecciones (&), tipos literales (ej. "ADMIN" | "USER") y alias de tipos primitivos.

Tema 6: Enums y tipos literales

¿Qué es un enum?
Un enum (o enumeración) es una estructura que permite definir un conjunto de constantes con nombre asociadas a valores específicos

¿Qué es un tipo literal?
Un tipo literal es un tipo cuyo valor es un valor concreto y exacto (como un texto o un número específico) en lugar de un conjunto general de datos.

¿En qué se parecen y en qué se diferencian?
Parecidos:Ambos se utilizan para modelar y restringir los posibles valores que puede tomar una variable a un conjunto predefinido de opciones 
Diferencias:Generación de código: Un enum genera un objeto físico en el JavaScript resultante, mientras que los tipos literales son puramente conceptuales para el sistema de tipos y desaparecen por completo tras la compilación.

¿En qué situaciones se puede usar cada uno?
Enum: Se puede usar cuando necesitas agrupar un conjunto de constantes relacionadas bajo un nombre común y requieres acceder a ellas como propiedades de un objeto (por ejemplo, Estado.PENDIENTE). También existe una alternativa moderna usando un objeto congelado con as const y keyof typeof si se busca mayor compatibilidad con Node.   
Tipo literal: Se usa habitualmente para definir opciones fijas, uniones de cadenas o números concretos (como permisos, roles, configuraciones o estados simples), ya que ofrecen una sintaxis limpia, ligera y sin sobrecarga de código en JavaScript.

Fuentes 
Guía teórico-práctica Unidad 4: Introducción a TypeScript