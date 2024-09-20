// Check Array for Negative Numbers:
// You are given an array of integers.Check if the array has any negative numbers.If the array has any negative number, print yes.Else, print no.
// Sample Input 1:
// 11 1 13 21 3 7
// Sample Output 1:
// No
// Explanation 1: The given array has no negative number. 
// Sample Input 2:
// 6 8 9 - 1 14 8 - 3 6
// Sample Output 2:
// Yes
// Explanation 2: The given array has negative numbers, -1 and - 3.
const negativeSearch = (arr) => {
    let i = 0
    let found = false
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        if (arr[i] <0) {
            found = true
            break
        }
        i++
    }
    console.log(found)
}
negativeSearch([11, 1, 13, 21, 3, 7])
negativeSearch([6,8,9,-1,14,8,-3,6])