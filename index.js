let hour = 12
let minutes = 30
let seconds = 50

function getTime(){
    return hour + " : " + minutes + " : " + seconds
}

function clock(){
    seconds++

    if(seconds === 60){
        seconds = 0;
        minutes++;

        if(minutes === 60){
            minutes = 0;
            hour++;

            if(hour === 24){
                hour = 0;
            }
        }
    }

    time.innerText = getTime()
}

let time = document.querySelector("div")

time.innerText = getTime()

let clockInterval = setInterval(clock, 1000)