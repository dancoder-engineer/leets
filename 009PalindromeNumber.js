
function isPalindrome(num) {
    if (num < 0) { return false }
    num = num.toString()
    let a = num
    a = a.split('')
    a = a.reverse()
    a = a.join('')
    return a === num
}

let a = isPalindrome(1211)
console.log(a)