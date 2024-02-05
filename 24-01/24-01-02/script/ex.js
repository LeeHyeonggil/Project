/*선택문
switch(변수){
    case"값1":
        결과식1;
    break;
    case "값2":
        결과식2;
    break;
    default:
        결과디폴트;
}
조건문
if(변수 == 값1){
    결과식1
}else if(변수 == 값2){
    결과식2
}else{
    결과디폴트
}
*/
let a=20;
if(a == "10"){
    console.log("a는 10");
}else if(a == "15"){
    console.log("a는 15");
}else if(a == "20"){
    console.log("a는 20");
}else{
    console.log("a는 모르는 수");
}
switch(a){
    case "10":
        console.log("a는 10");
    break;
    case "15":
        console.log("a는 15");
    break;
    case "20":
        console.log("a는 20");
    break;
    default:
        console.log("a는 모르는 수");
}