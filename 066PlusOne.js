/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let nums = digits.join('')
    nums = BigInt(nums)
    nums += BigInt(1)
    nums = nums.toString()
    nums = nums.split('')
  //  nums = nums.map(i => parseInt(i))
    return nums
};