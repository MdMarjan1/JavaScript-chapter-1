// Practice 01
function maxOFFthree (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }
    else if(num2 > num3 && num2 > num1){
        return num2
    }
    else{
        return num3
    }
}
let total = maxOFFthree(1150, 2000, 350)
// console.log(total)

let max = Math.max(10, 9, 25, 45, 3, 7,15)
// console.log(max)

//-------------------------------------------

// Practice 02
function heightsos(hil){
    let iok= hil[0]
    for(let kok of hil){
        if(kok > iok){
            iok = kok
        }
    }
    return iok
}

let dox = [25, 30, 10, 5, 59, 85, 1005, 47];
let mazN = heightsos(dox)
// console.log(mazN)


// -----------------------------------------------

// Practice 03
function woodcount(chairCount, tableCount, bedCount){
    let perChairwood = 3
    let pertablewood = 10
    let perBedwood = 50

    let totalChair = perChairwood * chairCount
    let totalTable = pertablewood * tableCount
    let totalperBedwood = perBedwood * bedCount

    let finalCount = totalChair + totalTable + totalperBedwood
    return finalCount


}

let totals = woodcount(3, 15, 50)
// console.log(totals)

// ----------------------------------------------------

// Practice 04
function CheapPhone(price){
    let lo1 = price[0]
    for(let lowPh of price){
        if(lowPh < lo1){
            lo1 = lowPh
        }

    }
    return lo1

}

let phnPrices = [2000, 10000, 10500, 9000, 100000]
let ios = CheapPhone(phnPrices)
// console.log(ios)

// --------------------------------------------------------

// Practice 05
let phones =[
    {name: "Samsung", camera: "25px", price: 500, color:"white"},
    {name: "Nokia", camera: "50px", price: 25300, color:"blue"},
    {name: "Vivo", camera: "15px", price: 5000, color:"red"},
    {name: "xiomi", camera: "65px", price: 45000, color:"Orange"},
    {name: "Reami", camera: "36px", price: 35000, color:"grey"},
]


function getCheapPhone(pera){
    let min = pera[0];
    for(let phn of pera){
        if(phn.price < min.price){
            min = phn
        }
    }
    return min
}

let chop = getCheapPhone(phones)
// console.log(chop)

// --------------------------------------------------------------

// Practice 06
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
// console.log(money);

// ----------------------------------------------------------

/*
 > upto 100 ------> 100
 > more than 101-200 ---> 90
 > more than 200 ----> 70
*/

// Practice 07
function discountPrice(quantity){
    if(quantity <= 100){
        let total = quantity * 100
         return total
    }
    else if(quantity >= 101 && quantity <= 200){
        let total = quantity * 90
         return total
    }
    else{
        let total = quantity * 70
        return total
    }
}
let pis = discountPrice(200)
//console.log(pis)

//-------------------------------------------------------------

/*
> frist 100 --->  100
> 101 to 200 ---> 90
> above200 ---> 70
*/

// Practice 08
function layredDiscountPrice (quantity){
    let frist100price = 100
    let second100Price = 80
    let third200up = 60

    if(quantity <= 100){
        let total = quantity * frist100price
        return total
    }
    else if(quantity <= 200){
        let frist100 = 100 * frist100price
        let second200 = quantity - 100
        let reminingTotal = second200 * second100Price
        let total = reminingTotal + frist100
        return total
    }
    else{
        let frist100 = 100 * frist100price
        let second100total = 100 * second100Price
        let remaining50 = quantity - 200
        let reminingTotal = remaining50 * third200up
        let total = frist100 + second100total + reminingTotal
        return total

    }
}
let price = layredDiscountPrice(250)
//console.log(price)

//-------------------------------------------------------

// Practice 09
function calCulator(a, b, operation){
    if(operation === "add"){
        return a + b
    }
    else if(operation === "subtract"){
        return a - b
    }
    else if(operation === "multiply"){
        return a * b
    }
    else if(operation === "dividad"){
        return a / b 
    }
    else{
        return "there are no possible"
    }
}

let numbers = calCulator(5, 6, "multiply")
// console.log(numbers)

//---------------------------------------------------------

let x = 50
let y = "60"
let ao = x !== y
//console.log(ao)

let ap= x === y
// console.log(ap)

//------------------------------------------------------------

// Practice problem Task

// Problem 01
function LowesrNumber (number){
    let zero =number[0]
    for(let nos of number){
        if(nos < zero){
            zero = nos
        }
    }
    return zero
}
let inputs = LowesrNumber([167, 190, 120, 165, 137])
// console.log(inputs)

//------------------------------------------------------------

// Problem 02
function smallestName(names){
    let sSize = names[0]
    for(let sName of names){
        if(sName.length < sSize.length){
            sSize = sName
        }
    }
    return sSize
}
let smallNames = smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed', 'rk'])
console.log(smallNames)

//----------------------------------------------------------

// Problem 03

// let perLaptopPrice = 35000 
// let perTabletPrice = 15000
// let perMobilePrice = 20000

// let totalLaptopPrice = perLaptopPrice * 30
// let totalTabletPrice = perTabletPrice * 5
// let totalMobileprice = perMobilePrice * 15

// let totalPriceAll = totalLaptopPrice + totalTabletPrice + totalMobileprice
//console.log(totalPriceAll)

function totalDevicePrice(p1, p2, p3){
    let perLaptopPrice = 35000 
    let perTabletPrice = 15000
    let perMobilePrice = 20000

    let totalLaptopPrice = perLaptopPrice * p1
    let totalTabletPrice = perTabletPrice * p2
    let totalMobileprice = perMobilePrice * p3

    let totalPriceAll = totalLaptopPrice + totalTabletPrice + totalMobileprice

    return totalPriceAll

}

let priceValue = totalDevicePrice(30, 5, 15)
// console.log(priceValue)

//----------------------------------------------------------------

//Problem 04
    let phone = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice (pay){
        let sama = 0
        for(let phnPrice of pay){
            sama += phnPrice.price
        }
        let divide = sama / pay.length

       return Math.round(divide)
    }

    let totalPhnPrice = findAveragePhonePrice(phone)
    // console.log(totalPhnPrice)

//-----------------------------------------------------------

// Problem 05






