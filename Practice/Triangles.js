//Write a program to input three sides of the triangle and check whether it is equilateral, isoceles, or scalene

var a = 3
var b = 12
var c = 9

if(a == b && b == c && a == c){
console.log("This triangle is an equilateral triangle.")
}
else if(a == b || a == c || b == c){
console.log("This triangle is an isoceles triangle.")
}
else if(a != b && a != c && b != c){
console.log("This triangle is a scalene triangle.")
}