const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', calcular)

function calcular(event) {
    event.preventDefault()
    const valor1 = parseInt(input1.value, 10);
    const valor2 = parseInt(input2.value, 10);
    const suma = valor1 + valor2;
    resultado.innerText = "Resultado: " + suma;
}