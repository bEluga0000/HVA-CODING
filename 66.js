// Subarray with a Given Sum:
// You are given an integer array and a target sum.Print a subarray that adds up to the target sum.
// If there are multiple possible subarrays, print the one that appears first and is smallest.And if, no such subarray is possible, print "Not Possible".
// A subarray is defined as a contiguous portion of an array.
// Sample Input 1:
// 3 6 2 1 7
// 10
// Sample Output 1:
// 2 1 7
// Explanation 1: 10 = 2 + 1 + 7.[2, 1, 7] is a subarray within the given array that adds up to 10.
// Sample Input 2:
// 3 6 2 1 7
// 14
// Sample Output 2: 
// Not Possible
// Explanation 2: No subarray within the given array adds up to 14.
const subarrySumBrute = (arr,k)=>{
    let found = false
    let i = 0
    let j ;
    while (true) {
        if (arr[i] == null || arr[i] == undefined || found)
            break
        else {
            let sum = 0
            j = i
            while(true)
            {
                sum+=arr[j] 
                if (arr[j] == null || arr[j] == undefined)
                    break
                else if(sum == k)
                {
                    found = true
                    break
                }
                else if(sum > k )
                    break
                j++
            }
        }
        i++
    }
    if(found == true)
    {
        i--
        let str = ""
        while(i<=j)
        {
            str+=arr[i]+" "
            i++
        }
        console.log(str)
    }
    else
    {
        console.log("Not Possible")
    }
}
subarrySumBrute([3, 6, 2, 1, 7], 10)
subarrySumBrute([3, 6, 2, 1, 7], 14)