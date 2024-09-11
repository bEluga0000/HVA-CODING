// Decimal to binary
// dry running
// 2 2**1 = 10
// 3 2**1 = 11
// brute force
const DecToBin = (num)=>{
    let ans = ""
    let count = -1
    let q = num
    while(q > 0 )
    {
        if(q%2 == 0)
            ans+="0"
        else
        {
            q = q-1
            ans+="1"
        }
        count++
        q = q/2
    }
    let bin = ""
    // let i = count
    while(count >= 0)
    {
        bin+=ans[count]
        count--
    }
    console.log(`Binary value  for decimal ${num} is ${bin}`)
}
DecToBin(14)
DecToBin(3)
DecToBin(1)