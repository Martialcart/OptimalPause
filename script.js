const timerWork = document.getElementById("timerWork");
const timerPause = document.getElementById("timerPause");
const performance = document.getElementById("performance");

let workStartTime = 0;




document.getElementById("btnWork").addEventListener( 'click', () => {
   console.log("work button pressed"); 
});
document.getElementById("btnPause").addEventListener( 'click', () => {
   console.log("pause button pressed"); 
});
document.getElementById("btnSettings").addEventListener( 'click', () => {
   console.log("settings button pressed"); 
});
