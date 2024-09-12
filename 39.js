// Square of each element in the array
const squares = (arr)=>{
    let i = 0
    let count = 0
    while(true){
        if(arr[count] == undefined|null)
        {
            break
        }
        count++
    }
    let ansArr = []
    while(i<count)
    {
        ansArr[i] = 0
        i++
    }
    i =0
    while(i<count)
    {
        ansArr[i] = arr[i]**2
        i++
    }
    console.log(`The given Array is ${arr}`)
    console.log(`squared array is ${ansArr}`)
}
squares([1,2,3,4])