// You are given an array of integers.Find the element that appears the maximum number of times in an array.If multiple elements appear maximum number of times, you can print any.
// Sample Input:
// 5 4 7 11 8 4 6 11 9
// Sample Output:
// 4
// Explanation: Both 4 and 11 appear 2 times.We can print any of 4 and 11, so we print 4.

const maximuRepeatMap = (arr) => {
    const map = new Map()
    let i = 0
    while (true) {
        if (arr[i] == undefined || arr[i] == null)
            break
        if(map.has(arr[i]))
            map.set(arr[i],map.get(arr[i])+1)
        else
            map.set(arr[i],1)
        i++
    }
    // console.log(map)
    let max = 0
    let maxVal = 0
    map.forEach((val,key)=>{
        if(max<val)
        {
            maxVal = key
            max = val
        }
    })
    console.log(`${maxVal} repeated  ${max} times  which make that as the most repeated number in arr`)
}
maximuRepeatMap([5,4,7,11,8,4,6,11,9])