var longestPalindrome = function(s) {
    
    function strToArr(s){
        return s.split('')
    }

    function uniq(s){
        return s.filter((i, index) => s.indexOf(i) === index)
    }

    function findPlaces(arr, item){
        let returnable = []
        for (let i in arr){
            if (arr[i] === item) { returnable.push(i) }
        }
        return returnable
    }

    function longestForLetter(places, s){
        let longForThis = ""
        for (let place in places){
            place=parseInt(place)
            if(place === places.length - 1) { return longForThis }
            let subString = s.slice(places[place], parseInt(places[place + 1])+1)
            if (subString.length > longForThis.length) { longForThis = subString }
        }
        return longForThis
    }

    if(s.length === 1) { return s }

    let longest = ""
    let arr = strToArr(s)
    let individualChars = uniq(arr)

    for (let i in individualChars){ 
        let places = findPlaces(arr, individualChars[i] )

        let lfl = longestForLetter(places, s)
        if (lfl.length > longest.length) { longest = lfl }
    }

    if(longest.length === 0) { return s[0] }
    return longest
  
};




let ex = ["badbad", "cbbd"]

for (let i of ex) {
    let longPal = longestPalindrome(i)
    console.log(longPal)
}


//For each place except last one, slice from forst to last and check if that's a palindrome
//need pointer to go to end/be more greedy, go in reverse