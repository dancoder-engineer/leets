
var longestCommonPrefix = function(strs) {

    let howMany = strs[0].length

    for(let i in strs){
        let intI = parseInt(i)
        if(intI === 0) { continue }

        for(let j = howMany; j > 0; j--) {
             if (!strs[intI].startsWith(strs[intI-1].slice(0,j))  ) { howMany = j-1
                continue
             }
        }
    }
    return strs[0].slice(0, howMany)
};

//compare the first 2
//go from tghe end,. see how many are the same
//then go to next and compare only those letters with .startswith


let a =  ["flower","flow","flight"]
a = longestCommonPrefix(a)
console.log(a)