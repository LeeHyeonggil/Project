/**
 * 참조변수 = new Date();
 */
const t = new Date();
//오늘은 0000년 00월 00일 (00요일) 입니다.
// console.log(t.getFullYear()+"년"+(t.getMonth()+1)+"월"+t.getDate()+"일"+t.getDay()+"요일"+"입니다.");
const weeks = t.getDay();
let week;
switch(weeks){
    case 0:
        week = "일요일";
    break;
    case 1:
        week = "월요일";
    break;
    case 2:
        week = "화요일";
    break;
    case 3:
        week = "수요일";
    break;
    case 4:
        week = "목요일";
    break;
    case 5:
        week = "금요일";
    break;
    case 6:
        week = "토요일";
    break;
}
console.log(t.getFullYear()+"년"+(t.getMonth()+1)+"월"+t.getDate()+"일"+week+"입니다.");
// console.log(week);
console.log(`오늘은 ${t.getFullYear()}년 ${t.getMonth()+1}월${t.getDate()}일`);