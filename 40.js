// Odd or Even
const OddOrEven = (arr)=>{
    let i =0
    while(true){
        if(arr[i] == undefined | null)
            break
        console.log(`Number ${arr[i]} is  ${arr[i] % 2 == 0? "even" : "odd"}`)
        i++
    }
}
OddOrEven([1,2,3,4])