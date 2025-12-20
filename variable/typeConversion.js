// type conversion

let a1 = 55;
console.log(a1.toString());
console.log(a1);

let a2 = '450';
console.log(Number.parseInt(a2));

let a3 = 'abcd';
console.log(Number.parseInt(a3)); // NaN

let a4 = 75.452;
console.log(Number.parseFloat(a4));  // 75.452
console.log(Number.parseInt(a4)); //  75

let a5 = '45632';
console.log(Number(a5));

let a6 = 777;
console.log(String(a6)); 

let a7 = Infinity;
console.log(Boolean(a7)); // true

let a8 = "";
console.log(Boolean(a8)); // flase

let a9 
console.log(Boolean(a9));  // false

let a10 = 555;
console.log(Boolean(a10)); // true

let a11 = 0;
console.log(Boolean(a11));  // false

let a12 = 'abc';
console.log(Boolean(a12)); // true


let a13 = null;
console.log(Boolean(a13)); // false

var x = true;
console.log(x.toString()); // true
