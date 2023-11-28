const startBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

let hours = 0
let seconds = 0
let minutes = 0

let leadingHours = 0
let leadingMinutes = 0
let leadingSeconds = 0

let timerIntervall = null
let timerStatus = 'stopped'
function stopWatch() {
    seconds++
    if(seconds / 60 === 1){
        seconds = 0
        minutes ++

        if(minutes / 60 === 1){
            minutes = 0
            hours ++
        }
    }

    if(seconds < 10){
        leadingSeconds = '0' + seconds.toString()
    }else{
        leadingSeconds = seconds;
    }
    if(hours < 10){
        leadingHours = '0' + hours.toString()
    }else{
        leadingHours = hours;
    }
    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString()
    }else{
        leadingMinutes = minutes;
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds
}



startBtn.addEventListener('click', function() {

    if(timerStatus === 'stopped'){
        timerIntervall = window.setInterval(stopWatch, 1000)
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"><img src="img/pause-svgrepo-com.svg" alt="pause"></i>'
        timerStatus = "started"
    }else{
        window.clearInterval(timerIntervall)
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"><img src="img/play-svgrepo-com.svg" alt="play"></i>'
        timerStatus = "stopped"
    }

})

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerIntervall)
    minutes = 0
    seconds = 0
    hours = 0

    document.getElementById('timer').innerHTML = '00.00.00'

})