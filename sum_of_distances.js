closestToSum = (sum, distances) => {
    let closest = 999
    let num
    distances.forEach((distance) => {
        if((sum - distance)< closest && (sum-distance >= 0)){
            closest = sum-distance
            num = distance
        }
    })
    return num;
}

sumArray = (arr) => {
    return arr.reduce((total, value) => total + value)
}

chooseBestSum = (maxSum, num, arrDistances) => {
    let countDistance = []
    for(let k=0; k<num;k++){
        for(let l=k; l<num;l++){
            for(let m=l; m<arrDistances.length - 2;m++){
                countDistance = [...countDistance, sumArray([arrDistances[k],arrDistances[l+1], arrDistances[m+2]])]
            }
        }
    }
    let result = closestToSum(maxSum, countDistance)
    return result
}

const result1 =  chooseBestSum(174, 3, [50, 55, 57, 58, 60])
console.log(result1)
// const result2 = chooseBestSum(230, 3,  [91, 74, 73, 85, 73, 81, 87])
// console.log(result2)