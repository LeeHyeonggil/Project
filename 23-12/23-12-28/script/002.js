let num1 = 10;
let num2 = 20;
let result;

num1--;   //num1 ==> 9
console.log(num1); //9

num1++;
console.log(num1); //10

result = num2++; 
console.log("result : " + result); //20
console.log("num2 : " + num2);  //21

result = ++num2;
console.log("result : " + result); //22
console.log("num2 : " + num2); //22