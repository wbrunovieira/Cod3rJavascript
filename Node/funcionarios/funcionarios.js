const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const paisChina = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {const funcionarios = response.data
console.log(funcionarios)

const func = funcionarios.filter(paisChina).filter(mulheres).reduce(menorSalario)

console.log(func)

})



