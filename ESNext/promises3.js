// callback

setTimeout(function(){
    console.log('Executando o callback')
    
    setTimeout(function (){
        console.log('Executando o callback')
        setTimeout(function (){
            
            console.log('Executando o callback')
        },2000)
    },2000)
},2000)

//Promise

function esperarPor(tempo = 3000){
    return new Promise(function(resolve) {
        setTimeout(function (){
            console.log('Executando promisse...')
            resolve()
        },tempo)
    })
}

esperarPor(3000)
.then(() => esperarPor())
.then(esperarPor)