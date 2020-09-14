// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 33,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 29
    },{
        nome:'Ana',
        idade: 29
    }],

    calcularValorSeguro: function(){
        //nnnn
    }

}

carro.proprietario.endereco.numero = 1000

console.log(carro)

delete carro.condutores
delete carro.endereco
delete calcularValorSeguro

console.log(carro)