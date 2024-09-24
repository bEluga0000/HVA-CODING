// You are given an integer array. Print the length of the longest subarray with increasing numbers.
// A subarray is defined as a contiguous portion of an array.
// Try not to use nested loop.
// Sample Input: 
// 5 4 4 7 6 3 2 4 6 8 6 3 6 8 5
// Sample Output: 
// 4
// Explanation: The given array has many subarrays with increasing numbers. 
// 4 4 7 -> 5 4 4 7 6 3 2 4 6 8 6 3 6 8 5
// 2 4 6 8 -> 5 4 4 7 6 3 2 4 6 8 6 3 6 8 5
// 3 6 8 -> 5 4 4 7 6 3 2 4 6 8 6 3 6 8 5
// Out of all these, the subarray with 4 increasing numbers is the longest.
const longestSubArrayIncresing = (arr)=>{
    let count = 1
    let maximum = 1
    let i =0
    while(true)
    {
        if(arr[i+1] == undefined | arr[i+1] == null)
        {
            maximum = Math.max(count,maximum)
            break
        }
        if(arr[i]>arr[i+1])
        {
            maximum = Math.max(count,maximum)
            count = 0
        }
        count++
        i++
    }
    console.log(maximum)
}
longestSubArrayIncresing([5,4,4,7,6,3,2,4,6,8,6,3,6,8,5])