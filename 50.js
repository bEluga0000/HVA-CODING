// Sum until Zero:
// You are given an integer array.Add all the numbers present in the array till you encounter a 0 and print the sum.If no 0 is present, add till the end.
// Sample Input:
// 10 5 6 3 0 4 3 5 6
// Sample Output:
// 24
// Explanation: 10 + 5 + 6 + 3 = 24
const sumUntilZero = (arr)=>{
    let sum = 0
    let i = 0
    while(true){
        if(arr[i] == undefined || arr[i] == null || arr[i] == 0)
            break
        else
            sum+=arr[i]
        i++
    }
    console.log(sum)
}
sumUntilZero([10,5,6,3,0,4,3,5,6])