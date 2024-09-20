// Count Elements until Negative:
// You are given an integer array.Count all the numbers present in the array till you encounter a negative number and print the count.If no negative number is present, count till the end.
// Sample Input:
// 10 5 6 3 - 1 4 - 3 5 6
// Sample Output:
// 4
// Explanation: There are 4 elements before the first negative number appears.

const countEleNegative =(arr)=>{
    let count = 0
    let i = 0
    while(true)
    {
        if(arr[i] == undefined || arr[i] == null || arr[i]<0)
            break
        else
            count++
        i++
    }
    console.log(`after ${count} number we  get the negative number in this  array`)
}
countEleNegative([10,5,6,3,-1,4,-3,5,6])