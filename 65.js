// First Repeat in an Array:
// You are given an integer array.Print the first number that repeats itself.If no number repeats in the array, print No. 
// Sample Input 1:
// 5 11 4 7 8 4 6 11 7
// Sample Output 1:
// 11
// Explanation 1: In the given array, 11 is the first number that repeats itself.
// Sample Input 2:
// 11 1 13 21 3 7
// Sample Output 2:
// No
// Explanation 2: The given array doesn't contain any duplicate element, hence we print No.

const firstRepeat = (arr) => {
    const map = new Map()
    let indi = []
    let i = 0
    let repeat = false
    while (true) {
        if (arr[i] == null || arr[i] == undefined)
            break
        else {
            if (map.has(arr[i])) {
                indi.push(map.get(arr[i]))
                repeat = true
            }
            map.set(arr[i], i)
        }
        i++
    }
    let small = i
    i = 0
    if (!repeat)
        console.log("No")
    else {
        while (true) {
            if (indi[i] == null || indi[i] == undefined) {
                console.log(arr[small])
                break
            }
            else {
                if (small > indi[i])
                    small = indi[i]
            }
            i++
        }
    }
}

firstRepeat([5, 11, 4, 7, 8, 4, 6, 11, 7])