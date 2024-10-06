// You are given an integer array.Print all the subarrays.
// A subarray is defined as a contiguous portion of an array.
// Print the subarrays in an order specified in the sample input / output.
// Sample Input:
// 3 2 1
// Sample Output:
// 3
// 3 2
// 3 2 1
// 2
// 2 1
// 1
const subarrays = (arr)=>{
    let i = 0
    while(true)
    {
        if(arr[i] == undefined || arr[i] == null)
            break
        let j = i
        let str = ""
        while(true){
            if(arr[j] == null || arr[j] == undefined)
                break
            str+=arr[j]+" "
            // while(k<=j)
            // {
            //     str+=arr[k]+""
            //     k++
            // }
            console.log(str)
            j++
        }
        i++
    }
}
subarrays([3,2,1])