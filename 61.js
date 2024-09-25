// You are given an array of integers.Print an array where each index has the sum of all numbers in the original array except the number at that index. 
// Avoid using subtraction, and handle this with nested loops.
// Sample Input:
// 7 3 6 7 5
// Sample Output:
// 21 25 22 21 23
const sumArr = (arr) => {
    let i = 0
    let outArr = []
    let sum = 0
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        sum+=arr[i]
        i++
    }
    i = 0
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        outArr.push(sum-arr[i]) 
        i++
    }
    console.log(outArr)
}
sumArr([7,3,6,7,5])
