// Frequency of Each Element in an Array:
// You are given an array of integers.Print the frequency of each element in the array.
// Sample Input:
// 3 6 2 1 7 3 7 4 1 7 4
// Sample Output:
// 3 2
// 6 1
// 2 1
// 1 2
// 7 3
// 4 2
// Explanation: 3 appears twice, but we have to print its frequency only once.Same is with other numbers. 
const freqArr = (arr) => {
    let i = 0
    const map = new Map()
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        if(map.has(arr[i]))
            map.set(arr[i],map.get(arr[i])+1)
        else
        {
            map.set(arr[i],1)
        }
        i++
    }
    map.forEach((val,key)=>{
        console.log(key,val)
    })
}
freqArr([3,6,2,1,7,3,7,4,1,7,4])