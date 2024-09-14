const minEle = (arr) => {
    let min = Number.POSITIVE_INFINITY
    let i = 0
    while (true) {
        if (arr[i] == undefined | null)
            break
        if(arr[i]<min)
            min=arr[i]
        i++
    }
    console.log(min)
}
minEle([9, 2, 3, 4, 5])
// test