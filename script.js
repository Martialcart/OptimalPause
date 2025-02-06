const btnController = document.getElementById('btnController');

const timerWork = document.getElementById("timerWork");
const timerPause = document.getElementById("timerPause");
const performance = document.getElementById("performance");

const btnState = {
    p: "Pause",
    w: "Jobb"
};

let workStartTime = 0;
let pausing = true;



document.getElementById("btnController").addEventListener('click', () => {
    if (pausing) {
	console.log("click while pausing");
	startWork();
	
    } else {
	console.log("click while working"); 
	startPause();
    }
});

document.getElementById("btnSettings").addEventListener('click', () => {
   console.log("settings button pressed"); 
});

function startWork() {
    btnController.textContent = btnState.p ;
    pausing = false;
}

function startPause() {
    btnController.textContent = btnState.w
    pausing = true;
}
