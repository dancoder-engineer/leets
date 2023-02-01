var removeElement = function(nums, val) {

    let pl = 0

    for(let i = 0; i < nums.length; i++){
        if (nums[i] !== val){ console.log(val)
            nums[pl] = nums[i]
            pl += 1
        }
    }

    return pl

};

let a = [3,2,2,3]
console.log(removeElement(a, 3))