
function RomanToInteger(s){
    let value = 0
    let basicNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let basicValues = [1, 5, 10, 50, 100, 500, 1000]
    let exceptions = ["IV", "IX", "XL", "XC", "CD", "CM"]
    let exceptionAmts = [4, 9, 40, 90, 400, 900]
    while(s.charAt(0)){
        let pl = (exceptions.indexOf(s.slice(0,2)))
        if (pl === -1){
            basicPl = basicNums.indexOf(s.slice(0,1))
            value += basicValues[basicPl]
            s = s.slice(1,)
        }
        else{
            value += exceptionAmts[pl]
            s = s.slice(2,)
        }
    }
    return value
}

let a = RomanToInteger("III")
console.log(a)