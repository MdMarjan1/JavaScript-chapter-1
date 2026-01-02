// function maxOFFthree (num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         return num1
//     }
//     else if(num2 > num3 && num2 > num1){
//         return num2
//     }
//     else{
//         return num3
//     }
// }
// let total = maxOFFthree(1150, 2000, 350)
// console.log(total)

// let max = Math.max(10, 9, 25, 45, 3, 7,15)
// console.log(max)

//-------------------------------------------

// function heightsos(hil){
//     let iok= hil[0]
//     for(let kok of hil){
//         if(kok > iok){
//             iok = kok
//         }
//     }
//     return iok
// }

// let dox = [25, 30, 10, 5, 59, 85, 1005, 47];
// let mazN = heightsos(dox)
// console.log(mazN)


// -----------------------------------------------

// function woodcount(chairCount, tableCount, bedCount){
//     let perChairwood = 3
//     let pertablewood = 10
//     let perBedwood = 50

//     let totalChair = perChairwood * chairCount
//     let totalTable = pertablewood * tableCount
//     let totalperBedwood = perBedwood * bedCount

//     let finalCount = totalChair + totalTable + totalperBedwood
//     return finalCount


// }

// let totals = woodcount(3, 15, 50)
// console.log(totals)

// ----------------------------------------------------

// function CheapPhone(price){
//     let lo1 = price[0]
//     for(let lowPh of price){
//         if(lowPh < lo1){
//             lo1 = lowPh
//         }

//     }
//     return lo1

// }

// let phnPrices = [2000, 10000, 10500, 9000, 100000]
// let ios = CheapPhone(phnPrices)
// console.log(ios)

// --------------------------------------------------------

// let phones =[
//     {name: "Samsung", camera: "25px", price: 500, color:"white"},
//     {name: "Nokia", camera: "50px", price: 25300, color:"blue"},
//     {name: "Vivo", camera: "15px", price: 5000, color:"red"},
//     {name: "xiomi", camera: "65px", price: 45000, color:"Orange"},
//     {name: "Reami", camera: "36px", price: 35000, color:"grey"},
// ]


// function getCheapPhone(pera){
//     let min = pera[0];
//     for(let phn of pera){
//         if(phn.price < min.price){
//             min = phn
//         }
//     }
//     return min
// }

// let chop = getCheapPhone(phones)
// console.log(chop)

// ---------------------------------------------------------------------


let products =[
    {name: "shampoo", price: 250},
    {name: "soup", price: 50},
    {name: "box", price: 570},
    {name: "potato", price: 150},
    {name: "bendi", price: 350},
]

function totalCost(costs){
    let soms = 0
    for(let cost of costs){
        soms += cost.price 
    }
    return soms
}

let money = totalCost(products)
console.log(money);

// ----------------------------------------------------------