var lengthOfLongestSubstring = function(s) {

    longest = 1
    tempArr = s.split('')

    lens=[]
    if (s.length === 0) { return 0 }

    while (tempArr.length > longest) {
        let letters = []
        letters.push(tempArr.shift())
      
        for(let letter of tempArr) { 
            
            if (letters.includes(letter)) { 
                break
            }

            letters.push(letter)
          
           
        }

        if (letters.length > longest) { longest = letters.length }

        
    }

return (longest)
};




let s = "au"
let a = lengthOfLongestSubstring(s)
console.log(a)
