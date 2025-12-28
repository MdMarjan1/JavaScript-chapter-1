// Problem 01
// function fourNumbers (num1, num2, num3, num4) {
//     let totals = num1*num2*num3*num4
//     return totals
// }
//    let nu =  fourNumbers(5,10,25,30)
//    console.log(nu)


// Problem 02
function doUble (nas){
    if(nas % 2 === 1){
        let result = nas * 2
        return result
    }
    else{
        let result = nas / 2
        return result
    }
}
let take = 5
let opo = doUble(5)
console.log(opo);