const logANumber = (num)=>{
    console.log(num)
}
hightOrderFunc(1, logANumber)
hightOrderFunc(2, logANumber)

const callBackFunctionExpression = function (num) {
    console.log(num)
}
hightOrderFunc(3, callBackFunctionExpression)
const squareCallBackFuncExpression = function(num){
    console.log(num**2)
}
hightOrderFunc(2, squareCallBackFuncExpression)


const hightOrderFunc = (num,callback)=>{
    callback(num)
}
const hightOrderFuncForSum = (num1,num2, callback) => {
    callback(num1,num2)
}
hightOrderFuncForSum(2,3,(num1,num2)=>{
    console.log(num1,num2)
})



