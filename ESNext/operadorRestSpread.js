// operador ... rest(juntar)/ spread(espalhar)
// usar rest com parametro de funcao como revisao3

//usar spread com objeto
const funcionario = {nome:'Maria', salario: 12340.22}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array

const grupo1 = ['Joao', 'Maria', 'Pedro']
const grupoFinal = ['Rafaela', ...grupo1, 'Bruno']
console.log(grupoFinal)