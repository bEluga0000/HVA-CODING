// You are given an integer array.Print the sum of all possible subarrays.
// A subarray is defined as a contiguous portion of an array.
// Sample Input:
// 3 7 5
// Sample Output:
// 52
// Explanation: All the subarrays are:
// 3
// 3, 7
// 3, 7, 5
// 7
// 7, 5
// 5
// Sum = 3 + (3 + 7) + (3 + 7 + 5) + 7 + (7 + 5) + 5 = 52
const sumSubarrays = (arr)=>{
    let i = 0
    let sum = 0
    while(true)
    {
        if(arr[i] == null || arr[i] == undefined)
            break
        let j = i
        let subSum = 0
        while(true){
            if(arr[j] == undefined || arr[j] == null)
                break
            subSum+=arr[j]
            sum += subSum
            j++
        }
        i++
    }   
    console.log(sum)
}
sumSubarrays([3,7,5])