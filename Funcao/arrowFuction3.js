let comparaComTHIS = function(param) {
    console.log(this === param)
}
comparaComTHIS(global)

const obj = {}
comparaComTHIS = comparaComTHIS.bind(obj)
comparaComTHIS(global)
comparaComTHIS(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)