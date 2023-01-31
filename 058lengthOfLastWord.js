var lengthOfLastWord = function(s) {
    if(!s.includes(" ")) { return 1 }
    s = s.split(" ")

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i].length > 0) { return s[i].length }
    }
    
};


let a = "a  "
console.log(lengthOfLastWord(a))