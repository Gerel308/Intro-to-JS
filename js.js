let x = 4;
let y = 3;
document.getElementById("demo").innerHTML = x > y;
document.getElementById("demo1").innerHTML = x < y;
document.getElementById("demo2").innerHTML = x >= y;
document.getElementById("demo3").innerHTML = y >= x;
document.getElementById("demo4").innerHTML = x == x;
document.getElementById("demo5").innerHTML = x === x;

let a = 10;
let b = 12;
document.getElementById("demo6").innerHTML = x > y && a < b;
document.getElementById("demo7").innerHTML = x > y && a > b;
document.getElementById("demo8").innerHTML = x + y != a + b;
//If Else Statements
let time = 10;
if (time < 18) {
  document.getElementById("demo9").innerHTML = "Good day";
} else {
  document.getElementById("demo9").innerHTML = "Good evening";
}
//if else Statements
let grade = 70;
if (grade >= 90) {
  document.getElementById("demo10").innerHTML = "A";
} else if (grade >= 80) {
  document.getElementById("demo10").innerHTML = "B";
} else if (grade >= 70) {
  document.getElementById("demo10").innerHTML = "C";
} else if (grade >= 60) {
  document.getElementById("demo10").innerHTML = "D";
} else {
  document.getElementById("demo10").innerHTML = "F";
}
// if else Statements
let num = 15;
if (num % 3 == 0 && num % 5 == 0) {
  document.getElementById("demo11").innerHTML = "Fizz Buzz";
} else if (num % 5 == 0) {
  document.getElementById("demo11").innerHTML = "Buzz";
} else if (num % 3 == 0) {
  document.getElementById("demo11").innerHTML = "Fizz";
} else {
  document.getElementById("demo11").innerHTML = "No Fizz Buzz";
}
