// Capitalize nth Character
// You are given a String and and an index.Capitalize the character at the nth position in the given String.
//     Note: You can consider the index to start from 0.
// Sample Input:
// programming
// 6
// Sample Output:
// prograMming

const capitalize = (str,n)=>{
    let capChar = str[n]
    capChar = capChar.toUpperCase()
    let outStr = ""
    let i = 0
    while(true){
        if(str[i] == undefined)
            break
        if(i == n)
            outStr+=capChar
        else
            outStr+=str[i]
        i++
    }
    console.log(outStr)
}
capitalize("programming",6)

const optimisedCapitalize = (str,n)=>{
    let begin = str.slice(0,n)
    let capChar = str[n].toUpperCase()
    let end = str.slice(n+1)
    console.log(begin+capChar+end)
}
optimisedCapitalize("programming", 6)