class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

const criarPessoa = nome => {
    return {
        falar:() => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()