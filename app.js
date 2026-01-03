// question 1;

var productname = "laptop";
var price = 999.99;
var instock = true;
console.log(productname,price,instock);
var remainder = 27 % 4;
console.log(remainder); 
var square = 12 *12;
console.log(square);

// question 2;

var num=8;
num++;
console.log(num);
var num1=15;
num1-=2;
console.log(num1);

// question 3;

var firstName="alex";
var lastName="SMITH";
var properName="alex"+" "+"SMITH";
productname.slice(0,1,firstName.toUpperCase());
console.log(properName);

// question 4;

var temperature = 25;
if (temperature > 30) {
    console.log("hot day");  
}
else if (temperature >= 20 && temperature <= 30){
     console.log("pleasant day");
}
else {
    console.log("cold day");
    
}
var Check1 = (15==="15");
console.log("is 15 strictly equal to '15'?",Check1);
var Check2 =(20 > 15 && 20 < 25);
console.log("is 20 between 15 and 25?", Check2);

// question 5;

var Check3 = (10 != 10 || 5 >3);
console.log("is 10 != 10 or 5 > 3?", Check3);

// question 6;

var colors = ["red","green","blue"];
colors.push("yellow");
colors.shift();
colors.splice(1,0, "purple");
console.log("final array:",colors);
console.log("array length:", colors.length);

// question 7;

var fruits =["apple","banana","cherry","data","elderberry"];
fruits.splice(2,1);
fruits.splice(2,1, "dragonfruit");
var middleElents = fruits.slice(1,4);
console.log("updated fruits:", fruits);
console.log("middle elements:",middleElents);

// question 8;

var sum = 0;
for (var i = 1; i <= 10; i++){
    if (i == 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log("number:", i);
    sum += i; 
}
console.log("total sum:", sum);

// question 9;

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// question 10;

var text = "The quick brown fox jumps over the lazy dog";
console.log("Position of fox:", text.indexOf("fox"));
console.log("Extracted:", text.slice(10, 19));
console.log("Contains dog?", text.includes("dog"));
console.log("Character at 10:", text.charAt(10));

// question 11;

var sentence = "i love javascript and javascript is awesome";
var replaceFirst = sentence.replace("JavaScript", "coding");
console.log(replaceFirst);
var replaceAll = sentence.replaceAll("JavaScript", "JS");
console.log(replaceAll);
var replaceUpper = sentence.replace("awesome", "AWESOME");
console.log(replaceUpper);

// question 12;

var num = 123.456789;
console.log("2 Decimals:", num.toFixed(2));
console.log("Nearest Integer:", Math.round(num));
console.log("Floor:", Math.floor(num));
console.log("Ceiling:", Math.ceil(num));
console.log("4 Decimals:", num.toFixed(4));

// question 13;

var randInt = Math.floor(Math.random() * 100) + 1;
console.log("Random Integer (1-100):", randInt);
var randDec = Math.random().toFixed(3);
console.log("Random Decimal (0-1):", randDec);
var randRange = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
console.log("Random (50-75):", randRange);

// question 14;

var num1 = Number("123"); 
var num2 = parseFloat("45.67");
var str1 = (789).toString();
var boolVal = Boolean("true");
console.log("Type of boolVal:", typeof boolVal); 

// question 15;

var now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());
console.log("Day:", now.getDate());
console.log("Hours:", now.getHours());
var formattedDate = now.toISOString().split('T')[0];
console.log("Formatted:", formattedDate);
var specDate = new Date(2024, 11, 25); 
console.log("Specific Date:", specDate.toDateString());

// question 16;

function calculate(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") {
        if (num2 === 0) return "Error: Division by zero";
        return num1 / num2;
    }
}
console.log(calculate(10, 5, "+"));
console.log(calculate(10, 0, "/")); 

// question 17;

var globalCounter = 0;

function incrementCounter() {
    var globalCounter = 0; 
    globalCounter++;      
    
    window.globalCounter++; 
    
    console.log("Local Counter:", globalCounter);
}
incrementCounter();
incrementCounter();
console.log("Final Global Counter:", globalCounter); 

// question 18;

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid number";
    }
}

console.log(getDayName(1)); 
console.log(getDayName(10)); 

// question 19;

var count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Blast off!");
var n = 5;
var factorial = 1;
while (n > 0) {
    factorial *= n;
    n--;
}
console.log("Factorial of 5 is:", factorial); 

// question 20;

var enteredPassword = "";
var secret = "secret123";
var attempts = 0;

do {
    attempts++;
    console.log("Attempt " + attempts + ": Asking for password...");
    
    if (attempts === 3) { 
        enteredPassword = "secret123";
    }

} while (enteredPassword !== secret && attempts < 5);

if (enteredPassword === secret) {
    console.log("Access Granted!");
} else {
    console.log("Account Locked! Too many attempts.");
}

//  question 21;    

var numbers = [1, 2, 3, 4, 5];
var squares = [];

for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] ** 2); 
}

console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squares); 

// question 22;   

var student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "History"]
}
student.age = 21;

student.isGraduated = false;

console.log("Student Name:", student.name);
console.log("Second Subject:", student.subjects[1]);

// question 23;

var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    getCarInfo: function() {
        return This car is a ${this.year} ${this.brand} ${this.model}.;
    }
};

console.log(car.getCarInfo());

// question 24;

var students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];


console.log("Students with score > 80:");
for (var i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
        console.log(students[i].name);
    }
}

// question 25;

function findMax(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}


let myNumbers = [10, 45, 2, 89, 34];
console.log("Maximum Number is:", findMax(myNumbers));