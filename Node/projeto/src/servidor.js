const porta = 3003 

const express = require('express')
const app = express()

app.get('/produtos', (req, res,next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res,next) => {
    res.send({ Nome: 'Notebook', preco: 1245.90}) // convert to json
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})