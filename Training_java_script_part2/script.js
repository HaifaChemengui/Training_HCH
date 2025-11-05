//bloc6
// Sélection des éléments avec querySelecto
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const myList = document.querySelector("#myList");

// Ajouter un <li> à la liste quand on clique sur le bouton "Add item"
addBtn.addEventListener("click", function() {
    const newItem = document.createElement("li"); 
    newItem.textContent = "New item"; 
    myList.appendChild(newItem); 
  
    addBtn.textContent = "Clicked!";
    setTimeout(() => {
      addBtn.textContent = "Add item"; 
    }, 1000);
  });

  // Supprimer le dernier <li> quand on clique sur le bouton "Remove last item"
removeBtn.addEventListener("click", function() {
    const lastItem = myList.lastElementChild; 
    if (lastItem) {
      myList.removeChild(lastItem); 
    }
  });


  //bloc7
  // Arrow function
const multiply = (a, b) => a * b;
console.log("multiply(3, 4) =", multiply(3, 4));


// Function with rest parameter
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("sumAll(1, 2, 3, 4) =", sumAll(1, 2, 3, 4)); // 10

// Destructuring an object
const person = { first: "Alice", last: "Smith" };
const { first, last } = person;

// Template literal
const greeting = `Hello ${first} ${last}`;
console.log(greeting); 
//Bloc8
// Closure avec compteur caché
function makeCounter() {
  let count = 0; 
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log("Counter:", counter());
console.log("Counter:", counter()); 
console.log("Counter:", counter()); 

//Borrow a method using call()
const person1 = {
  name: "Alice",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

const person2 = { name: "Alex" };

// Ajout de la méthode greet à person2 AVANT de l’appeler
person2.greet = person1.greet;

// Appels
person1.greet(); 
person2.greet();

//Classes et héritage
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

class ElectricCar extends Car {
  constructor(brand, battery) {
    super(brand);
    this.battery = battery;
  }

  charge() {
    console.log(`${this.brand} is charging... `);
  }
}

// 
const tesla = new ElectricCar("Tesla", "100%");
tesla.drive();  
tesla.charge(); 

//Bloc9

 /*import { checkNumber } from "./math.js";
 try {
  checkNumber(40);
  //checkNumber("Hello");
 }
 catch(error){
  console.log("An error occurred", error.message)
 }

//Use setInterval
setInterval(()=> {
  const now =new Date ()
  console.log('§{now.toLocaleTimeString()}');
}, 1000);

//Use import()
const loadBtn = document.getElementById("loadModuleBtn");

loadBtn.addEventListener("click", async () => {
  try {
    const module = await import("./math.js"); 
    module.checkNumber(100);     
    module.checkNumber("Hello"); 
  } catch (error) {
    console.error("Erreur du module dynamique:", error.message);
  }
});

*/
const maPromise = new Promise ((resolve, reject)=> {

});
//Bloc10

console.log("Avant la promesse");


const wait5Seconds = new Promise((resolve) => {
  setTimeout(() => {
    resolve("5seconds passed");
  }, 5000); 
});

wait5Seconds.then((message) => console.log(message));

console.log("Après la promesse");

//async/await
async function runWait() {
  const message = await wait5Seconds;
  console.log("Async/Await:", message)  
}
runWait();
