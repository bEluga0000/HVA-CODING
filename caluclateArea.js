const calculateArea = (width,height)=>{
    return width*height
}
const area = calculateArea(5,10)
console.log(area)

const calculateAreaWithDefaults = (width,height)=>{
    return width && height ? width*height : 1
}
const areawithDefaults1 = calculateAreaWithDefaults()
const areawithDefaults2 = calculateAreaWithDefaults(5,10)
console.log(areawithDefaults1)
console.log(areawithDefaults2)

const calculateAreaWithExpressionFunc = function(width,height){
    return width * height
}
const areaExpressionFunc = calculateAreaWithExpressionFunc(5,10)
console.log(areaExpressionFunc)