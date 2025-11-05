console.log("hello depuis script.js !");
let name="Haifa"
console.log("Bonjour" + name)
//bloc2
for (let i=1; i<= 20; i++) {
    console.log(i);
}
//pair / impair
/*for (let i=1; i<=20; i++){
    if(i%2 ===0){
        console.log(i, "pair");
        } else {
            console.log(i,"impair");
        }
}*/
//boucle (while)
let j=1;
while(j<=20){
    if(j%2 ===0){
        console.log(j, "pair");
    }else {
        console.log(j, "impair");
    }
    j++;
}
//check day
let day = 1;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("other day");
}
//bloc3
//sum
function sum(a, b) {
    return a+b;
}
console.log ("sum(3, 5)=", sum(3,5));
console.log("sum(10,7)=", sum(10,7));
//Age
function isAdult(age){
    return age >=18;
}
console.log("isAdult(20)=", isAdult(20));
console.log("isAdult(16)=",isAdult(16));
let x = 10; // variable globale
//testScope
function testScope() {
  let x = 20; // variable locale
  console.log("x inside function =", x);
}

testScope();
console.log("x outside function =", x);

//hoisting works
console.log(greet("Haifa"));
function greet(name) {
  return "Bonjour " + name;
}


console.log(aVar); 
var aVar = 10;

try {
  console.log(aLet);
} catch (e) {
  console.log("Erreur avec let :", e.message);
}
let aLet = 20;

//Bloc4
//Create an array
let numbers=[1, 2, 3, 4, 5];
console.log("Initial array:", [...numbers]);

//Add element
numbers.push(6)
console.log("After push:", [...numbers]);

//remove element
numbers.pop();
console.log("After pop:", [...numbers]);

//square
let squared = numbers.map(function(num) {
    return num * num;
  });
  console.log("Squared numbers:", squared);
//
  let even = numbers.filter(function(num) {
    return num % 2 === 0;
  });
  console.log("Even numbers:", even);

//sum
 let sum1= numbers.reduce(function(acc, num) {
    return acc + num;
  }, 0);
  console.log("Sum of all numbers:", sum1);

  //Create an object person
  let person = {
    name: "Haifa",
    age: 18
  };
  
  console.log("Person name:", person.name);
  console.log("Person age:", person.age);
  //bloc 5;
  let a = [1, 2, 3];
  let b = a; 
b.push(4);
console.log("a après modification de b :", a); 
console.log("b :", b);

//Copy a into c using spread
let c = [...a]; 
c.push(5);
console.log("a après modification de c:",a);
console.log("c:",c);

//Copy an object with nested properties
let obj1 ={name: "Haifa",details:{age:18, city:"Tunis"}};
let obj2=Object.assign({}, obj1);
obj2.name="Liza";
obj2.details.age=25;
console.log("obj1 après modification obj2:", obj1);
console.log("obj2:",obj2);

//
let obj3 = structuredClone(obj1);
obj3.details.city = "Kairouan"
console.log("obj1 après deep copy :", obj1);
console.log("obj3", obj3);