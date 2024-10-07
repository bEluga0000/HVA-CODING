// Search Character in a String:
// You are given a string S.You are also given a character c.Check if the character c is present in the string S.If present print yes, else print no.
// Sample Input 1:
// abcdefgh
// f
// Sample Output 1:
// Yes
// Sample Input 2:
// abcdefgh
// r
// Sample Output 2:
// No

const findCharBrute =(str,k)=>{
    let found = false
    let i = 0
    while(true){
        if(str[i] == undefined)
            break
        if(str[i] == k)
        {
            found = true
            break
        }
        i++
    }
    found ? console.log("Yes") : console.log("No")
}

findCharBrute("abcdefgh", "f")
findCharBrute("abcdefgh", "r")
const findCharOpt = (str,k)=>{
    let ind = str.indexOf(k)
    ind==-1 ? console.log("No") : console.log("Yes")
}
findCharOpt("abcdefgh", "f")
findCharOpt("abcdefgh", "r")