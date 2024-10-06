// You are given a String and a Character.Count how many times the Character is present in the given String.If the Character is not present in the String, print "No".
// Sample Input 1: 
// Hello World
// l
// Sample Output 1:
// 3
// Explanation 1: The Character l is present 3 times in the String "Hello World".
// Sample Input 2: 
// Hello World
// a
// Sample Output 2:
// No
// Explanation 2: The Character a is not present in the String "Hello World".

const charString = (str,k)=>{
    let count = 0
    let i = 0
    while(true){
        if(str[i] == undefined || str[i] == null)
            break
        if(str[i] == k)
            count++
        i++
    }
    count == 0 ? console.log("No") : console.log(count)
}
charString("Hello world","l")
charString("Hello world", "a")