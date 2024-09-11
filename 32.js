// perfect number
// brute force
const perfectNumber = (num)=>{
    if(num < 0)
    {
        console.log("Enter the valid the number")
        return
    }
    let sum = 1
    let i = 2
    while(i<num)
    {
       if(num%i == 0)
        {
            sum+=i
            if(sum > num)
                break
        }
        i++ 
    }
    console.log(`number ${num} is ${num == sum ? "":"not"} perfect number`)
}
perfectNumber(6)
perfectNumber(7)