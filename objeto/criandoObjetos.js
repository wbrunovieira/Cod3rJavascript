// usando a notacao literal

const obj1 = {}
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// suas proprias funcoes construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco  * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 4.66,0.15)
const p2 = new Produto('Notebook', 4566, 0.13)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory

function criarFuncionario(nome,salarioBase, faltas){
    return{
        nome,
         salarioBase,
          faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }}
}
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 7980,1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)