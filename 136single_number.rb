def single_number(nums)

    nums = nums.sort()


    ptr = nums.length - 1

    while nums.length != 1
        if nums[ptr] == nums[ptr-1]
            nums.delete_at(ptr)
            nums.delete_at(ptr-1)
            ptr -= 2
        else
            ptr -= 1
        end

    end

    return nums[0]
end


a = [2,2,1]
a = single_number(a)
p a