// loop
// Problem 01
// for(let days = 1; days<=60; days++){
//         console.log(days,"I will invest at least 6 hrs every single day for next 60 days!")
// }



// Problem 2
//  find odd numbers
// for(let od = 61; od <= 100; od++){
//     if(od%2===1){
//         console.log(od);
//     }
// }

// problem 2
// find even numbers
// for(let ev=78; ev<=98; ev++){
//     if(ev%2!==1){
//         console.log(ev);
//     }
// }


// problem 3
// Display sum of all the odd numbers from 91 to 129.
let sum_odd = 0;
for(let num1=91; num1<=129; num1++){
    if(num1%2!==0){
        //console.log(num1);
        sum_odd+=num1;
    }
   
} console.log(sum_odd);  //2200


// Display sum of all the even numbers from 51 to 85.
let sum_even = 0;
for(let num2=51; num2<=85; num2++){
    if(num2%2===0){
        sum_even+=num2;
    }
} console.log(sum_even); // 1156