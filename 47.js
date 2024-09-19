// You are given an integer array.Find the index of the minimum element of the array.If there are multiple occurrences of the minimum number, print the index of the first occurrence of the minimum number.
//     Note: The index will be calculated from 1.
// Sample Input:
// 10 5 6 3 4 3 5 6
// Sample Output:
// 4
// Explanation: Here 3 is the minimum number.But since 3 is present more than once, we print the index of the first occurrence.
const indOfMin = (arr)=>{
    let i = 1
    let minInd = 0
    let min = arr[0]
    while(true)
    {
        if(arr[i] == undefined || arr[i] == null)
            break
        else
        {
            if(arr[i]<min)
            {
                min = arr[i]
                minInd = i
            }
        }
        i++
    }
    console.log(`Minimun value ${min} is at index ${minInd}`)
}
indOfMin([10,5,6,3,4,3,5,6])