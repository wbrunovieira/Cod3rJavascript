const moduloA = require('../../moduloA')
console.log(moduloA.welcome)

const c = require('./pastac')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)