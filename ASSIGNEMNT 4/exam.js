// Problem 01

// function cashOut(cashMoney){
//     let charge = cashMoney * 1.75 / 100
//     if(typeof charge !== "number" || charge < 0){
//         return "invalid"
//     }
//     else{
//         return charge
//     }
// }

// let cashOutmoney = cashOut("")
// console.log(cashOutmoney)

// ------------------------------------------------------

// Problem 02
function cashOut(cashMoney){
    if(typeof cashMoney !== "number" || cashMoney < 0){
        return "invalid"
    }
    let charge = cashMoney * 1.75 / 100
    return charge
}
     let cashOutmoney = cashOut(2000)
     console.log(cashOutmoney)

//--------------------------------------------------------

// Problem 03



