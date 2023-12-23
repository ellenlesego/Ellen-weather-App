function refreshweather (response){
    let temperatureelement = document.querySelector ("#temperature");
    let temperature = response.data.temperature.current;
    temperatureelement.innerHTML = math.round (temperature);
   
}

function searchcity (city){
    let api = "71f9ca0043bt0dd90932oabfad0d3cb6";
    let apiurl = 'https://api.shecodes.io/weather/v1/current?query${city}&key=${apikey}&units=metric';
   axios,get (apiurl).then (refreshweather);
   
}

function handlesearchsubmit(event){
    event.preventdefault();
    let searchinput = document.querySelector("search-form-input");
    let cityelement = document.querySelector("#city");
    cityelement.innerHTML = searchinput.value;
    searchcity (searchinput.value);

}

let searchformelement = document.querySelector("search-form");

searchformelement.addEventListener("submit", handlesearchsubmit);



