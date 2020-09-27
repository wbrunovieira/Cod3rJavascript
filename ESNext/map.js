const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework)

const chaveVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Object'],
    [123, 'Numero']
])

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')
console.log(chaveVariadas)