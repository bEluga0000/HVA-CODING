// You are given two arrays.Check if the second array is a subarray of the first array.Print yes if it is, else print no.
// A subarray is defined as a contiguous portion of an array.
// Sample Input 1:
// 3 6 2 1 7 6 4 9 7
// 7 6 4 9 7
// Sample Output 1:
// Yes
// Sample Input 2:
// 3 6 2 1 7 6 4 9 7
// 7 6 4 9 6
// Sample Output 2:
// No
const isSubArray = (arr1,arr2)=>{
    let i = 0
    let found = false
    while(true)
    {
        if(arr1[i] == null || arr1[i] == undefined || found)
            break
        else
        {
            if(arr1[i] == arr2[0])
            {
                let k = i+1
                let j = 1
                while(true)
                {
                    if (arr2[j] == null || arr2[j] == undefined) {
                        found = true
                        break
                    }
                    if(arr1[k]!= arr2[j] || arr1[k] == undefined || arr1[k] == null)
                    {
                        break
                    }
                    j++ ;k++
                }
            }
        }
        i++
    }
    found? console.log("Yes") : console.log("No")
}
isSubArray([3, 6, 2, 1, 7, 6, 4, 9, 7], [7,6,4,9,7])
isSubArray([3, 6, 2, 1, 7, 6, 4, 9, 7], [7, 6, 4, 9, 6])