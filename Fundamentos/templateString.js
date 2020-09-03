const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'
const template = `
Ola
${nome}!`
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUppercase()
console.log(`Ei... ${up('cuidado')}!`)