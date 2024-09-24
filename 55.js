// You are given an array of integers and another integer K.Print the first element of the array that is greater than K.If there are no elements greater than K, print No.
// Sample Input 1:
// 3 5 10 25 16 12 14
// 11
// Sample Output 1:
// 25
// Explanation 1: In the given array, the first element greater than 11 is 25.
// Sample Input 2:
// 3 5 10 13 16 12 14
// 19
// Sample Output 2:
// No
// Explanation 2: In the given array, there are no elements greater than 19.
const greaterThanK = (arr,k) => {
    let i = 0
    let found = false
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        if (arr[i]>k) {
            found = true
            break
        }
        i++
    }
    if(found)
        console.log(`number that is greater than ${k} is ${arr[i]}`)
    else
        console.log(`no number found that is greater ${k}`)
}
greaterThanK([3,5,10,13,16,12,14],19)
greaterThanK([10, 8, 14, 11, 6, 15],7)