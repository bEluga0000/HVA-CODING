// Min and Max Difference in an Array:
// You are given an array of integers.Find the minimum and maximum difference between any two elements in an array.
// Sample Input:
// 5 4 7 8 4 6 11 9
// Sample Output:
// 0 7
// Explanation: Minimum Difference: 4 - 4 = 0. Maximum Difference: 11 - 4 = 7
const minMaxDiff = (arr)=>{
    let i = 0
    let max = -1
    let min = Number.POSITIVE_INFINITY
    while(true)
    {
        if (arr[i] == undefined || arr[i] == null)
            break
        else
        {
            let j = 0
            while (true) {
                if (arr[j] == undefined || arr[j] == null)
                    break
                else {
                    if (i != j) {
                        let diff = Math.abs(arr[i]-arr[j])
                        if(diff > max)
                            max = diff
                        if(diff<min)
                            min = diff
                    }
                }
                j++
            }
        }        
        i++
    }
    console.log(min,max)
}
minMaxDiff([5,4,7,8,4,6,11,9])