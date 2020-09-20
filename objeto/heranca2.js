// Cadeia de prototipos (prototype chain)
Object.prototype.atrib0 = '0' // dont do it

const avo = { attrib1: 'A'}
const pai = {__proto__:avo, attrib2: 'B' }
const filho = {__proto__:pai, attrib3: 'C'}
console.log(filho.atrib0,filho.attrib1,filho.attrib2,filho.attrib3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual+= delta
        }else{
            this.velAtual = this.velMax
        }
    },status(){
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
