let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(valor => console.log(valor))


const primeiroElemento = arrayOuString => arrayOuString[0]

const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bruno','Walter'])
})
.then(primeiroElemento)
 .then(primeiroElemento)
  .then(letraMinuscula)
   .then(console.log)