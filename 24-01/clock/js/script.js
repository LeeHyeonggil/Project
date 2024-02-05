function updateClock() {
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
  
    const now = new Date(); //시간 데이터
    const hours = now.getHours() % 12; // 0~23 1~12
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDeg = (hours + minutes / 60) * 30; 
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;  //각도
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
  
  setInterval(updateClock, 1000);