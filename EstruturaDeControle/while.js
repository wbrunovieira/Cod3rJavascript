function getInteiroAleatorioentre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioentre(-1, 10)
    console.log('opcao sorteado foi ' + opcao)
}

console.log('Fim')