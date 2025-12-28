// function syntx

function callName(){
    var a1 = 20;
    var a2 = 10;
    console.log(a1+a2);
}
callName(); // 30


function isName (a,b){
    var result = (a+b);
    console.log(result);
}
isName(10, 15); // 25

let a5 = [1, 2, 3]
function sameOfArray(arr){
    for(let i=0; i<arguments.length; i++){
        arr[i]
    }
    console.log(arr);
}
sameOfArray(a5);

let a10 = [2, 3, 5]
function totalArrray (ars){
    var sum = 0
    for(let a11 = 0; a11 < ars.length; a11++){
        sum+=ars[a11];
    }
    console.log(sum)
}
totalArrray([1,2,3]);


function suMs(num){
    let result = num * num;
    return result;
}
  
    let level2 = suMs(5);
    console.log(level2);

function differents(num1, num2){
    let gap = (num1 - num2);
    return gap
}
    let ages = differents(50, 20);
    console.log("age",ages);

    let level = differents(30,10);
    console.log("level",level);


function bill (price1, price2){
    return price1+price2
}
    let bills = bill(10, 50);
    console.log(bills);  // 60





function doMath (math1, math2){
    let tot = math1 + math2
    let tot1 = math1 - math2
    let tot2 = math1 * math2
    let tot3 = math1 / math2
    return tot;
}
    let tot_Sum = doMath(60,20);
    console.log(tot_Sum);




function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
let qa = isEven(6);
console.log(qa);

let ba = isEven(95);
console.log(ba);




function sumOfnum(numbers){
    let sumss = 0
    for(let number of numbers){
        sumss+=number
       // return sumss

    }
    console.log(sumss)
    return sumss
}
sumOfnum([1, 2, 3])





let ss =[1, 2, 3, 4]
let tox = sumOfnum(ss);
console.log(tox);

let df =[2,5]
let fox = sumOfnum(df)
console.log(fox);

// sum all even number
function sumOfarray(number){
  let op = 0
  for(num of number){
    if(num % 2 === 0){
     op+=num
    }
  }
  console.log(op)
  return op
}
sumOfarray([1,2,3,5,6,7,8]) // 16
 
sumOfarray([2,5,6]) // 8

sumOfarray([2,4,6]) // 12

// 
function oddOfArray (numa){
  let odd = []
    for(let level of numa){
      if(level % 2 === 1){
        odd.push(level)
      }
    }
    //  console.log(odd)
     return odd
}
let pox = [1,2,3,5,6,7,8,9]
let dox = oddOfArray(pox)
console.log(dox)