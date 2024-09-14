const totalNum = (arr)=>{
    let i = 0
    while(true){
        if(arr[i] == undefined|null)
            break
        i++
    }
    console.log(i)
}
totalNum([1,2,3,4,5])