// Problem 01
function fourNumbers (num1, num2, num3, num4) {
    let totals = num1*num2*num3*num4
    return totals
}
   let nu =  fourNumbers(5,10,25,30)
   console.log(nu)


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



// Problem 03
function makeAvg(number){
   let sum = 0
   for(let i= 0; i<number.length; i++){
        sum+=number[i]
   }
    var aa = sum / number.length
   // console.log(aa)
    return aa;
}
makeAvg([30,25,12,5,48])
// ----------------------------------------
// function makeAvg(number){
//    let sum = 0
//    for(num of number){
//         sum+=num
//    }
//     var aa = sum / number.length
//     console.log(aa)
//     return aa;
// }
// makeAvg([30,25,12,5,48])



// Problem 04

//  function countZero (str){
//      let sos = 0
//      for(nas of str){
//           if(nas === '1'){
//           nas++
//           sos+=nas
//           }   
//      }
//      return sos
//  }
// let fonal = countZero('10010010001')
// console.log(fonal)
// ---------------------------------------
function count_zero (str1){
     let soa = 0
     for(nou of str1){
          if(nou === '0'){
          soa++
          }
     }
     return soa
}
let final1 = count_zero('101100010')
//console.log(final1)



// Problem 05
function odd_even(jos){
     if(jos%2 === 1){
          return "odd"
     }
     else{
          return "even"
     }
}


let sas = odd_even(5)
console.log(sas)