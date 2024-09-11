// binary to decimal
const BinToLib = (bin)=>{
    let ans = 0
    let count = 0
    while(true){
        if(bin[count] == undefined | null)
            break
        count++
    }
    let i = count -1
    count = 0
    while(i>=0)
    {
        if(bin[i] == '1')
            ans+=count**2
        count++
        i--
    }
    console.log(`decimal for binary number ${bin} is ${ans}`)
}
BinToLib("1101")