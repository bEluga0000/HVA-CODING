// Search Word in a Sentence:
// You are given a sentence S.You are also given a word W.Check if the word W is present in the sentence S.If present print yes, else print no.
// The input word W will have no space in between.
// Sample Input 1:
// How are you doing today ?
//     today
// Sample Output 1:
// Yes
// Sample Input 2:
// How are you doing today ?
// do
// Sample Output 2:
// No


const findWord = (str,word)=>{
    let ind = str.split(" ").indexOf(word)
    ind == -1 ? console.log("No") :  console.log("Yes")
}
findWord("How are you doing today ?","today")
findWord("How are you doing today ?", "do")

