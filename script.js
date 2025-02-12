const btnController = document.getElementById('btnController');

const timerWork = document.getElementById("timerWork");
const timerPause = document.getElementById("timerPause");
const performance = document.getElementById("performance");

const btnState = {
    p: "Pause",
    w: "Jobb"
};

let work = 57;
let pause = 17;
let pauseFactor = pause / work;
let minToBrainzero = 30 * 4:

let intervalWork, intervalPause;
let workStartTime = 0;
let elapsedTime = 0;
let pauseSurplus = 0;
let pauseEnd = 0;
let pausing = true;


document.getElementById("btnController").addEventListener('click', () => {
    if (pausing) {
	startWork();
    } else {
	startPause();
    }
});

document.getElementById("btnSettings").addEventListener('click', () => {
   console.log("settings button pressed"); 
});

function startWork() {
    btnController.textContent = btnState.p;
    pausing = false;
    clearInterval(intervalPause);
    workStartTime = Date.now();
    intervalWork = setInterval(workLoop, 1000);
}

function workLoop() {
    elapsedTime = Date.now() - workStartTime;
    timerWork.textContent = toDigits(elapsedTime);
    timerPause.textContent = toDigits(calcPause(elapsedTime) + pauseSurplus);
}


function startPause() {
    btnController.textContent = btnState.w;
    pausing = true;
    clearInterval(intervalWork);
    pauseSurplus = calcPause(elapsedTime) + pauseSurplus;
    pauseEnd = Date.now() + pauseSurplus;
    intervalPause = setInterval(pauseLoop, 1000);
}

function pauseLoop() { 
    pauseSurplus = pauseEnd - Date.now()
    if(pauseSurplus <= 0) {
	clearInterval(intervalPause);
	timerPause.textContent = "00:00:00";
	timerWork.textContent = "00:00:00";
	pauseSurplus = 0;
    }
    else {
    timerPause.textContent = toDigits(pauseSurplus);
    }
}

function toDigits(ms) {
    stamp = new Date(ms);
    return `${d(stamp.getHours() - 1)}:${d(stamp.getMinutes())}:${d(stamp.getSeconds())}`;
}

function d(s) {
    return s.toString().padStart(2, '0');
}

function calcPause(timeWorked) {
    return timeWorked * pauseFactor;
}

function getPerfomance(pauseLeftTotal) {
    let timeWorked = pauseLeftTotal/pauseFactor
    let percentage = timeWorked/(minToBrainzero * 60 * 1000);
    return (1 - percentage * 100);
}
