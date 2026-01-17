//1.1
var base = 10;
var height = 5;
var area = 0.5 * base * height;
console.log("Area of the triangle is: " + area);

//1.2
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
var c = 25;
var f = 77;
console.log(c + "°C = " + celsiusToFahrenheit(c) + "°F");
console.log(f + "°F = " + fahrenheitToCelsius(f) + "°C");

//1.3
var length = 10;
var width = 5;
var area = length * width;
console.log("Area of the rectangle = " + area);

//1.4
var radius = 7;
var area = 3.14 * radius * radius;
console.log("Area of the circle = " + area);

//1.5
var feet = 5;
var inches = feet * 12;
console.log(feet + " feet = " + inches + " inches");

//1.6
var a = 5;
var b = 3;
var c = 2;

var result1 = (a - b) * (a + b);

var result2 = (a - b) * (a - b);

var result3 = (a + b + c) * (a + b + c);

var result4 = (a - b - c) * (a - b - c);

var result5 = (a - b) * (a - b) * (a - b);
console.log("a² − b² = " + result1);
console.log("(a − b)² = " + result2);
console.log("(a + b + c)² = " + result3);
console.log("(a − b − c)² = " + result4);
console.log("(a − b)³ = " + result5);
