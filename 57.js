// You are given an array of integers.Create a new array with elements in reverse order.Print the new array.
// Sample Input:
// 11 1 13 21 3 7
// Sample Output:
// 7 3 21 13 1 11

const reverseArray = (arr)=>{
    let i = 0
    while(true)
    {
        if(arr[i] == undefined || arr[i] == null)
            break
        i++
    }
    const reversArr = new Array(i).fill(0)
    let count = i
    while(i>0)
    {
        reversArr[count-i] = arr[i-1]
        i--
    }
    console.log(reversArr)
}
reverseArray([11,1,13,21,3,7])