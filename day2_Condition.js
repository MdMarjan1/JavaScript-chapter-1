// var x = null;
// console.log(x,"valu is null"); //null  space  open

// var y = 
// console.log(y);  //undefined

// let x =5;
// let y =15;
// if(x!=y){
//     console.log('true fuck');  //it define there 2 value are not same
// }

// problem 1
// let paidMoney = 550;
// if(paidMoney > 500){
//     console.log(" you got Burger & free coke");
// }
// else{
//     console.log(" you can only Coke 30tk")
// }


// problem 2
// let bmi = 29;
// if(bmi < 18.5){
//     console.log("underweight");
// }
// else{
//     if(bmi>=18.5 && bmi<=24.9){
//         console.log("Normal Weight");
//     }
//     else if(bmi>=25 && bmi<=29.9 ){
//         console.log("overwight");
//     }
//     else{
//         console.log("you are obese");
//     }
// }

// var Weight = 30;
// var height = 1.5;

// var bmi = Weight / (height*height); // bmi calculate
// if(bmi < 18.5){
//     console.log("underweight");
// }
// else{
//     if(bmi>=18.5 && bmi<=24.9){
//         console.log("Normal Weight");
//     }
//     else if(bmi>=25 && bmi<=29.9 ){
//         console.log("overwight");
//     }
//     else{
//         console.log("you are obese");
//     }
// }


// problem 3
// var mark = 65;
// if(mark>=90 && mark<=100){
//     console.log("A");
// }else if(mark>=80 && mark<=89){
//     console.log("B");
// }else if(mark>=70 && mark<=79){
//     console.log("C");
// }else if(mark>=60 && mark<=69){
//     console.log("D");
// }else{
//     console.log("F");
// }    


//problem 4
// const yourMark = 15;
// const friendMark = 30;
// if(yourMark>80){
//     // console.log("then go for a lunch");
//     if(friendMark>80){
//         console.log("then go for a lunch")
//     }else if(friendMark<80 && friendMark>=60){
//         console.log("good luck next time.");
//     }else if(friendMark<60 && friendMark>=40){
//         console.log("keep your friend's message unseen");
//     }else if(friendMark<40){
//         console.log("block your friend");
//     }
// }
// else{
//     console.log("go to home and sleep and act sad");
// }


// problem 5
// if else
// let num1 = 20;
// let num2 = 15;
// let result;

// if(num1>num2){
//     result= num1*2;
// }else{
//     result=num1+num2;
// }
// console.log(result);

//ternary op
let num1 = 25;
let num2 = 15;
var result = num1>num2 ? num1*2 : num1+num2;
console.log(result);  

// problem 6
// ticket fare calculator

var age = 50;
var fare = 800;
var isStudent = true;
if (age < 10){
    console.log("ticket free");
}
else if(age >= 60){
    var discount = fare*15/100;
    var paidMoney = discount-fare;
    console.log(paidMoney,"citizens 15%");

}else if(isStudent === true){
    var discount = fare*50/100;
    var paidMoney = discount-fare;
    console.log(paidMoney,"student 50%");
}
else{
    console.log("you will pay 800tk")
}

