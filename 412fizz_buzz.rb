def fizz_buzz(n)
    returnable = []

    for i in 1..n
        if i % 15 == 0
            returnable.push("FizzBuzz")
        elsif i % 3 == 0
            returnable.push("Fizz")
        elsif i % 5 == 0
            returnable.push("Buzz")
        else
            returnable.push(i.to_s)
        end
    end

    return returnable
    
end