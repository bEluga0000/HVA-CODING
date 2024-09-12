
    let i = count-1
    while(i >= 0)
    {
        let n = parseInt(numStr.charAt(i))
        sum+=n**count
        i--
    }
    console.log(`Number ${num} is ${num != sum ? "not" :""} amstrong number`)