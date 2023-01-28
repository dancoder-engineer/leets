var isValid = function(s) {

    class Stack{
        constructor(){
            this.arr = []
        }
    
        add(added){
            this.arr.push(added)
            return added
        }
    
        remove(){
            return this.arr.pop()
        }
    }

    s = s.split('')
    let stk = new Stack()
    let others = []
    let otherHalf = ''
    while(s.length > 0){
        if(s[0] === '(') { [others, otherHalf] = [['}', ']'], ')'] }
        else if(s[0] === '[') { [others, otherHalf] = [['}', ')'], ']'] }
        else if(s[0] === '{') { [others, otherHalf] = [[')', ']'], '}'] }
        else { 
            s.shift()
            continue
         }
        

        

        let pl = s.indexOf(otherHalf) + 1
        if (pl === -1) { return false }
        let addThis = s.slice(0, pl).join('')
        if(addThis.length % 2 !== 0) { return false }
        stk.add(addThis)
    
        s.shift()
    }
    

    console.log(stk.arr)
    let removed = stk.remove()
    if(!removed) { return false }
    else if(removed.length === 2 && removed.includes(otherHalf)) {return true}
    else { return false }
};


//Input: s = 
//Input: s = 
//Input: s = 

let arr = ["()", "()[]{}", "(]", "{[]}", "([)]", "({{{{}}}))"]


//while return = null
//if theres another opening before the close, recursively call function for that
//if theres a different closing before the one you want, false

for (let i of arr){
    a = isValid(i)
    console.log(a)
    console.log("-------------------------")
}


class Stack{
    constructor(){
        this.arr = []
    }

    add(added){
        this.arr.push(added)
        return added
    }

    remove(){
        return this.arr.pop()
    }

    get state(){ return this.arr }
}



//Answer to the wrong problem (maybe it'll be asked later...)




var isValid3 = function(s) {

    if(s.length % 2 !== 0) { return false }
    while(s){
        let next = ''
        switch(s[0]) {
            case '(':
                next = ')'
                break
            case '[':
                next = ']'
                break
            case '{':
                next = '}'
                break
        }
        if (s[1] !== next) { return false }
        s = s.slice(2,)
    }
    return true
};