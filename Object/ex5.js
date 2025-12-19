// Object
// Problem 1
let colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520',
}
    console.log(colors["golden rod"]);


//Problem 2
const car = {
    make: "Toyata",
    model: "Corolla",
    year: 2020,

};
    car.passenger_capacity = 5;
    // car["passenger_capacity"] = 5  // alternative way
    console.log(car);



//Problem 3
const student = {
    name: "Marjan Ahemad",
    id: 5432,
    physics:{
        subject: "HSC Physics",
        author: "Honey sing",
        marks: 30,
    }
};
    console.log(student.physics.marks); // 30


//Problem 4
//How to count Object key
let students = {
    name: "Ariana Grande",
    age: 21,
    city: 'Shariatpur',
    isStuent: true,
};
    let property = Object.keys(students);
    console.log(property.length);


// problem 5
let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true,
}
    for(let shows in myObject){
       console.log("Key:",shows,"|","type:",typeof myObject[shows]);
    }