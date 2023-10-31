function attachEvents() {
    const locationRef = document.getElementById("location");
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", getLocations);
    const divSection = document.getElementById("forecast");
    const currentConditionSection = document.getElementById("current");
    const upcomingConditionSection = document.getElementById("upcoming");



    const allLocations = `http://localhost:3030/jsonstore/forecaster/locations`;


    async function getLocations() {
        const response = await fetch(allLocations);
        const data = await response.json();

        let locationInfo = data.find(location => location.name === locationRef.value); // check if object exists in array

        if (locationInfo) {
            divSection.style.display = ""; // make section visible
            let code = locationInfo.code;
            getCurrentWeather(code);
            getUpcomingWeather(code);
        } else {
            console.log("Error");
        }
    }

    let d = `&#176`;

    let Enum = {
        "Rain": '&#x2614',
        "Sunny": '&#x2600',
        "Partly sunny": '&#x26C5',
        "Overcast": '&#x2601'
    }

    async function getCurrentWeather(code) {
        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        let data = await response.json()

        let name = data.name;
        let condition = data.forecast.condition;
        let high = data.forecast.high;
        let low = data.forecast.low;



        currentConditionSection.innerHTML += `<div class="forecasts">
                        <span class="condition symbol">${Enum[condition]}</span>
                        <span class="condition">
                            <span class="forecast-data">${name}</span>
                            <span class="forecast-data">${low}${d}/${high}${d}</span>
                            <span class="forecast-data">${condition}</span>
                            </span>
                            </div>`;

    }



    async function getUpcomingWeather(code) {
        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        let data = await response.json();

        upcomingConditionSection.innerHTML += `<div class="forecast-info">`;

        let divElement = document.getElementsByClassName("forecast-info")[0];

        for (const day of data.forecast) {
            let condition = day.condition;
            let high = day.high;
            let low = day.low;

            divElement.innerHTML += `<span class="upcoming">
                                      <span class="symbol">${Enum[condition]}</span>
                                      <span class="forecast-data">${low}${d}/${high}${d}</span>
                                      <span class="forecast-data">${condition}</span>
                                      </span>`


        }

    }

}

attachEvents();
