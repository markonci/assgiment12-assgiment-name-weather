const apiKey = 'e7cd88db0d1345408f8213333252806';
//----- start alocation al7ly----
var weather=[];
async function getWeatherNowLcoation() {
try {
    document.querySelector('.loader').classList.remove('d-none')
    let result= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=3`)
    let finalyResult=await result.json();
    weather=finalyResult;
    console.log(weather);
    display()
        document.querySelector('.loader').classList.add('d-none')

} catch (error) {
    document.querySelector("#error").innerHTML="faild load weather"
}
    
}
getWeatherNowLcoation()
//----- end alocation al7ly----



//----- start search location----
 function getWeatherBySearch(){
    let input=document.querySelector("#cityInput")
    let button=document.querySelector("#cityButton")
    button.addEventListener("click", async function(){
        let X=input.value        
try {
        document.querySelector('.loader').classList.remove('d-none')
            let result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${X}&days=3`)
        let finalyResult=await result.json();
        weather=finalyResult;
        console.log(weather);
        display()
            document.querySelector('.loader').classList.add('d-none')

} catch (error) {
    
}
    })
    
}
getWeatherBySearch()
//----- end search location----


//---------start display show------
function display() {
    var cartona=''
          var days = weather.forecast.forecastday;

    for (let i = 0; i < days.length; i++) {
                let day = days[i];

const dateObj = new Date(day.date);
const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
const dayNumber = dateObj.getDate();
const monthName = dateObj.toLocaleDateString('en-US', { month: 'long' });

const displayDate = i === 0 
  ? `${dayName} ${dayNumber} ${monthName}` 
  : `${dayName}`;

        cartona+=`        <div class="col-md-4">
          <div class="card">
            <div class="card-header d-flex justify-content-between ">
            <span class="date">${dayName}</span>
            <span class="date">${dayNumber} ${monthName}</span>
            </div>
            <div class="card-body">
              <p class="location-name">${weather.location.name}, ${weather.location.country}</p>
              <p class="text-white">max:<span class="h3 text-white">${day.day.maxtemp_c}°C</span></p>
              <p class="text-white">min:<span class="h3 text-white">${day.day.mintemp_c}°C</span></p>
              <p class="text-white">avg:<span class="h3 text-white">${day.day.avgtemp_c}°C</span></p>
              <img src="https:${day.day.condition.icon}" width="auto" alt="">
              <p class="day-condition">${day.day.condition.text}</p>
              <div>
                <img src="images/imgi_3_icon-umberella.png" alt=""><span class="ms-1 daily-chance">${day.day.daily_chance_of_rain}%</span>
                <img src="images/imgi_4_icon-wind.png" class="ms-3" alt=""><span class="m-1 daily-chance">${day.day.maxwind_kph}km/h</span>
                <img src="images/imgi_5_icon-compass.png" class="ms-3" alt=""><span class="ms-1 daily-chance">${weather.current.wind_dir}</span>
              </div>
            </div>
          </div>
        </div>`
        
    }
    document.querySelector(".row-card").innerHTML = cartona;
}




