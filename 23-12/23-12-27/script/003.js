/*
A = B;  //B를 A에 대입한다. 대입연산
A == B; //A와 B는 같다. (100 == "100")
A === B; //A와 B는 같다. (100 === 100)
A += B; ==> A = A + B;
A -= B; ==> A = A - B;
A *= B; ==> A = A * B;
A /= B; ==> A = A / B;
A %= B; ==> A = A % B;
*/
var num1 = 15;
var num2 = 3;
var result;
result = num1 += num2;
console.log(result);

result = num1 -= num2;
console.log(result);

result = num1 *= num2;
console.log(result);

result = num1 /= num2;
console.log(result);

result = num1 %= num2;
console.log(result);
