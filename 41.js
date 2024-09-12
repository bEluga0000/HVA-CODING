// odd numbers count
const oddCount = (arr)=>{
    let i =0
    let count =0
    while(true)
    {
        if(arr[i] == undefined | null)
            break
        if(arr[i]%2 != 0)
            count++
        i++
    }
    console.log(`In array ${arr} there are ${count} odd numbers present`)
}
oddCount([1,2,3,4])