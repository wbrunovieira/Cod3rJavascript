function getInteiroAleatorioentre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioentre(-1, 10)
    console.log('opcao sorteada foi ' + opcao)
} while(opcao != -1)

console.log('Fim')