function greet(name) {
    console.log(`Hello,${name}!`)
}
greet("Beluga")
greet("Alice")

const greetDefault = (guest)=>{      
    guest ? console.log(`Hello,${guest}!`) : console.log(`Hello,Guest!`)
}
greetDefault()
greetDefault("Beluga")

const greetFuncExpression = function(name){
    console.log(`Hello,${name}!`)
}
greetFuncExpression("Beluga")

const greetArrowFunc = (name) => {
    console.log(`Hello,${name}!`)
}
greetArrowFunc("Beluga")
greetArrowFunc("Alice")

