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
console.log(mazN)
