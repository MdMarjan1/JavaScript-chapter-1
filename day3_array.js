// array
// let nuMbers = [55, 22, 36, 49, 75, 88, 42, 10]
// console.log(nuMbers);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr[5] = 11

// console.log(arr); //show all element
// console.log(arr[2]); // 2

// arr.push(44, 55);  // push add lasr element
// console.log(arr);

// arr.pop();
// console.log(arr); // pop remove lasr element

// arr [15] = 20;  // [15 index number]
// console.log(arr);

// console.log(arr [14]); // undefined



let ab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ab1.length); // 10


let ab2 = ['apple', 'mango', 'banana', 'orange']
ab2.pop();
console.log(ab2) // apple mango  banana


let ab3 = ['apple', 'banana', 'orange', 'stovery']  
ab3.push('Cheri','dragon')
console.log(ab3);  //  'apple', 'banana', 'orange', 'stovery', 'Cheri', 'dragon'


let ab4 = ['car', 'boat', 'train', 'bus']
ab4.shift();
console.log(ab4); // 'boat', 'train', 'bus'


let ab5 = ['car', 'boat', 'train', 'bus']
ab5.unshift('track');
console.log(ab5);  //  'track', 'car', 'boat', 'train', 'bus' 

let ab6 = [1, 11, 22, 33, 44, 55]
ab6[1]=99;
console.log(ab6); // 1, 99, 22, 33, 44, 55 

let ab7 = ['apple', 'mango', 'banana', 'orange']
let ax = ab7[3]; 
console.log(ax); //Orange

let ab8 = ['apple', 'mango', 'banana', 'orange']
console.log(ab8[2]); // banana


let ab9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ab9);  //  1, 2, 3, 4,  5,  6, 7, 8, 9, 10
 

let ab10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ab10[12] = 20;
console.log(ab10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, <2 empty items>, 20

let ab11 = ['car', 'boat', 'train', 'bus']
console.log(ab11.indexOf('train')); // 2 --- train idex number


let ab12 = ['car', 'boat', 'train', 'bus']
console.log(ab11.indexOf('orange')); // -1  ------because this valu not avaiable array

let ab13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ab13[11]); // undefined



// slice
let ab14 = ['book', 'pencil', 'marker', 'box', 'pen']
let ac = ab14.slice(1,3)
console.log(ac);  // 'pencil', 'marker'

// splice hard
let ab15 =  ['car', 'boat', 'train', 'bus', 'ship', 'plen']
let an = ab15.splice(4);
console.log(an); //'ship', 'plen'

let ab16 =  ['car', 'boat', 'train', 'bus', 'ship', 'plen']
let am = ab16.splice(1, 2);
console.log(am); //boat train


// concat
let ab18 = [45, 55, 65, 75, 85, 95]
let ab19 = [10, 20, 30, 40, 50, 60]
let ab20 = ab18.concat(ab19);
console.log(ab20);  //  45, 55, 65, 75, 85, 95, 10, 20, 30, 40, 50, 60

// join
let ab21 = ['jaman', 'kamal', 'rohim', 'abdul']
console.log(ab21.join("|")); //jaman|kamal|rohim|abdul

// includes
let ab22 = ['jaman', 'kamal', 'rohim', 'abdul']
console.log(ab22.includes('jorina'));// false
console.log(ab22.includes('kamal')); //true



// Array isArray  (it cheak  is array yes or not)
var ab23 = "hello";
var ab24 = [45, 55, 65]
var ab25 = [];
console.log(Array.isArray(ab23)); //false
console.log(Array.isArray(ab24)); //true
console.log(Array.isArray(ab25)); //true










