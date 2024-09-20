// Linear Search:
// You are given an integer array.Take another number as input and search if the number is present in the given array.If the number is present, print "Yes", else print "No".
// Sample Input 1:
// 11 1 13 21 3 7
// 3
// Sample Output 1:
// Yes
// Sample Input 2:
// 11 1 13 21 3 7
// 5
// Sample Output 2:
// No
const linearSearch = (arr,key)=>{
    let i = 0
    let found = false
    while(true)
    {
        if(arr[i] == undefined || arr[i] == null)
            break
        if (arr[i] == key)
        {
            found = true
            break
        }
        i++
    }
    console.log(found)
}
linearSearch([11,1,13,21,3,7],1)
linearSearch([11, 1, 13, 21, 3, 7],5)