// is amstrong number
const amstrongNum = (num)=>{
    let count = 0
    let numStr = ""+num
    console.log(typeof(numStr))
    while(true){
        if(numStr[count]== undefined | null)
            break
        count++
    }
    // console.log(count)
    let sum = 0
    let i = count-1
    while(i >= 0)
    {
        let n = parseInt(numStr[i])
        sum+=n**count
        i--
    }
    // console.log(sum)
    console.log(`Number ${num} is ${num != sum ? "not" :""} amstrong number`)
}
amstrongNum(153)
amstrongNum(32)
amstrongNum(12)