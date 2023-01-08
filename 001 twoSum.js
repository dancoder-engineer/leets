var twoSum = function(nums, target) {
    let pl = 0
    let inRange = true

    while(nums.length > 1){
        let currNum = nums.shift()
        if (currNum > 0) { inRange = currNum <= target }
        else if (currNum > 0) { inRange = currNum >= target }
        if (inRange) {
            for(i in nums){
                if (currNum + nums[i] === target) { return [pl, parseInt(i)+pl+1]}
            }
         }   
        pl += 1

    }

}

let nums = [3,2,95,4,-3]
let target = 92

let a = twoSum(nums, target)

console.log(a)