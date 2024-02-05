//변수를 만드는 법
/*
1. 첫 글자로 문자, $, _ 만 사용가능
2. 중간 또는 끝의 글자는 문자, $, _ + 숫자 사용가능
3. 변수명은 대소문자를 구분한다.
4. 변수명을 지을때는 가능하면 변수의 의미를 생각해서 짓는다.
5. 변수를 복합 단어로 지을떈 두 가지 방법
   - 스네이크 표기법 : I am tom ==> i_am_tom
   - 낙타표기법 : I am tom ==> iAmTom
*/

// 변수를 선언할 때는 var 을 앞에 쓴다. es6  ==
// var let const 
var num = 10;
var num = 30;

let num2 = 10;
num2 = 20;

const pie = 3.14;
//pie = 3.111; 한번 넣으면 끝

console.log(pie);

//숫자
var intNum = 10;
var floatNum = 0.1;

console.log(intNum, floatNum);

//문자
var str01 = "문자열";
var str02 = '작은 따옴표로 만든 문자열';
var str03 = '10'
var str04 = '철수가 "말했다." "바보"';

console.log(str01, str02);

//불린
//컴퓨터는 1, 0으로 되어 있는 언어.
//1 true 0 false
//있는건 ture 0 false

var boolavr = true;
console.log(boolavr);

var emptyVar;
console.log(emptyVar);

var nullvar = null;
var nullvar2 = "";
Console.log (typeof(boolavr));
