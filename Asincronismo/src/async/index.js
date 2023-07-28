//Función async define una función asíncrona que devuelve un objeto, 
//lo cual permite a un programa correr una función sin congelar todo la compilación.

const fnAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Async'), 2000)
        : reject(new Error('Error'))
    })
}

const anotherFn = async () => {
    const somethig = await fnAsync()
    console.log(somethig)
    console.log('Hello')
}

console.log('Before')
anotherFn()
console.log('After')