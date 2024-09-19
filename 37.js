// Print the following pattern based on the given input.
// Sample Input: 
// 5
// Sample Output: 
//     *
//    ***
//   *****
//  *******
// *********
// Explanation: Since the input is 5, it prints a total of 5 lines of stars. Each line has stars as well as leading spaces. In each line, the star count increases by 2, but the leading space decreases by 1. 
const startPattren4 = (num) => {
    let i = 1
    while (i <= num) {
        console.log(" ".repeat(num-i) + "*".repeat(i*2-1))
        i++
    }
}
startPattren4(5)