//1.1
let base: number = 10;
let height: number = 5;

let area: number = 0.5 * base * height;

console.log("Area of the triangle is: " + area);

//1.2
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

let c: number = 25;
let f: number = 77;

console.log(c + "°C = " + celsiusToFahrenheit(c) + "°F");
console.log(f + "°F = " + fahrenheitToCelsius(f) + "°C");


//1.3
let length: number = 10;
let width: number = 5;

let area: number = length * width;

console.log("Area of the rectangle = " + area);


//1.4
var radius: number = 7;
var area: number = 3.14 * radius * radius;

console.log("Area of the circle = " + area);


//1.5
var feet: number = 5;
var inches: number = feet * 12;

console.log(feet + " feet = " + inches + " inches");

//1.6
var a: number = 5;
var b: number = 3;
var c: number = 2;


var result1: number = (a - b) * (a + b);


var result2: number = (a - b) * (a - b);


var result3: number = (a + b + c) * (a + b + c);


var result4: number = (a - b - c) * (a - b - c);


var result5: number = (a - b) * (a - b) * (a - b);

console.log("a² − b² = " + result1);
console.log("(a − b)² = " + result2);
console.log("(a + b + c)² = " + result3);
console.log("(a − b − c)² = " + result4);
console.log("(a − b)³ = " + result5);
