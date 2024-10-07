// Password Validator
// Write a program that takes a string S as input and checks if the string S satisfies all the following conditions to be a strong password:
// Contains at least 8 characters.
// Contains at least one lowercase character.
// Contains at least one uppercase character.
// Contains at least one number.
// Contains at least one special character.
// If the string S satisfies all conditions, print yes, else print no.
// Sample Input 1: 
// Abcd @123
// Sample Output 1:
// Yes
// Sample Input 2:
// Xyz123
// Sample Output 2:
// No

const passwordVlidator = (str)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d\s@$!%*?&]{8,}$/
    if(regex.test(str))
        console.log("Yes")
    else
        console.log("No")
}
passwordVlidator("Abcd @123")
passwordVlidator("Xyz123")