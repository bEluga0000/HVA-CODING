// Star Pattren1
// Print the following pattern based on the given input.
// Sample Input:
// 6
// Sample Output: 
// *
// **
// ***
// ****
// *****
// ******

const startPattren1 = (num)=>{
    let i = 1
    while(i<=num)
    {
        console.log("*".repeat(i));
        i++
    }
}
startPattren1(6)