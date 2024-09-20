// Maximum Sum of Two Consecutive Elements
// You are given an integer array.Print the maximum sum of two consecutive integers in the given array.
// Sample Input:
// 3 6 2 1 8 2 5 7 1
// Sample Output:
// 12
// Explanation: 5 + 7 = 12 is the maximum sum of two consecutive integers in the given array.

const maxConsecutiveELe = (arr)=>{
    let i =0
    let max = 0
    while(true)
    {
        if(arr[i+1] == undefined || arr[i+1] == null)
            break
        else{
            let sum = arr[i]+arr[i+1]
            if(max < sum)
                max = sum
        }
        i++

    }
    console.log(`Sum of two consecutive elements in the array is ${max}`)
} 
maxConsecutiveELe([3,6,2,1,8,2,5,7,1])