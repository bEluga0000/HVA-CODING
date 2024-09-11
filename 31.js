// Is Prime
// brute force
const IsPrime = (num)=>{
    let i = 2
    let prime = true
    while(i < num)
    {
        if(num % i == 0)
        {
            prime = false
            break
        }
        i++
    }
    console.log(`The given number ${num} is ${prime ? "prime" :"not prime"}`)
}
IsPrime(2)
IsPrime(4)
IsPrime(31)