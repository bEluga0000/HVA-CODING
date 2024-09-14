const proEle = (arr) => {
    let mul = 1
    let i = 0
    while (true) {
        if (arr[i] == undefined | null)
            break
        mul*= arr[i]
        i++
    }
    console.log(mul)
}
proEle([1, 2, 3, 4, 5])