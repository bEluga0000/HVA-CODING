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
// tc o(n)

// GCD approach
const HCF = (n1,n2)=>{
    if(n2 == 0)
        return n1
    else
        return HCF(n2,n1%n2)
}
const LCMB = (n1,n2)=>{
    const hcfVal = HCF(n1,n2)
    const ans = (n1*n2)/hcfVal
    console.log(`LCM of ${n1} and ${n2} is ${ans}`)
    return
}
LCMB(20,30)
// 