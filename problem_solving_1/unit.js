// function kmTomile(km){
//     let mile = km * 0.621371
//     return mile
// }
//  let miles = kmTomile(5)
//  console.log(miles)


//  function miTokm(mil){
//     let km = mil * 1.60934
//     return km
// }
//  let kilos = miTokm(25)
//  console.log(kilos);



// problem 01
// c to f  ------f=(9c+(32*5))/5

function celTofah (tem){
    let a01 = (tem * (9/5))+32

      return a01
}

let a02 = celTofah(25)
//console.log(a02)



// Problem 02
// ---------------------------------------------------------------
//   function numberCheaking ( arr ){
//     let sums = 0
//     for(let a03 of arr){
//         if(a03 === 5){
//             sums++

//         }
//     }
//     return sums
//   }
//   let tots = numberCheaking([5,6,11,12,98, 5])
//   console.log(tots)
// --------------------------------------------------------
  function numberCheaking ( arr, arrTnum ){
    let sums = 0
    for(let a03 of arr){
        if(a03 === arrTnum){
            sums++

        }
    }
    return sums
  }
  let tots = numberCheaking([5,6,11,12,98, 5, 6, 5], 5)
//   console.log(tots)
// -------------------------------------------------------------




// Problem 03
// --------------------------------------------------------------
function countVowel(word){
    let aks = 0
    for(let a05 of word){
        if(a05 === 'a'){
            aks++
        }
        else if(a05 === 'e'){
            aks++
        }
        else if(a05 === 'i'){
            aks++
        }
        else if(a05 === 'o'){
            aks++
        }
        else if(a05 === 'u'){
            aks++
        }
    }
    return aks

}
let tat = countVowel("education") //euaio
//console.log(tat)

// --------------------------------------

let rot = countVowel("spdfklnm")
//console.log(rot)
//----------------------------------------------


// Problem 04
//-----------------------------------
function bigWord(words){
    let word = words.split(" ")
    let highs = ""
    for(let so1 of word){
        if(so1.length > highs.length){
            highs = so1
        }
    }
    return highs
}
  let big = bigWord(" I am learning Programming to become a programmer")
 // console.log(big)


//  Problem 05
// -----------------------------
function ranNumber(numb){
    let x1 = Math.round(Math.random()*10+20)


    return x1

}
let xox = ranNumber(5)
console.log(xox)

//console.log(Math.random())

