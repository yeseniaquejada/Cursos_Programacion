VARIABLES Y OPERACIONES

# ¿Qué es una variable y para qué sirve?
Es un espacio en memoria donde se puede almacenar información, dependiendo de los tipos y estructuras que soporte nuestro lenguaje.

# ¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el siguiente nombre, mientras que inicializar es asignarle un valor a esa variable.

# ¿Cuál es la diferencia entre sumar números y concatenar strings?
# ¿Cuál operador me permite sumar o concatenar?
El operador que nos permite sumar o concatenar es +. 
Este operador nos permite sumar números, pero cuando utilizamos strings, lo que hace es unir (concatenar) ambos strings.

# Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre: String
Apellido: String
Nombre de usuario en Platzi: String
Edad: Number
Correo electrónico: String
Mayor de edad: Boolean
Dinero ahorrado: Number
Deudas: Number

# Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let nombre = 'Yesenia'
let apellido = 'Quejada'
let username = 'yeseniaQR'
let edad = 19
let mail = 'yeyerojas1308@gmail.com'
let isMayorDeEdad = true
let dineroAhorrado = 1000
let deudas = 100
```

# Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

```js
let nombreCompleto = nombre +' '+ apellido
let dineroReal = dineroAhorrado - deudas
```
# ----------------------------------------------------------------------------------------------------------- #

FUNCIONES

# ¿Qué es una función?
Las funciones nos permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro.

# ¿Cuándo me sirve usar una función en mi código?
Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro.

También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

# ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

# Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

```js
function nombreCompleto(name, lastname) {
    return name + ' ' + lastname
}

function saludo(name, lastname, nickname) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
```

# ----------------------------------------------------------------------------------------------------------- #

CONDICIONALES

# ¿Qué es un condicional?
Son la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.

# ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
IF (else y else if)
Switch

"if" es más adecuado cuando necesitas manejar múltiples condiciones con diferentes lógicas, mientras que "switch" es preferible cuando tienes múltiples casos específicos a evaluar y deseas una sintaxis más concisa.

# ¿Puedo combinar funciones y condicionales?
Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

# Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


```js
if (tipoSuscripcion == 'Free') {
     console.log("Solo puedes tomar los cursos gratis");
} else if (tipoSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoSuscripcion == 'Expert') {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoSuscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

# ----------------------------------------------------------------------------------------------------------- #

CICLOS 

# ¿Qué es un ciclo?
Es una estructura que permite repetir una serie de instrucciones varias veces hasta que se cumpla una condición específica. Los ciclos son fundamentales para automatizar tareas repetitivas y evitar la necesidad de repetir el mismo código una y otra vez.

# ¿Qué tipos de ciclos existen en JavaScript?
Ciclo while (mientras): Este tipo de ciclo ejecuta un bloque de código mientras se cumpla una determinada condición. La condición se evalúa antes de cada iteración, y si es verdadera, se ejecuta el bloque de código. Si en algún momento la condición se vuelve falsa, el ciclo se detiene y el programa continúa con el código después del ciclo.

Ciclo for (para): El ciclo for se utiliza cuando se conoce de antemano el número de veces que se desea repetir un bloque de código. Generalmente, consta de una variable de control que se incrementa o decrementa en cada iteración hasta que alcanza un valor límite.

Ciclo do-while (hacer-mientras): Similar al ciclo while, pero en este caso, la condición se evalúa después de cada iteración. Esto asegura que el bloque de código se ejecute al menos una vez, incluso si la condición inicial es falsa.

# ¿Qué es un ciclo infinito y por qué es un problema?
Un ciclo infinito es una situación en la programación en la que un bucle se repite continuamente sin llegar nunca a una condición de finalización. Es decir, el ciclo no tiene una condición que permita que el programa salga del bucle, lo que hace que se ejecute de forma indefinida.

# ¿Puedo mezclar ciclos y condicionales?
Sí, en programación puedes mezclar ciclos y condicionales para crear algoritmos más complejos y flexibles.

# Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

```js
let i = 0
while (i < 5) {
    console.log("El valor de i es: " + i)
}
```

```js
let i = 10
while (i >= 2) {
    console.log("El valor de i es: " + i)
    i--
}
```

# Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```js
let respuesta;

while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2+2?')
    respuesta = pregunta
}
```

# ----------------------------------------------------------------------------------------------------------- #

ARRAYS Y OBJETOS

# ¿Qué es un array?
Es una estructura de datos que permite almacenar una colección de elementos ordenados. Cada elemento en un array tiene una posición numérica conocida como índice, y se puede acceder a ellos utilizando ese índice. 

```js
let frutas = ['manzana', 'plátano', 'naranja', 'fresa'];
let numeros = [1, 2, 3, 4, 5];
let mixto = [10, 'Hola', {nombre: 'Juan'}, true];
```

# ¿Qué es un objeto?
Es una estructura de datos que permite almacenar un conjunto de propiedades y sus respectivos valores. 
Los objetos en JavaScript pueden contener valores de cualquier tipo de dato, incluyendo números, cadenas, booleanos, arrays, otros objetos e incluso funciones.

```js
let persona = {
  nombre: 'Juan',
  edad: 30,
  ocupacion: 'Desarrollador',
  casado: false
};
```

# ¿Cuándo es mejor usar objetos o arrays?
Usa objetos cuando necesites almacenar y acceder a los datos a través de claves (propiedades) únicas y descriptivas. Usa arrays cuando necesites una colección ordenada de elementos que se acceden a través de índices numéricos.

# ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Sí, puedes mezclar arrays con objetos e incluso objetos con arrays en JavaScript. Ambas estructuras de datos son flexibles y pueden contener cualquier tipo de dato, incluyendo otras arrays u objetos.

```js 
// Mezclando arrays con objetos
let persona = {
  nombre: 'Juan',
  edad: 30,
  habilidades: ['JavaScript', 'HTML', 'CSS'],
  direccion: {
    calle: 'Calle Principal',
    numero: 123,
    ciudad: 'Ciudad Ejemplo'
  }
};

// Mezclando objetos con arrays
let libro = {
  titulo: 'El principito',
  autor: {
    nombre: 'Antoine de Saint-Exupéry',
    nacionalidad: 'Francés'
  },
  capitulos: ['Capítulo 1', 'Capítulo 2', 'Capítulo 3']
};
```

# Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}

imprimirPrimerElementoArray(['Juanita', 'Roberto'])
```

# Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
let nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Pedro'];

function imprimirElementoPorElemento(nombres) {
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i])
    }
}
```

# Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```js
  function imprimirElementos(objeto) {
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      console.log(clave + ": " + objeto[clave]);
    }
  }
}

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid',
};

imprimirElementos(persona);

```

# ----------------------------------------------------------------------------------------------------------- #

# Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return
    } 
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return
    }
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
    }
    if (suscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return
    }

    console.warn('Este tipo de suscripción no existe')
}
```

# 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```js
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

function conseguirTipoSuscripcion(suscripcion) { 
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
        return
    }

    console.warn('Este tipo de suscripción no existe')
}
```
