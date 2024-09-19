// Print the following pattern based on the given input.
// Sample Input:
// 6
// Sample Output: 
//      *
//     **
//    ***
//   ****
//  *****
// ******
//     Explanation: Since the input is 6, it prints a total of 6 lines.In each line, the star count increases and the leading space decreases.
const startPattren2 = (num)=>{
    let i = 1
    while(i<=num)
    {
        console.log(" ".repeat(num-i)+"*".repeat(i))
        i++
    }
}
startPattren2(6)