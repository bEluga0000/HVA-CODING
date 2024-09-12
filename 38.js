// first n prime numbers
// brute force
const checkPrime = (num)=>{
    let i = 2
    let prime = true
    while(i<num)
    {
        if (num % i == 0) {
            prime = false
            break
        }
        i++
    }
    return prime
        
}
const nPrimeNumber = (n) => {
    let count = 0
    let num = 2
    let ans = ""
    while (count <= n) {
        if (checkPrime(num)) {
            ans += num + ","
            count++
        }
        num++
    }
    console.log(`first ${n} prime numbers are ${ans}`)
}
nPrimeNumber(5)