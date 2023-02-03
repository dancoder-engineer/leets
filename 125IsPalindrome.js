var isPalindrome = function(s) {
    let charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let arr = []

    for (let i = 0; i < s.length; i++){
        if(charList.includes(s[i])) {
            arr.push(s[i].toLowerCase())
        }
    }
    s = arr.join('')
    revS = arr.reverse().join('')
    
    return (s === revS)
};

let s = "ZA man, a plan, a canal: Panama"
let a = isPalindrome(s)
console.log(a)
