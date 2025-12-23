
// problem 1
let fruits = ['apple', 'mango', 'banana', 'orange', 'dragon']
console.log(fruits[3]); //orange
fruits[2]='jambura';
console.log(fruits);  //'apple', 'mango', 'jambura', 'orange', 'dragon'


// problem 2

// let touristPlace = ['coxsbazar', 'sylhet', 'sajek']
// console.log(touristPlace); //'coxsbazar', 'sylhet', 'sajek'
// touristPlace.unshift('rangamati')
// console.log(touristPlace); // 'rangamati', 'coxsbazar', 'sylhet', 'sajek'
// touristPlace.push('sonargaw', 'moynamoti')
// console.log(touristPlace);
// touristPlace.pop();
// // console.log(touristPlace);

let touristPlace = ['coxsbazar', 'sylhet', 'sajek']
touristPlace.unshift('rangamati')
touristPlace.push('sonargaw', 'moynamoti')
touristPlace.pop();
console.log(touristPlace); //'rangamati', 'coxsbazar', 'sylhet', 'sajek', 'sonargaw'


//problem 3
//‘includes’
let books = ['herry poter', 'sherloks homes', 'learn js', 'p by python']
console.log(books.includes('learn js')); // true



//problem 4
let ed = [55, 44, 33];
let bf = '[]';
let df = { name: "JS" };
console.log(Array.isArray(ed)); // true
console.log(Array.isArray(bf)); // false
console.log(Array.isArray(df)); // false

//problem 5
let tourist = ['coxsbazar', 'sylhet', 'sajek']
let aa = [55, 44, 33];
let cOm=tourist.concat(aa);
console.log(cOm); // 'coxsbazar', 'sylhet', 'sajek', 55, 44, 33 


// // Problem  6
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const xy = colors.reverse();
// console.log(xy);

// let dd = []
// for(let x of colors){
//    // console.log(x);
//     dd.unshift(x)

// }
// console.log(dd);

let reverse_number =[];
for(let i = 0; i<colors.length; i++){
    let sd = colors[i];
    reverse_number.unshift(sd);
    //console.log(reverse_number);
}

 console.log(reverse_number);



// Problem 7
const number = [12, 98, 5, 41, 23, 78, 46];
for(let sTart = 0; sTart<number.length; sTart++){
    if(number[sTart]%2 == 0 ){
        console.log(number[sTart]);
    }
}

// // Problem  8
 var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
var rr = "";
for(var w of numbers){
    rr=rr + w;
    
}
console.log(rr);

const statements = 'I am a hard working person'
const reserved = "";
for(let a = statements.length; a>=0; a--){
    reserved+=a;
   

}
 console.log(reserved);



let statement = 'I am a hard working person'

console.log(statement.split(" ").reverse().join(" "));


