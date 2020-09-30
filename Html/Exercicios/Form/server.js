// for initialize the server, instal the dependences: express, body-parser, and initialize in the terminal the command: node server.js
// to stop the node server: commando ctrl + c
// to use nodemon: instal npm i --save-dev nodemon 
// to start nodemon: nodemon server.js if in the package.json the start is "node server.js" and main: "server.js"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req,resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens, Usuario Incluido !!!</h1>')
})
app.post('/usuarios/:id',(req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens, Usuario Alterado !!!</h1>')
})

app.listen(3003)