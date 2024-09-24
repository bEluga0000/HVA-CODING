// You are given an array of integers.Check if the given array is a Palindrome.If it is a Palindrome array, print yes, else print no.
//     Note: A Palindrome Array is when the reverse of the array is the same as the original array.
// Sample Input 1:
// 11 1 13 21 3 7
// Sample Output 1:
// No
// Sample Input 2:
// 17 1 13 1 17
// Sample Output 2:
// Yes
// Explanation 2: The reverse of the array reads same as the original array

// const isArrayPalidromeBrute = (arr) => {
//     let i = 0
//     while (true) {
//         if (arr[i] == undefined || arr[i] == null)
//             break
//         i++
//     }
//     const reversArr = new Array(i).fill(0)
//     let count = i
//     while (i > 0) {
//         reversArr[count - i] = arr[i - 1]
//         i--
//     }
//     console.log([[...reversArr]]== [[...arr]])
// }
// isArrayPalidromeBrute([11, 1, 13, 21, 3, 7])
// isArrayPalidromeBrute([17, 1, 13, 1, 17])
const isArrayPalindronBetter = (arr)=>{
    let i = 0
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        i++
    }
    let j = 0
    i--
    let Palindrome = true
    while(i>j)
    {
        // console.log(arr[i],arr[j])
        if(arr[i] != arr[j])
        {

            Palindrome = false
        }
        i--
        j++
    }
    console.log(Palindrome)
}
isArrayPalindronBetter([17,1,13,1,17])
isArrayPalindronBetter([11, 1, 13, 21, 3, 7])