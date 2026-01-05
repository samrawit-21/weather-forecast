let apiKey = "o0334a459at0ffc9a191a1b183f3f306";
function bahri(response) { 
    let currentTime = Math.round(response.data.temperature.current);
 let currentDegree = document.querySelector("#weather-Num");
 currentDegree.innerHTML = currentTime;

 console.log(response.data.condition.description);
;
}

function family(event) {
    event.preventDefault();
    let inputsearch = document.querySelector("#search-input");
    let heading = document.querySelector("#weather-city");
    let city = inputsearch.value;
    heading.innerHTML = city;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(bahri);

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