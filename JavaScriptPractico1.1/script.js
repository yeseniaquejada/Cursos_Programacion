const h1 = document.querySelector('h1')
const p = document.querySelector('.parrafo')
const image = document.querySelector('.image')
const input = document.querySelector('input')

//innerHTML: es una propiedad que permite acceder o modificar el contenido HTML de un elemento. 
h1.innerHTML = 'Hola <br /> curso de Js'

//innerText: es una propiedad que permite acceder o modificar el contenido de texto de un elemento, excluyendo cualquier contenido HTML que pueda contener el elemento. 
p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

//getAttribute: es un método que se usa para obtener el valor de un atributo específico en un elemento HTML.
console.log(h1.getAttribute('class'))

//setAttribute: es un método que se utiliza para establecer o cambiar el valor de un atributo en un elemento HTML. 
h1.setAttribute('class', 'rojo')

//classList.add: es un método que se utiliza para agregar una o varias clases CSS a un elemento HTML. 
h1.classList.add('morado')

//classList.remove: es un método que se utiliza para eliminar una clase específica de la lista de clases de un elemento HTML.
h1.classList.remove('rojo')

//classList.toggle: se utiliza para alternar la presencia de una clase en un elemento HTML. Si la clase está presente, la eliminará; si no está presente, la agregará. Es decir, este método permite cambiar el estado de una clase entre activada y desactivada cada vez que se llama.
h1.classList.toggle('active')

//classList.contains: es un método que se utiliza para verificar si un elemento HTML tiene una clase específica en su lista de clases.
const hasClass =  h1.classList.contains('active')
console.log(hasClass);

input.value = "546"

//document.createElement: se utiliza para crear un nuevo elemento HTML en el documento.
const img = document.createElement('img')
img.setAttribute('src', 'https://www.eltiempo.com/files/image_640_428/uploads/2018/03/22/5ab428c6cda71.jpeg')
console.log(img)

//appendChild: es un método que se aplica a un elemento padre y se utiliza para agregar un elemento hijo específico al final de la lista de hijos del elemento padre. 

//append: es un método que se puede aplicar a cualquier elemento y se utiliza para agregar uno o varios nodos al final del elemento.
image.append(img)
