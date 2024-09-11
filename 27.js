// HCF
// recurssion
const HCF = (n1,n2)=>{
    console.log(n1,n2)
    if(n2 == 0)
    {
        console.log(`HCF of ${n1} and ${n1} is ${n1}`)
        return 
    }
    else
        return HCF(n2,n1%n2)
}
HCF(10,15)