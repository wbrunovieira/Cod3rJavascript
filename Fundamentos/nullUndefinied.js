let valor //nao iniciada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // nao atribuir unedfinied
console.log(!!produto.preco)
// delete produto.preco = melhor maneira para esvaziar o objeto
console.log(produto)

produto.preco = null // sem preco
console.log(!!preco)

console.log(produto)
