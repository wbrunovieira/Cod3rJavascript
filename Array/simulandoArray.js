const quaseArray = {0: 'Rafael', 1:'Ana',2:'Bia'}
console.log(quaseArray)

Object.defineProperties(quaseArray,'toString',{
    value: function() { return Object.value(this) },
    enumerable: false
})

console.log(quaseArray[0])