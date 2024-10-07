// Remove Duplicate Characters
// You are given a string.Create a new string that contains each character of the original string only once, preserving the order of their first occurrences.
// Sample Input:
// programming
// Sample Output:
// progamin
// Explanation: We print a new string removing the repeating characters.R, m and g were repeating in the given string "programming" and hence were removed from the new string.

const removeDuplicate = (str)=>{
    const map = new Map()
    let outStr = ""
    let i = 0
    while(true){
        if(str[i] == undefined)
            break
        if(!map.has(str[i]))
        {
            outStr+=str[i]
            map.set(str[i],1)
        }
        i++
    }
    console.log(outStr)
}
removeDuplicate("programming")
