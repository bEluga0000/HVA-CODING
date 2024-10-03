// You are given an integer array and a target sum.Find all pairs of elements in the array that add up to the given sum.
// Sample Input:
// 4 6 7 2 8 9 3 10
// 10
// Sample Output:
// 4 6
// 7 3
// 2 8
// Explanation: The target sum here is 10. 10 = 4 + 6. 10 = 7 + 3. 10 = 2 + 8. Also, if you have printed the pair 4, 6 once, you do not need to print it again as 6, 4.

const pairSumBrute = (arr, k) => {
    let i = 0
    let map = new Map()
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        let diff = k - arr[i]
        if (arr.indexOf(diff)!=-1) {
            if (!map.has(arr[i]) && !map.has(diff)) {
                console.log(arr[i], diff)
                map.set(arr[i], diff)
            }
        }
        i++
    }
}
pairSumBrute([4, 6, 7, 2, 8, 9, 3, 10], 10)

const pairSum = (arr, k) => {
    const map = new Map()
    let i = 0
    while (true) {
        if (arr[i] == null || arr[i] == undefined)
            break
        i++
    }
    let count = i
    i = 0
    while (i <= count) {
        if (map.has(k - arr[i]))
            console.log(arr[i], k - arr[i])
        else
            map.set(arr[i], i)
        i++
    }
}
pairSum([4, 6, 7, 2, 8, 9, 3, 10], 10)