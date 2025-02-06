const timerWork = document.getElementById("timerWork");
const timerPause = document.getElementById("timerPause");
const performance = document.getElementById("performance");

let workStartTime = 0;
let working = false;
let pausing = false;




document.getElementById("btnWork").addEventListener('click', () => {
    if (!working) {
	console.log("click work when not working");
    }
   console.log("work button pressed"); 
});
document.getElementById("btnPause").addEventListener('click', () => {
   console.log("pause button pressed"); 
});
document.getElementById("btnSettings").addEventListener('click', () => {
   console.log("settings button pressed"); 
});
