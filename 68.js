// Common Elements in Two Arrays:
// You are given an integer n and two integer arrays each of length n.Print all the common elements between these two arrays.
// Print the elements in an order as they appear in the first array.If one common element is repeated multiple times, print it just once.If there are no common elements, print No.
// Sample Input 1:
// 7
// 4 9 2 5 7 4 3
// 9 6 4 8 6 1 12
// Sample Output 1:
// 4 9
// Explanation 1: In the given arrays, 4 is repeating multiple times, but you need to print it just once.Also, the order of printing 4 and 9 are as per their appearance in the 1st array.
// Sample Input 2:
// 7
// 2 7 6 4 7 4 3
// 8 5 9 1 5 8 9
// Sample Output 2:
// No
// Explanation 2: No elements are common in the two given array.
const commonEle = (n,arr1, arr2) => {
    const map = new Map()
    const map2 = new Map()
    let i = 0
    while (i<n) {
        if(!map.has(arr1[i]))
        {
            map.set(arr1[i],i)    
        }
        map2.set(arr2[i],i)
        i++
    }
    let str = ""
    map.forEach((val,key)=>{
        if(map2.has(key))
            str+=key+" "
    })   
    if(str.length > 0)
        console.log(str)
    else
        console.log("No")
}
commonEle(7, [4,9,2,5,7,4,3], [9,6,4,8,6,1,12])