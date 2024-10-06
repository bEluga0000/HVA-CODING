// Count Vowels and Consonants
// You are given a String.Count the number of vowels and consonants the string has.Print the number of vowels followed by the number of consonants.
//     Note: The string may contain other character like space and full stop.
// Vowels are alphabets belonging to the following group - { a, e, i, o u }.Consonants are rest of the alphabets that do not belong to the group - { a, e, i, o u }.
// Sample Input: 
// Hello World
// Sample Output:
// 3 7
// Explanation: The string has 3 vowels and 7 consonants.

const vowelsAndConstants = (str)=>{
    let i = 0
    let volCount = 0
    let constCount = 0
    while(true){
        if(str[i] == undefined || str[i] == null)
            break
        else
        {
            if(str[i] !=" "){
                if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] =="u")
                    volCount++
                else
                    constCount++
            }
        }
        i++
    }
    console.log(volCount,constCount)
}
vowelsAndConstants("Hello World")