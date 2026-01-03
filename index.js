function family(event) {
    event.preventDefault();
    let inputsearch = document.querySelector("#search-input");
    let heading = document.querySelector("#weather-city");
    heading.innerHTML = inputsearch.value;
}

let formdate = document.querySelector("#search-form");
formdate.addEventListener("submit", family);

let now = new Date();

function formalTime(date) {
    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    let day = days[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();
    if(hour < 10) {
        hour = `0${hour}`;
    }
    if(minute < 10) {
        minute = `0${minute}`;
    }
    return `${day} ${hour}:${minute}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formalTime(now);