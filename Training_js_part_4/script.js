console.log("Block 11 ");

// create Set from [1,2,2,3]
const numbers = [1, 2, 2, 3];
const uniqueSet = new Set(numbers);
console.log("Set:", uniqueSet);

// Generator yielding 1–3
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
for (let n of numberGenerator()) console.log("Generator:", n);

// Proxy logging property access
const person = { name: "Alice", age: 25 };
const proxy = new Proxy(person, {
  get(target, prop) {
    console.log(`Accessed: ${prop}`);
    return target[prop];
  }
});
console.log(proxy.name);
console.log(proxy.age);

// Function composition
const add2 = x => x + 2;
const multiply3 = x => x * 3;
const compose = (f, g) => x => f(g(x));
console.log("Composed:", compose(multiply3, add2)(4));

// Symbol hidden property
const secret = Symbol("secret");
const user = { name: "Bob", [secret]: "hiddenData" };
for (let key in user) console.log("for...in:", key);
console.log("Access Symbol:", user[secret]);

//BLOCK 12 
console.log("===== Block 12 =====");

// WebSocket
const socket = new WebSocket("wss://echo.websocket.events");
socket.onopen = () => {
  console.log("WebSocket connected");
  socket.send("Hello WebSocket");
};
socket.onmessage = e => console.log("WS message:", e.data);

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered"));
}

// Intl date formatting
const today = new Date();
console.log("FR:", new Intl.DateTimeFormat("fr-FR").format(today));
console.log("JP:", new Intl.DateTimeFormat("ja-JP").format(today));

// Debounce (500ms)
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const searchInput = document.getElementById("search");
const output = document.getElementById("output");
const handleSearch = debounce((e) => {
  output.textContent = "You searched: " + e.target.value;
}, 500);
searchInput.addEventListener("input", handleSearch);

//Bloc 13
//insecure code
const safeDiv = document.createElement("div");
const userInput = "<img src=x onerror=alert('XSS')>";
safeDiv.textContent = userInput;
document.body.appendChild(safeDiv);

//garbage collection
function createObject() {
  let temp = { data: "Temporary data" };
  console.log("Object created:", temp);
  temp = null; 
  console.log("Reference removed → GC can collect it");
}
createObject();

//let/const instead of var
const pi = 3.14;
let radius = 5;
let area = pi * radius * radius;
console.log("Circle area:", area);

