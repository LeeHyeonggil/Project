
let a=10, b=20, m=30, n=40;
let result;

result = a > b || b >= m || m > n; //f ||f ||f ==> f
console.log(result);

result = a > b || b >= m || m <= n; //f ||f ||t ==> t 하나만 맞아도 맞음
console.log(result);

result = a <= b && b >= m && m <= n; //t || f || t ==> f 하나만 틀려도 틀림
console.log(result);

result = a <= b && b >= m && m <= n; //f || f || t ==> f
console.log(result);

result = a <= b && b <= m && m <= n; //t || t || t ==> t
console.log(result);

result = !(a > b); //t
console.log(result);


result = a > b ? "noscript" : "javascript";
console.log(result);











