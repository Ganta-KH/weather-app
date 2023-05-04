import showData from "./UI";

function init() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const search = document.getElementById("search");
        const location = search.value;

        getData(location);

        search.value = "";
    });

    getData("Jijel");
}

async function getData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=857d379b247f42ce86f153950232504&q=${location}&aqi=no`,
        { mode: "cors" }
    );

    const data = await response.json();

    const [condition, region, time, temp, feelslike, humidity, wind] =
        await Promise.all([
            getCondition(data),
            getLocation(data),
            getTime(data),
            getTemperature(data),
            getFeel(data),
            getHumidity(data),
            getWind(data),
        ]);

    showData([condition, region, time, temp, feelslike, humidity, wind]);
}

function getLocation(data) {
    const { country, region } = data.location;

    return `${country}, ${region}`;
}

function getCondition(data) {
    const { text } = data.current.condition;
    return text;
}

function getTemperature(data) {
    const { temp_c } = data.current; // , temp_f
    return `${temp_c} C°`; // , ${temp_f}F°
}

function getWind(data) {
    const { wind_kph } = data.current; // , wind_mph
    return `${wind_kph} km/h`; // , ${wind_mph} mi/h
}

function getHumidity(data) {
    const { humidity } = data.current;
    return `${humidity} %`;
}

function getFeel(data) {
    const { feelslike_c } = data.current; // , feelslike_f
    return `${feelslike_c} C°`; // , ${feelslike_f}F°
}

function getTime(data) {
    const { localtime } = data.location;
    return localtime;
}

export default init;
