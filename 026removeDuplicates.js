var removeDuplicates = function(nums) {

    let pl = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[pl]) { 
            pl+=1
            nums[pl] = nums[i]
            
         }
    }
       
    console.log(nums)
    return pl+1
};


let a = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(a)
