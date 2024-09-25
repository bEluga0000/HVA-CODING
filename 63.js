// You are given an array of integers.Calculate the sum of absolute differences between all pairs of numbers in the array.
// Sample Input:
// 7 3 6 4
// Sample Output:
// 14
// Explanation: 
// Absolute difference between 7 and 3 = 4
// Absolute difference between 7 and 6 = 1
// Absolute difference between 7 and 4 = 3
// Absolute difference between 3 and 6 = 3
// Absolute difference between 3 and 4 = 1
// Absolute difference between 6 and 4 = 2
// Sum of absolute differences between all pairs: 4 + 1 + 3 + 3 + 1 + 2 = 14

const diffSum = (arr) => {
    let i = 0
    let sum = 0
    while (true) {
        if (arr[i+1] == undefined || arr[i+1] == null)
            break
        let j = i+1
        while(true)
        {
            if (arr[j] == undefined || arr[j] == null)
                break
            sum+=Math.abs(arr[i]-arr[j])
            j++
        }
        i++
    }
    console.log(sum)
}
diffSum([7,3,6,4])
