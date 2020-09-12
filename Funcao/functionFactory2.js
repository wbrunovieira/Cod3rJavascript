function criarProduto(nome, preco, desc ){
    return {nome, preco, desc: 0.1}
}

const computador = criarProduto("Dell", 4500)

console.log(computador)
console.log(criarProduto('ipad', 234))