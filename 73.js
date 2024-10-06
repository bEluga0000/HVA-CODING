// You are given two String S1 and S2.Determine if the two strings are anagrams of each other.
// Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.For example, the word "listen" is an anagram of "silent".
//     Note: You will have to ignore case and white spaces.
// Sample Input 1:
// Silent
// Listen
// Sample Output 1:
// Yes
// Explanation 1: Silent and Listen has the same letters.If we ignore case, they are anagrams.
// Sample Input 2: 
// New York Times
// monkeys write
// Sample Output 2:
// Yes
// Explanation 2: If we don't consider white space and case-sensitive, "New York Times" and "monkeys write" are anagrams. They have same characters repeating same number of times.

const anagramsStr = (str1,str2)=>{
    let map1 = new Map()
    let map2 = new Map()
    let lower1 = str1.toLowerCase()
    let lower2 = str2.toLowerCase()
    let i = 0
    while(true)
    {
        if(lower1[i] == undefined)
            break
        if(lower1[i]!=" "){
            if (map1.has(lower1[i]))
                map1.set(lower1[i], map1.get(lower1[i]) + 1)
            else
                map1.set(lower1[i], 1)
        }
        i++
    }
    let j = 0
    while (true) {
        if (lower2[j] == undefined)
            break
        if (lower2[j] != " ") {
            if (map2.has(lower2[j]))
                map2.set(lower2[j], map2.get(lower2[j]) + 1)
            else
                map2.set(lower2[j], 1)
        }
        j++
    }
    let anagrams = true
    map1.forEach((val,key)=>{
        if(!map2.has(key))
        {
            anagrams = false
            return
        }
        if(map2.get(key) != val)
        {
            anagrams = false
            return
        }
    })
    anagrams? console.log("Yes") :console.log("No")
}
anagramsStr("Silent","Listen")
anagramsStr("New York Times","monkeys write")