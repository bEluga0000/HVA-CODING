// Check Array for Ascending Order:
// You are given an array of integers.Check if the array is in Ascending Order.If yes, print "Yes", else print "No.
// Sample Input 1:
// 3 5 10 13 16 12 14
// Sample Output 1:
// No
// Explanation 1: The given array is not in ascending order.
// Sample Input 2:
// 3 5 10 13 16 25 33
// Sample Output 2:
// Yes
// Explanation 2: The given array is in ascending order.

const checkAscendingOrder = (arr)=>{
    let i = 0
    let ascending = true
    while(true)
    {
        if (arr[i+1] == undefined || arr[i+1] == null)
            break
        if(arr[i] >= arr[i+1])
        {
            ascending = false
            break
        }
        i++
    }
    console.log(`Given array is ${ascending? "":"not"} in ascending order`)
}
checkAscendingOrder([3,5,10,13,16,25,33])
checkAscendingOrder([3,5,10,13,16,12,14])