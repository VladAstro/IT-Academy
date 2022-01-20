// window.onload = function () {
//   window.setInterval(function(){
//     let date = new Date();

//     let hours = date.getHours();
//     let min = date.getMinutes();
//     let seconds = date.getSeconds();

//     if (hours < 10) hours = '0' + hours;
//     if (min < 10) min = '0' + min;
//     if (seconds < 10) seconds = '0' + seconds;
    
//     let clock = hours + ':' + min + ':' + seconds;

//     document.getElementById('clock').innerHTML = clock;
//   }, 1000);
// };

const clock =  document.getElementById('clock');

let clockHours = 23;
let clockMinutes = 59;
let clockSeconds = 55;

const addClock = (hoursMinutesSeconds) =>{
  if (hoursMinutesSeconds < 10) {
    hoursMinutesSeconds = '0' + hoursMinutesSeconds;
  } 
  return hoursMinutesSeconds;
} 

const clock_2 = () => {
  clock.innerHTML = addClock(clockHours) + ':' + addClock(clockMinutes) + ':' + addClock(clockSeconds);
} 

const clock_1 = () => {
  if (clockSeconds < 59) {
    clockSeconds ++;
    clock_2();
    return;  
  }
  clockSeconds = 0;  
    
  if (clockMinutes < 59) {
    clockMinutes  ++;
    clock_2();
    return;
  }
  clockMinutes = 0;

  if (clockHours < 23) {
    clockHours ++;
    clock_2();
    return;
  }
  clockHours  = 0;
}

clock_1();

setInterval(() => clock_1(),1000);
