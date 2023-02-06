/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = BigInt('0b' + a)
    b = BigInt('0b' + b)
    return (a+b).toString(2)
};

let a = addBinary("11", "1")
console.log(a)