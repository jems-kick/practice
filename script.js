const h = document.getElementById('hr');
const m = document.getElementById('min');
const s = document.getElementById('sec');
const vday = document.getElementById('day');
const date = document.getElementById('date');


function time() {
    const j = new Date();
    const hr = j.getHours();
    const min = j.getMinutes();
    const sec = j.getSeconds();
    h.innerHTML = hr + ':';
    m.innerHTML = min + ':';
    s.innerHTML = sec;
}

time()

setInterval(time, 1)

function day() {
    const k = new Date();
    const day = k.getDay();
    if (day == 0) {
        vday.innerHTML = 'Sunday';
    } else if (day == 1) {
        vday.innerHTML = 'Monday';
    } else if (day == 2) {
        vday.innerHTML = 'Tuesday';
    } else if (day == 3) {
        vday.innerHTML = 'Wednesday';
    } else if (day == 4) {
        vday.innerHTML = 'Thursday';
    } else if (day == 5) {
        vday.innerHTML = 'Friday';
    } else{
        vday.innerHTML = 'Saturday';
    }
    
}

day()

function dmy() {
    const n = new Date();
    const mday = n.getDay();
    const month = n.getMonth();
    const year = n.getFullYear();
    date.innerHTML = mday + '/' + month + '/' + year
}

dmy()
