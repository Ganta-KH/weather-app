function showData(infos) {
    const [condition, region, time, temp, feelslike, humidity, wind] = infos;

    showCondition(condition);
    showRegion(region);
    showTime(time);
    showTemp(temp);
    showFeelslike(feelslike);
    showHumidity(humidity);
    showWind(wind);
}

function showCondition(condition) {
    const conditionP = document.getElementById("condition");
    conditionP.textContent = condition;
}

function showRegion(region) {
    const regionP = document.getElementById("region");
    regionP.textContent = region;
}

function showTime(time) {
    const timeP = document.getElementById("time");
    timeP.textContent = time;
}

function showTemp(temp) {
    const tempP = document.getElementById("temp");
    tempP.textContent = temp;
}

function showFeelslike(feelslike) {
    const feelslikeH1 = document.getElementById("feelslike");
    feelslikeH1.textContent = `Feels like: ${feelslike}`;
}

function showHumidity(humidity) {
    const humidityP = document.getElementById("humidity");
    humidityP.textContent = `Humidity: ${humidity}`;
}

function showWind(wind) {
    const windP = document.getElementById("wind");
    windP.textContent = `Wind: ${wind}`;
}

export default showData;
