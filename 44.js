const avgEle = (arr) => {
    let sum = 0
    let i = 0
    while (true) {
        if (arr[i] == undefined | null)
            break
        sum += arr[i]
        i++
    }
    console.log(sum/i)
}
avgEle([1, 2, 3, 4, 5])