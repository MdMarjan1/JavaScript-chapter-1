
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
// console.log(touristPlace);

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

``
