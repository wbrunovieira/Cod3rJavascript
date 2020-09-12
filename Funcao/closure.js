// Closure e o escopo criado quando uma funcao e declarada
// esse es permite a funcao acessar e manipular variaveis externas a funcao

// Contexto lexico em avaliacao1
const x = 'Global'

function fora (){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())