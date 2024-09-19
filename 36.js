// Print the following pattern based on the given input.
// Sample Input:
// 6
// Sample Output: 
// *
//  *
//   *
//    *
//     *
//      *
//     Explanation: Since the input is 6, it prints a total of 6 lines.In each line, it prints only one star, but the leading space increases.
const startPattren3 = (num) => {
    let i = 1
    while (i <= num) {
        console.log(" ".repeat(i-1) + "*")
        i++
    }
}
startPattren3(6)