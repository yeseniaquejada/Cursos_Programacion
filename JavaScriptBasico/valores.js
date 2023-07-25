//CONDICIONALES
/* var edad= 18;

if (edad === 18) {
   console.log("Puedes votar por primera vez")
} else if (edad > 18) {
   console.log("Puedes votar de nuevo")
} else {
   console.log("Aún no puedes votar")
} */

//OPERADOR TERNARIO
/* condition ? true : false

var numero= 1;
var resultado = numero === 1 ? "Sí soy un 1" : "No soy 1" */


//OPERADOR SWITCH
/* var numero = 1

switch (numero) {
   case 1:
      console.log("Soy uno")
      break;
   case 10:
      console.log("Soy un 10")
      break
   case 100:
      console.log("Soy un 100")
      break
   default:
      console.log("No soy nada")
} */

//ARRAYS
/* var frutas = ["Manzana", "Kiwi", "Cereza", "Fresa"]
console.log(frutas)

//Añadir nuevo
var masFrutas = frutas.push("Uvas")

//Remover el ultimo dato
var ultimo = frutas.pop()

//Añadir de primero un dato
var nuevaLongitud = frutas.unshift("Mango")

//Eliminar el primer elemento del array
var borrarFruta = frutas.shift("Mango")

//Devuelve el índice de un elemento del array
var posicion = frutas.indexOf("Cereza") */

//LOOPS
/* var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel", "Yesenia"]

function saludarEstudiantes(estudiante) {
   console.log(`Hola, ${estudiante}`)
} */

//for - recorre un bloque de código varias veces
/* for(var i = 0;  i < estudiantes.length; i++) {
   saludarEstudiantes(estudiantes[i])
}
 */

//for/in - recorre las propiedades de un objeto
//for/of - recorre los valores de un objeto iterable (No deja cambiar los valores del array original)
/* for(var estudiante of estudiantes) {
   saludarEstudiantes(estudiante)
} */

//while - recorre un bloque de código mientras se cumple una condición específica

//do/while - también recorre un bloque de código mientras se cumple una condición específica

/* while (estudiantes.length > 0) {
   console.log(estudiantes)
   var estudiante = estudiantes.shift()
   saludarEstudiantes(estudiante)
}  */

//OBJETOS
/* var miAuto = {
   marca: "Toyota",
   modelo: "Corolla",
   annio: 2020,
   detalleDelAuto: function() {
      console.log(`Auto ${this.modelo} ${this.annio} ${this.color}`)
   }
}

miAuto.color = "rojo" */

//DetalleDelAuto es el metodo
//This: variable que hace referencia al objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.

//OBJETOS FUNCION CONSTRUCTORA
/* function auto(marca, modelo, annio) {
   this.marca = marca
   this.modelo = modelo
   this. annio = annio
}

var autoNuevo = new auto("Tesla", "Model 3", 2020)
var autoNuevo2 = new auto("Chevrolet", "Model x", 2018)
var autoNuevo3 = new auto("Toyota", "Corolla", 2024) */

//METODOS DE RECORRIDOS DE ARRAYS
var articulos = [
   {nombre: "Bicicleta", costo: 3000},
   {nombre: "Tv", costo: 2500},
   {nombre: "Libro", costo: 2500},
   {nombre: "Celular", costo: 10000},
   {nombre: "Laptop", costo: 20000},
   {nombre: "Teclado", costo: 500},
   {nombre: "Audifonos", costo: 1700}
]

//FILTER: crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.
/* var articulosFiltrados = articulos.filter(
   function (articulo) {
      return articulo.costo <= 500
}) */

//MAP: retorne la condición que necesitamos. 
/* var nombreArticulos = articulos.map(
   function (articulo) {
      return articulo.nombre
   }
) */

//FIND: consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). 
/* var encuentraArticulo = articulos.find(
   function (articulo) {
      return articulo.nombre === "Tv"
   }
) */

//FOREACH: ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.
/* articulos.forEach(function (articulo) {
   console.log(articulo.nombre)
})  */

//SOME: consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).
/* var articulosBaratos = articulos.some(function (articulo) {
   return articulo.costo <= 700
}) */

//El método .push() nos permite agregar uno o más elementos al final de un array.
//.shift() eliminar el primer elemento de un array
//El método .pop() eliminará el último elemento de un array
