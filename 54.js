// First Perfect Square:
// You are given an array of integers.Print the first element of the array that is a perfect square.If there are no perfect squares, print No.
// Sample Input 1:
// 3 6 7 4 6 9 1 23
// Sample Output 1:
// 4
// Explanation 1: In the given array, the first perfect square to appear is 4.
// Sample Input 2:
// 10 8 14 11 6 15
// Sample Output 2:
// No
// Explanation 2: In the given array, there are no perfect squares.
const perfectSquare = (arr)=>{
    let i = 0
    let perfectSquareNumber = null
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        else
        {
            console.log(Math.sqrt(arr[i]))
            const sqrtVal = Math.sqrt(arr[i])
            if (Number.isInteger(sqrtVal)) {
                perfectSquareNumber = arr[i]
            }
            i++
        }
    }
    console.log(perfectSquareNumber)
}
perfectSquare([3,6,7,4,6,9,1,23])
perfectSquare([10,8,14,11,6,15])