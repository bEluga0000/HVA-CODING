// Least common factor
// brute force
const LCM = (a,b)=>{
    if(a==b)
    {
        console.log("LCM is ", a)
        return
    }
    let max = a*b 
    let i = a > b ? a : b
    while(i<=max)
    {
        if (i % a == 0 && i % b == 0)
        {
            console.log(`LCM of ${a} and ${b} is ${i}`)
            return
        }
        i++
    }
}

LCM(2,3)